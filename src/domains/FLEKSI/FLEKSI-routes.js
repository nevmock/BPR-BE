import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import FLEKSIController from "./FLEKSI-controller.js";
import { createFLEKSI } from "./FLEKSI-schema.js";
import tryCatch from "../../utils/tryCatcher.js";

class FLEKSIRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(FLEKSIController.get)
        ])

        this.router.get("/:id", [
            tryCatch(FLEKSIController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createFLEKSI),
            tryCatch(FLEKSIController.post)
        ])

        this.router.put("/", [
            validateCredentials(createFLEKSI),
            tryCatch(FLEKSIController.post)
        ])
    }
}

export default new FLEKSIRoutes().router;