import React, { useState } from "react";
// models
import { IProduct } from "../models";
// components
import { ErrorMessage } from "./ErrorMessage";
// libs
import axios from "axios";

// product to add with dynamic title taken from form
const productData: IProduct = {
    title: "",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
    rating: {
        rate: 42,
        count: 10,
    },
};

interface CreateFormProps {
    onCreate: (product: IProduct) => void;
}

// form to add a product to the list of products
export default function CreateForm({ onCreate }: CreateFormProps) {
    // value from input
    const [value, setValue] = useState<string>("");
    // error message
    const [error, setError] = useState<string>("");

    // actions on submit button click
    const handleSubmit = async (event: React.FormEvent) => {
        // prevent from default form behavior
        event.preventDefault();
        // clean error from start
        setError("");

        // if input is empty or contains only whitespaces -- show error message
        if (value.trim().length === 0) {
            setError("Please enter valid title.");
            return;
        }

        // set title taken from input
        productData.title = value;
        // add a new product
        const response = await axios.post<IProduct>(
            "https://fakestoreapi.com/products",
            productData
        );

        // bring the responce data for processing to the parent function
        onCreate(response.data);
    };

    // actions on input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // change the value in state
        setValue(event.target.value);
    };

    return (
        <>
            <form
                className="flex items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="border py-2 px-4"
                    placeholder="Enter product title..."
                    value={value}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="py-2 px-4 border border-yellow-400 bg-yellow-400 hover:text-white"
                >
                    Create
                </button>
            </form>
            {error && <ErrorMessage error={error} />}
        </>
    );
}
