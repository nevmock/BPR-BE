import { Router } from "express";
import DashboardController from "./dashboard-controller.js";
import tryCatch from "../../utils/tryCatcher.js";
import authToken from "../../middlewares/auth-token-middleware.js";

const router = Router();

router.get("/products-stats", [
  // authToken,
  tryCatch(DashboardController.getProductStats)
]);

router.get("/daily-products", [
  authToken,
  tryCatch(DashboardController.getDailyProductsTraffic)
]);

router.get("/products-total-report", [
  authToken,
  tryCatch(DashboardController.getCountProducts)
]);



export default router;
