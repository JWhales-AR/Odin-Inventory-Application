import { Router } from "express";

import * as trainerController from "../controllers/trainerController.ts";

const trainerRouter = Router();

trainerRouter.get("/", trainerController.listAllTrainers);

trainerRouter.post("/", trainerController.addNewTrainer);

trainerRouter.get("/new", trainerController.showAddTrainerForm);

trainerRouter.get("/:trainerId", trainerController.listPokemonForTrainer);

trainerRouter.get(
  "/:trainerId/new",
  trainerController.showAddTrainerPokemonForm,
);

trainerRouter.post("/:trainerId", trainerController.addNewTrainerPokemon);

trainerRouter.get("/:trainerId/delete", trainerController.deleteTrainer);

export default trainerRouter;
