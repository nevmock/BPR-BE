import { Router } from "express";
import DashboardController from "./dashboard-controller.js";
import tryCatch from "../../utils/tryCatcher.js";
import authToken from "../../middlewares/auth-token-middleware.js";

const router = Router();

router.get("/", [
  authToken,
  tryCatch(DashboardController.getDashboard)
]);

export default router;
