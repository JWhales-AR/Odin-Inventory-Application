import type { Request, Response } from "express";

import * as db from "../db/queries.ts";
import { body, validationResult } from "express-validator";
import navLinks from "../navlinks.ts";

export async function listAllTrainers(_req: Request, res: Response) {
  const trainers = await db.getAllTrainers();
  res.render("trainers", {
    navLinks,
    trainers,
  });
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
    trainerId,
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
  async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(500).send(err);
      return;
    }
    const { trainerName, trainerGender, trainerAge: _trainerAge } = req.body;
    const trainerAge = Number(_trainerAge);
    await db.addNewTrainer(trainerName, trainerGender, trainerAge);
    res.redirect("/trainers");
  },
];

const addNewTrainerPokemonValidators = [
  body("pokemonNickname")
    .trim()
    .notEmpty()
    .withMessage("Nickname must not be empty"),
  body("pokemonSpecies")
    .trim()
    .notEmpty()
    .withMessage("Species must not be empty")
    .isNumeric()
    .withMessage("Species must be a numeric identifier"),
];

export const addNewTrainerPokemon = [
  ...addNewTrainerPokemonValidators,
  async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(500).send(err);
      return;
    }
    const trainerId = Number(req.params.trainerId);
    const { pokemonNickname, pokemonSpecies: _pokemonSpecies } = req.body;
    const pokemonSpecies = Number(_pokemonSpecies);
    await db.addNewTrainerPokemon(trainerId, pokemonSpecies, pokemonNickname);
    res.redirect("/trainers");
  },
];

export async function showAddTrainerForm(_req: Request, res: Response) {
  res.render("add-trainer-form", { navLinks });
}

export async function showAddTrainerPokemonForm(req: Request, res: Response) {
  const trainerId = Number(req.params.trainerId);
  const trainerName = await db.getTrainerName(trainerId);
  const pokemon = await db.getAllPokemon();
  res.render("add-trainer-pokemon-form", {
    navLinks,
    trainerId,
    trainerName,
    pokemon,
  });
}

export async function deleteTrainer(req: Request, res: Response) {
  const trainerId = Number(req.params.trainerId);
  await db.deleteTrainer(trainerId);
  res.redirect("/trainers");
}
