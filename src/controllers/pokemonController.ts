import type { Request, Response } from "express";

import * as db from "../db/queries.ts";
import navLinks from "../navlinks.ts";

export async function listAllPokemon(_req: Request, res: Response) {
  const pokemon = await db.getAllPokemon();
  res.render("pokemon", { navLinks, pokemon, typeName: undefined });
}
