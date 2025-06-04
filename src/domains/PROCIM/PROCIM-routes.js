import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import PROCIMController from "./PROCIM-controller.js";
import { createPROCIM } from "./PROCIM-schema.js";

class PROCIMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(PROCIMController.get)
        ])

        this.router.post("/", [
            validateCredentials(createPROCIM),
            tryCatch(PROCIMController.post)
        ])
    }
}

export default new PROCIMRoutes().router;