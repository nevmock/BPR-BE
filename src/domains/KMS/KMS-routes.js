import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMSController from "./KMS-controller.js";
import { createKMS } from "./KMS-schema.js";

class KMSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KMSController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KMSController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKMS),
            tryCatch(KMSController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKMS),
            tryCatch(KMSController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KMSController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
          tryCatch(KMSController.generatePDF)
        ]);

        this.router.get('/:id/generate-docx', [
            authToken,
            tryCatch(KMSController.generateDOCX)
        ]);
    }
}

export default new KMSRoutes().router;