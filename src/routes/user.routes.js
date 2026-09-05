// why this file :__- node.js kab run karna hai 
// agar user url hit kiya hai to run kar do 

import Router from "express";
import {registerUser} from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(registerUser); // /user/register

export default router;