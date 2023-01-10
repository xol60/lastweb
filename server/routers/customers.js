import express from "express";
import { addCus,getCus,logCus } from "../controllers/customer.js";
const router=express.Router();
router.post('/login',logCus);
router.post('/',addCus);

router.get('/',getCus);
export default router;