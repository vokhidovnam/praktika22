import express  from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)

req.user = user;
next();


export default router;