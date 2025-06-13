import BaseRoutes from "../../base_classes/base-routes.js";
import tryCatch from "../../utils/tryCatcher.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import KARController from "./KAR-controller.js";
import { createKAR } from "./KAR-schema.js";

class KARRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KARController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KARController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKAR),
            tryCatch(KARController.post)
        ])

        this.router.put("/", [
            validateCredentials(createKAR),
            tryCatch(KARController.post)
        ])
    }
}

export default new KARRoutes().router;