import express from "express";
import { addCus,getCus,loginCus } from "../controllers/customer.js";
import {verifyTokenOwner,verifyToken} from "../controllers/verifyToken.js";
const router=express.Router();
router.post('/login',loginCus);
router.post('/',addCus);
router.get('/',verifyToken,getCus);
export default router;