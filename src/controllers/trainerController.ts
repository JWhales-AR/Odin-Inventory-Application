import type { Request, Response } from "express";

import * as db from "../db/queries.ts";
import navLinks from "../navlinks.ts";

export async function listAllTrainers(_req: Request, res: Response) {
  const trainers = await db.getAllTrainers();
  res.render("trainers", { navLinks, trainers });
}

export async function listPokemonForTrainer(req: Request, res: Response) {
  const trainerId = Number(req.params.trainerId);
  const trainerName = await db.getTrainerName(trainerId);
  const pokemon = await db.getTrainerPokemon(trainerId);
  res.render("pokemon", {
    navLinks,
    pokemon,
    typeName: undefined,
    trainerName,
  });
}
