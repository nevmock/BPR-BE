import BaseRoutes from "../../base_classes/base-routes.js";
import authToken from "../../middlewares/auth-token-middleware.js";

import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KSSController from "./KSS-controller.js";
import { createKSS } from "./KSS-schema.js";

class KSSRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KSSController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KSSController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKSS),
            tryCatch(KSSController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createKSS),
            tryCatch(KSSController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KSSController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
          tryCatch(KSSController.generatePDF)
        ]);

        this.router.get('/:id/generate-docx', [
            authToken,
            tryCatch(KSSController.generateDOCX)
        ]);
    }
}

export default new KSSRoutes().router;