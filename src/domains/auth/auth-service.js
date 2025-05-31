import BaseError from "../../base_classes/base-error.js";

import { generateVerifEmail } from "../../utils/bodyEmail.js";
import sendEmail from "../../utils/sendEmail.js";
import joi from "joi";
import db from "../../config/db.js";
import { parseJWT, generateToken } from "../../utils/jwtTokenConfig.js";
import { matchPassword, hashPassword } from "../../utils/passwordConfig.js";

class AuthService {
    async login(email, password) {
        let user = await db.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw BaseError.badRequest("Invalid credentials");   
        }

        const isMatch = await matchPassword(password, user.password);

        if (!isMatch) {
            throw BaseError.badRequest("Invalid credentials");
        }

        const accessToken = generateToken({ id : user.id, type: "access" }, "1d");
        const refreshToken = generateToken({ id : user.id, type: "refresh" }, "365d");

        return { access_token: accessToken, refresh_token: refreshToken };
    }

    async register(data) {
        const emailExist = await db.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (emailExist) {
            let validation = "";
            let stack = [];

            validation += "Email already taken.";

            stack.push({
                message: "Email already taken.",
                path: ["email"]
            });

            throw new joi.ValidationError(validation, stack);
        }

        const createdUser = await db.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: await hashPassword(data.password),
                role: "Admin"
            }
        })
        
        if (!createdUser) {
            throw Error("Failed to register");
        }

        const accessToken = generateToken({ id : createdUser.id, type: "access" }, "1d");
        const refreshToken = generateToken({ id: createdUser.id, type: "refresh" }, "365d");

        return { message: "User register successfully", access_token: accessToken, refresh_token: refreshToken };
    }

    async refreshToken(token) {
        const decoded = parseJWT(token);

        if (!decoded) {
            throw BaseError.unauthorized("Invalid token");
        }

        if (decoded.type !== "refresh"){
            throw BaseError.unauthorized("Invalid token type");
        }

        const user = await db.user.findUnique({
            where: {
                id: decoded.id
            }
        })

        if (!user) {
            throw BaseError.notFound("User not found");
        }

        const accessToken = generateToken({id: user.id, type: 'access'}, "1d");

        return accessToken;
    }

    async getProfile(id) {
        const user = await db.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        if (!user) {
            throw BaseError.notFound("User not found");
        }

        return user;
    }

    async updateProfile(id, data) {
        const user = await db.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        if (!user) {
            throw BaseError.notFound("User not found");
        }

        const updatedUser = await db.user.update({
            where: {
                id: id
            },
            data: {
                name: data.name
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        return updatedUser;
    }
}

export default new AuthService();