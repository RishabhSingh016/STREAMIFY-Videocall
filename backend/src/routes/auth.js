import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.js";
import { protectRoute } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout); //post method is for operation that change the server's state.

router.post("/onboarding", protectRoute, onboard);

//if user is logged in or not
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.User });
});

export default router;
