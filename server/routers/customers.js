import express from "express";
import { addCus,getCus,logCus } from "../controllers/customer.js";
const router=express.Router();
router.post('/',addCus);
router.get('/',getCus);
router.post('/login',logCus);
export default router;