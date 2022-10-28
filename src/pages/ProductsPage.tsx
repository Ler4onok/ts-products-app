import React, { useContext } from "react";
// hooks
import { useProducts } from "../hooks/products";
// compomnents
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateForm from "../components/CreateForm";
// models
import { IProduct } from "../models";
// context
import { ModalContext } from "../context/ModalContext";

// page with list of products
export default function ProductsPage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    // add product and close modal
    const handleCreate = (product: IProduct) => {
        addProduct(product);
        close();
    };

    return (
        <div className="container max-w-2xl mx-auto pt-5">
            {modal && (
                <Modal title="Create a new product" onClose={close}>
                    <CreateForm onCreate={handleCreate} />
                </Modal>
            )}
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            <button
                className="border bg-yellow-400 py-2 px-4 mb-2"
                onClick={open}
            >
                Create new product
            </button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
