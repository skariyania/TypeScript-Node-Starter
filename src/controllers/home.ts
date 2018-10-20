import { Request, Response, NextFunction } from "express";
import Offer from "../models/Offer";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response, next: NextFunction) => {
  Offer.find()
  .limit(10)
  .exec((err, offerList) => {
    if (err) { return next(err); }
    res.render("home", {
      title: "Home",
      offerList: offerList
    });
  });
};
