import { Request, Response, NextFunction } from "express";
import { default as Offer } from "../models/Offer";


/**
 * GET /offer/create
 * create offer form
 */
export let getCreateOffer = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
      }
      res.render("offer/create", {
        title: "Create New Offer"
      });
};

/**
 * POST /offer/create
 * Create new offer
 */
export let postCreateOffer = (req: Request, res: Response, next: NextFunction) => {
    const offer = new Offer({
        title: req.body.title,
        description: req.body.description,
        affiliateLink: req.body.link
    });
    offer.save((err) => {
        if (err) { return next(err); }
        res.redirect("/");
    });
};