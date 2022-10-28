import React from "react";
// navigation
import { Link } from "react-router-dom";

// header with app name and links
export default function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">TS APP</span>
            <span>
                <Link to="/" className="mr-4">
                    Products
                </Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    );
}
