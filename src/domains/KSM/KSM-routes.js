import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KSMController from "./KSM-controller.js";
import { createKSM } from "./KSM-schema.js";

class KSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KSMController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KSMController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKSM),
            tryCatch(KSMController.post)
        ])

        this.router.put("/", [
            validateCredentials(createKSM),
            tryCatch(KSMController.post)
        ])
    }
}

export default new KSMRoutes().router;