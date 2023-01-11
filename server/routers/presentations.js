import express from "express";
import { addPresentation,getPresentation,deletePresentation } from "../controllers/presentation.js";
const router=express.Router();
router.post('/add',addPresentation);
router.post('/delete',deletePresentation);
router.get('/',getPresentation);
export default router;