import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import PINEKController from "./PINEK-controller.js";
import { createPINEK } from "./PINEK-schema.js";
import tryCatch from "../../utils/tryCatcher.js";

class PINEKRoutes extends BaseRoutes {
    routes(){
        this.router.get("/", [
            tryCatch(PINEKController.get)
        ])

        this.router.get("/:id", [
            tryCatch(PINEKController.getById)
        ])

        this.router.put("/", [
            validateCredentials(createPINEK),
            tryCatch(PINEKController.post)
        ])

        this.router.post("/", [
            validateCredentials(createPINEK),
            tryCatch(PINEKController.post)
        ])
    }
}

export default new PINEKRoutes().router;