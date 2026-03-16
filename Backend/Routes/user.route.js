import router from "express";
import { handleUserSignup, handleUserLogin } from "../Controller/user.controller.js";

const userRouter = router()

userRouter.post("/signup", handleUserSignup)
userRouter.post("/login", handleUserLogin)

export default userRouter