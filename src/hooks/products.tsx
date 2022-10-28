import { useState, useEffect } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string>("");

    // add product to the list of products
    const addProduct = (product: IProduct) => {
        setProducts([...products, product]);
    };

    async function fetchProducts() {
        try {
            setError("");
            setLoading(true);
            // get list of 5 products
            const response = await axios.get<IProduct[]>(
                "https://fakestoreapi.com/products?limit=5"
            );
            setProducts(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        // make request to get products
        fetchProducts();
    }, []);

    return { products, loading, error, addProduct };
}
