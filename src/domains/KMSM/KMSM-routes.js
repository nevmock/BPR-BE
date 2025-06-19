import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMSMController from "./KMSM-controller.js";
import { createKMSM } from "./KMSM-schema.js";

class KMSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KMSMController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KMSMController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKMSM),
            tryCatch(KMSMController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKMSM),
            tryCatch(KMSMController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KMSMController.deleteById)
        ])
    }
}

export default new KMSMRoutes().router;