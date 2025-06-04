import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KRSController from "./KRS-controller.js";
import { createKRS } from "./KRS-schema.js";

class KRSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KRSController.get)
        ])

        this.router.post("/", [
            validateCredentials(createKRS),
            tryCatch(KRSController.post)
        ])
    }
}

export default new KRSRoutes().router;