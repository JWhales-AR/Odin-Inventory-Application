import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (_res, req) => {
  req.render("index", {});
});

export default indexRouter;
