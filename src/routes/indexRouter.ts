import { Router } from "express";

import navLinks from "../navlinks.ts";
import pokemonRouter from "./pokemonRouter.ts";
import typesRouter from "./typesRouter.ts";
import trainerRouter from "./trainerRouter.ts";

const indexRouter = Router();

indexRouter.get("/", (_req, res) => {
  res.render("index", { navLinks });
});

indexRouter.use("/pokemon", pokemonRouter);
indexRouter.use("/types", typesRouter);
indexRouter.use("/trainers", trainerRouter);

export default indexRouter;
