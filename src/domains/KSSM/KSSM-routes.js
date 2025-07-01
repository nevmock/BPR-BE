import BaseRoutes from "../../base_classes/base-routes.js";

import tryCatch from "../../utils/tryCatcher.js";
import validateCredentials from '../../middlewares/validate-credentials-middleware.js';
import authToken from "../../middlewares/auth-token-middleware.js";
import KSSMController from "./KSSM-controller.js";
import { createKSSM } from "./KSSM-schema.js";

class KSSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(KSSMController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(KSSMController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createKSSM),
            tryCatch(KSSMController.post)
        ])
        
        this.router.put("/:id", [
            authToken,
            validateCredentials(createKSSM),
            tryCatch(KSSMController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(KSSMController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
          tryCatch(KSSMController.generatePDF)
        ]);

        this.router.get('/:id/generate-docx', [
            authToken,
            tryCatch(KSSMController.generateDOCX)
        ]);
    }
}

export default new KSSMRoutes().router;