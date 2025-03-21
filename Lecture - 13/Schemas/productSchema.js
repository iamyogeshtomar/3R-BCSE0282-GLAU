const { Schema, model } = require(`mongoose`);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    imageURL: {
      type: String,
      default: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRRdvpS3KRcG9a43mI5-vbU2kysPylGtfHw&s`,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      trim: true,
      default: `No description provided!!!`,
    },
    category: {
      type: String,
      enum: [
        `Apparels`,
        `Electronics`,
        `Cosmetics`,
        `Groceries`,
        `Eatables`,
        `Sports`,
        `Cutlery`,
        `Accessories`,
        `Household`,
        `Misclleneous`,
      ],
    },
    // rating: {
    //   type: Number,
    //   min: 0,
    //   max: 5,
    // },
    //   reviews:[{}]
  },
  {
    timestamps: true,
    updatedAt: [{ type: Date }],
  }
);

module.exports = new model(`Product`, productSchema);
