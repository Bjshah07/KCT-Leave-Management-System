import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import { handleUserSignup, handleUserLogin, updateProfile, changePassword } from "../Controller/user.controller.js";
import { getLeaveBalance } from "../Controller/dashboard.controller.js";

const userRouter = Router()

userRouter.post("/signup", handleUserSignup)
userRouter.post("/login", handleUserLogin)

userRouter.patch("/profile", verifyToken, updateProfile)
userRouter.patch("/change-password", verifyToken, changePassword)
userRouter.get("/leave-balance", verifyToken, getLeaveBalance)

export default userRouter
