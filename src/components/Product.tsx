import React, { useState } from "react";
// models
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct;
}

// product with image and details
export default function Product({ product }: ProductProps) {
    // product description status (hidden or shown)
    const [isShowDetails, setShowDetails] = useState(false);

    return (
        <div className="border py-2 px-4 flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className="py-2 px-4 border bg-slate-400"
                onClick={() => setShowDetails(!isShowDetails)}
            >
                {isShowDetails ? "Hide details" : "Show details"}
            </button>
            {isShowDetails && <p>{product.description}</p>}
        </div>
    );
}
