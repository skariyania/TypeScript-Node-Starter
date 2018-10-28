import mongoose from "mongoose";

export type OfferModel = mongoose.Document & {
  title: String,
  description: String,
  affiliateLink: String
};

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  affiliateLink: String
}, { timestamps: true });


// export const Offer: OfferType = mongoose.model<OfferType>('Offer', offerSchema);
const Offer = mongoose.model("Offer", offerSchema);
export default Offer;
