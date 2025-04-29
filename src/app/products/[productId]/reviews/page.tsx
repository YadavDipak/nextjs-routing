"use client";
import { useParams } from "next/navigation";

const ProductReviewsPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>Reviews for Product: {productId}</h1>
      <p>Here you can see all the reviews for the product.</p>
    </div>
  );
};

export default ProductReviewsPage;
