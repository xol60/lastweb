import express from "express";
import { addGroup,deleteGroup } from "../controllers/group.js";
const router=express.Router();
router.post('/',addGroup);
router.post('/delete',deleteGroup);

export default router;