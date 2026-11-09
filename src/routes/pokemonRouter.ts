import { Router } from "express";

import * as pokemonController from "../controllers/pokemonController.ts";

const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.listAllPokemon);

export default pokemonRouter;
