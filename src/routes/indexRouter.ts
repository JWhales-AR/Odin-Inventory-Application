import { Router } from "express";

import * as db from "../db/queries.ts";

const indexRouter = Router();

interface NavLink {
  label: string;
  href: string;
}
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "By Types", href: "/types" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pokemon", href: "/pokemon" },
];

indexRouter.get("/", (_res, req) => {
  req.render("index", { navLinks });
});

indexRouter.get("/pokemon", async (_res, req) => {
  const pokemon = await db.getAllPokemon();
  req.render("pokemon", { navLinks, pokemon });
});

indexRouter.get("/types", async (_res, req) => {
  const types = await db.getAllTypes();
  req.render("types", { navLinks, types });
});

indexRouter.get("/types/:typeId", async (res, req) => {
  const pokemon = await db.getPokemonForType(Number(res.params.typeId));
  req.render("pokemon", { navLinks, pokemon });
});

export default indexRouter;
