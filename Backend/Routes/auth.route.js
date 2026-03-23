import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";

const authRouter = Router();

authRouter.get('/me', verifyToken, async (req, res) => {
  res.json(req.user);
});

authRouter.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: "Logged out" });
});

export default authRouter;
