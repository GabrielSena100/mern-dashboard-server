import express from 'express'
import { getUser, getDashboardStats } from '../controllers/generalController.js'

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/", (req, res) => {
    res.status(200).json({message: "works"})
});
router.get("/dashboard", getDashboardStats);
export default router;