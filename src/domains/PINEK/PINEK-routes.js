import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import PINEKController from "./PINEK-controller.js";
import { createPINEK } from "./PINEK-schema.js";
import tryCatch from "../../utils/tryCatcher.js";
import authToken from "../../middlewares/auth-token-middleware.js";

class PINEKRoutes extends BaseRoutes {
    routes(){
        this.router.get("/", [
            authToken,
            tryCatch(PINEKController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(PINEKController.getById)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createPINEK),
            tryCatch(PINEKController.put)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createPINEK),
            tryCatch(PINEKController.post)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(PINEKController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
          tryCatch(PINEKController.generatePDF)
        ]);
    }
}

export default new PINEKRoutes().router;