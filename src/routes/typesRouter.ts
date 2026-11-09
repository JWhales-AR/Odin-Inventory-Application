import { Router } from "express";

import * as typesController from "../controllers/typesController.ts";

const typesRouter = Router();

typesRouter.get("/", typesController.listAllTypes);

typesRouter.get("/:typeId", typesController.listPokemonForType);

export default typesRouter;
