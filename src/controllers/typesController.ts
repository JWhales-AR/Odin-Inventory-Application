import type { Request, Response } from "express";

import * as db from "../db/queries.ts";
import navLinks from "../navlinks.ts";

export async function listAllTypes(_req: Request, res: Response) {
  const types = await db.getAllTypes();
  res.render("types", { navLinks, types });
}

export async function listPokemonForType(req: Request, res: Response) {
  const pokemon = await db.getPokemonForType(Number(req.params.typeId));
  res.render("pokemon", { navLinks, pokemon });
}
