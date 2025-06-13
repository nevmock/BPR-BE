import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMSMController from "./KMSM-controller.js";
import { createKMSM } from "./KMSM-schema.js";

class KMSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KMSMController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KMSMController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKMSM),
            tryCatch(KMSMController.post)
        ])

        this.router.put("/", [
            validateCredentials(createKMSM),
            tryCatch(KMSMController.post)
        ])
    }
}

export default new KMSMRoutes().router;