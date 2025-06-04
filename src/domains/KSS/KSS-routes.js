import BaseRoutes from "../../base_classes/base-routes.js";

import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KSSController from "./KSS-controller.js";
import { createKSS } from "./KSS-schema.js";

class KSSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KSSController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KSSController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKSS),
            tryCatch(KSSController.post)
        ])

        this.router.put("/", [
            validateCredentials(createKSS),
            tryCatch(KSSController.post)
        ])
    }
}

export default new KSSRoutes().router;