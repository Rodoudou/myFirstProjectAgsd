import mongoose from "mongoose";

export const FicheInscription = mongoose.model("FicheInscription", {
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  date: {
    type: String,
  },
  sex: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  adresse: {
    type: String,
  },
  codePostal: {
    type: String,
  },
  ville: {
    type: String,
  },
  activities: {
    type: Object
},
droitImage : {
  type: Boolean
},
certificatM: {
    type: String
},
photo: {
    type: String
},
autorisation: {
    type: String
},
assurance: {
    type: String
},

creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
