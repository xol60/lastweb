import express from "express";
import { addPresentation,getPresentation } from "../controllers/presentation.js";
const router=express.Router();
router.post('/add',addPresentation);
router.get('/',getPresentation);
export default router;