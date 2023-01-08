import express from "express";
import { addGroup } from "../controllers/group.js";
const router=express.Router();
router.post('/',addGroup);

export default router;