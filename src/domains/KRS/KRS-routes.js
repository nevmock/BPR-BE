import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KRSController from "./KRS-controller.js";
import { createKRS } from "./KRS-schema.js";

class KRSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KRSController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KRSController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKRS),
            tryCatch(KRSController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKRS),
            tryCatch(KRSController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KRSController.deleteById)
        ])
    }
}

export default new KRSRoutes().router;