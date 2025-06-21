import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KSMController from "./KSM-controller.js";
import { createKSM } from "./KSM-schema.js";

class KSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KSMController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KSMController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKSM),
            tryCatch(KSMController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKSM),
            tryCatch(KSMController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KSMController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
          tryCatch(KSMController.generatePDF)
        ]);
    }
}

export default new KSMRoutes().router;