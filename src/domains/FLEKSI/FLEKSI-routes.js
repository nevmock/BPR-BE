import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import FLEKSIController from "./FLEKSI-controller.js";
import { createFLEKSI } from "./FLEKSI-schema.js";
import tryCatch from "../../utils/tryCatcher.js";
import authToken from "../../middlewares/auth-token-middleware.js";

class FLEKSIRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            authToken,
            tryCatch(FLEKSIController.get)
        ])

        this.router.get("/:id", [
            authToken,
            tryCatch(FLEKSIController.getById)
        ])

        this.router.post("/", [
            authToken,
            validateCredentials(createFLEKSI),
            tryCatch(FLEKSIController.post)
        ])

        this.router.put("/:id", [
            authToken,
            validateCredentials(createFLEKSI),
            tryCatch(FLEKSIController.put)
        ])

        this.router.delete("/:id", [
            authToken,
            tryCatch(FLEKSIController.deleteById)
        ])

        this.router.get('/:id/generate-pdf', [
            authToken,
            tryCatch(FLEKSIController.generatePDF)
        ]);
    }
}

export default new FLEKSIRoutes().router;