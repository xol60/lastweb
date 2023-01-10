import express from "express";
import { addCus,getCus } from "../controllers/customer.js";
const router=express.Router();
router.post('/',addCus);
router.get('/',getCus);
export default router;