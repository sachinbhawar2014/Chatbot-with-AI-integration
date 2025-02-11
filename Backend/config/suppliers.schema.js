import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact: {
            email: { type: String, required: true },
            phone: { type: String, required: true },
            address: { type: String, required: true },
        },
        productCategories: {
            type: [String],
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
            required: true,
        },
    },
    { collection: "Suppliers" }
);

// Create the model for Suppliers
const SupplierModel = mongoose.model("Supplier", SupplierSchema);

export default SupplierModel;
