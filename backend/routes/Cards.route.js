import express from "express";
import { setCards, getCards } from "../controllers/Cards.controllers.js";

const router = express.Router();

// Add middleware to parse the request body
router.use(express.json());

router.get("/", getCards);

router.post("/add", setCards);


export default router;