import { Router } from "express";

import * as trainerController from "../controllers/trainerController.ts";

const trainerRouter = Router();

trainerRouter.get("/", trainerController.listAllTrainers);

trainerRouter.post("/", trainerController.addNewTrainer);

trainerRouter.get("/new", trainerController.showAddTrainerForm);

trainerRouter.get("/:trainerId", trainerController.listPokemonForTrainer);

export default trainerRouter;
