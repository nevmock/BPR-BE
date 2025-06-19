import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMMController from "./KMM-controller.js";
import { createKMM } from "./KMM-schema.js";

class KMMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KMMController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KMMController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKMM),
            tryCatch(KMMController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKMM),
            tryCatch(KMMController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KMMController.deleteById)
        ])
    }
}

export default new KMMRoutes().router;