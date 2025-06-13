import BaseRoutes from "../../base_classes/base-routes.js";
import validateCredentials from "../../middlewares/validate-credentials-middleware.js";
import tryCatch from "../../utils/tryCatcher.js";
import KMMController from "./KMM-controller.js";
import { createKMM } from "./KMM-schema.js";

class KMMRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", [
            tryCatch(KMMController.get)
        ])

        this.router.get("/:id", [
            tryCatch(KMMController.getById)
        ])

        this.router.post("/", [
            validateCredentials(createKMM),
            tryCatch(KMMController.post)
        ])

        this.router.put("/", [
            validateCredentials(createKMM),
            tryCatch(KMMController.post)
        ])
    }
}

export default new KMMRoutes().router;