import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMSController from "./KMS-controller.js";
import { createKMS } from "./KMS-schema.js";

class KMSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KMSController.get)
        ])

        this.router.post("/", [
            validateCredentials(createKMS),
            tryCatch(KMSController.post)
        ])
    }
}

export default new KMSRoutes().router;