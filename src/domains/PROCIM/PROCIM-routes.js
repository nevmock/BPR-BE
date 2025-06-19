import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import PROCIMController from "./PROCIM-controller.js";
import { createPROCIM } from "./PROCIM-schema.js";

class PROCIMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(PROCIMController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(PROCIMController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createPROCIM),
            tryCatch(PROCIMController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createPROCIM),
            tryCatch(PROCIMController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(PROCIMController.deleteById)
        ])
    }
}

export default new PROCIMRoutes().router;