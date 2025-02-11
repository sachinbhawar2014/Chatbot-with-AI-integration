import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        catagory: {
            type: String,
            required: true,
            enum: [
                "Electronics",
                "Furniture",
                "Household Products",
                "Kitchen Products",
                "Toys",
                "Fashion",
                "Women's Clothing",
                "Men's Clothing",
            ],
        },
        description: { type: String, required: true },
        SupplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    },
    { collection: "Products" }
);

const ProductsModel = mongoose.Model("Products", ProductsSchema);

export default ProductsModel;
