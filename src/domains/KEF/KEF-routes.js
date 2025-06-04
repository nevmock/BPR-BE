import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KEFController from "./KEF-controller.js";
import { createKEF } from "./KEF-schema.js";

class KEFRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KEFController.get)
        ])

        this.router.post("/", [
            validateCredentials(createKEF),
            tryCatch(KEFController.post)
        ])
    }
}

export default new KEFRoutes().router;