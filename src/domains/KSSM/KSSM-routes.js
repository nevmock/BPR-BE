import BaseRoutes from "../../base_classes/base-routes.js";

import tryCatch from "../../utils/tryCatcher.js";
import validateCredentials from '../../middlewares/validate-credentials-middleware.js';
import authToken from "../../middlewares/auth-token-middleware.js";
import KSSMController from "./KSSM-controller.js";
import { createKSSM } from "./KSSM-schema.js";

class KSSMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KSSMController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KSSMController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKSSM),
            tryCatch(KSSMController.post)
        ])
        
        this.router.put("/", [
            validateCredentials(createKSSM),
            tryCatch(KSSMController.post)
        ])
    }
}

export default new KSSMRoutes().router;