import { Router } from "express";

import navLinks from "../navlinks.ts";
import pokemonRouter from "./pokemonRouter.ts";
import typesRouter from "./typesRouter.ts";

const indexRouter = Router();

indexRouter.get("/", (_req, res) => {
  res.render("index", { navLinks });
});

indexRouter.use("/pokemon", pokemonRouter);
indexRouter.use("/types", typesRouter);

export default indexRouter;
