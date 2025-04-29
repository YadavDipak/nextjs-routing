"use client";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductPage;
