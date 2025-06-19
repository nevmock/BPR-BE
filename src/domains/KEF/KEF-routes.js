import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KEFController from "./KEF-controller.js";
import { createKEF } from "./KEF-schema.js";

class KEFRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KEFController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KEFController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKEF),
            tryCatch(KEFController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKEF),
            tryCatch(KEFController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KEFController.deleteById)
        ])
    }
}

export default new KEFRoutes().router;