import { Router } from "express";
const router = Router();

import { login, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

router.post("/login", validateLoginInput, login);
router.post("/register", validateRegisterInput, register);

export default router;
