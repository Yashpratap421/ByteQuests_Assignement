import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";

const Products = ({ posts = [] }) => {

    return (
        <>
            <div className="products-header">
                <div className="header-title">
                    <h2>Products</h2>
                    <span className="header-line"></span>
                    <h2>All Products</h2>
                </div>
                <div className="header-count">
                    <h1 className="text-[15px]">{posts.length} Products</h1>
                    <BiUpload className="header-icon"/>
                </div>

            </div>
            <div className="products-container">

                {posts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <CiBookmark className="product-bookmark" />
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-name">
                            <h2 className="product-title">{product.title}</h2>
                        </div>
                        <div className="product-detail">
                            <div className="product-price">
                                <p><FaRupeeSign /> {product.price}</p>
                                <h2>{product.price * 2}</h2>
                                <h1 className="text-green-400">(50% Off)</h1>
                            </div>
                            <TbShoppingBagPlus className="product-icon" />
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
