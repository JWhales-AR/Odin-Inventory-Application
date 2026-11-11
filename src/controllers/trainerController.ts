import type { Request, Response } from "express";

import * as db from "../db/queries.ts";
import { body, validationResult } from "express-validator";
import navLinks from "../navlinks.ts";

export async function listAllTrainers(_req: Request, res: Response) {
  const trainers = await db.getAllTrainers();
  res.render("trainers", { navLinks, trainers });
}

export async function listPokemonForTrainer(req: Request, res: Response) {
  const trainerId = Number(req.params.trainerId);
  const trainerName = await db.getTrainerName(trainerId);
  const listHeading = `${trainerName}'s Pokémon`;
  const pokemon = await db.getTrainerPokemon(trainerId);
  res.render("trainer-pokemon", {
    navLinks,
    pokemon,
    listHeading,
  });
}

const addNewTrainerValidators = [
  body("trainerName").trim().notEmpty().withMessage("Name can not be empty"),
  body("trainerGender")
    .trim()
    .notEmpty()
    .withMessage("Gender must not be empty"),
  body("trainerAge")
    .trim()
    .notEmpty()
    .withMessage("Age must not be empty")
    .isNumeric()
    .withMessage("Age must be a number"),
];

export const addNewTrainer = [
  ...addNewTrainerValidators,
  (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(500).send(err);
      return;
    }
    const { trainerName, trainerGender, trainerAge } = req.body;
    db.addNewTrainer(trainerName, trainerGender, trainerAge);
    res.redirect("/trainers");
  },
];

export async function showAddTrainerForm(_req: Request, res: Response) {
  res.render("add-trainer-form", { navLinks });
}
