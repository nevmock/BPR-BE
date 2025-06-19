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

        this.router.post('/generate-pdf', [
            authToken,
          tryCatch(KSSMController.generatePDF)
        ]);
    }
}

export default new KSSMRoutes().router;