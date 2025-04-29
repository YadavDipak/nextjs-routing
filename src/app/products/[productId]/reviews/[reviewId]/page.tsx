// "use client";

// import { useParams } from "next/navigation";

// const ReviewPage = () => {
//   const { productId, reviewId } = useParams();

//   return (
//     <div>
//       <h1>Review Details</h1>
//       <p>Product ID: {productId}</p>
//       <p>Review ID: {reviewId}</p>
//     </div>
//   );
// };

// export default ReviewPage;

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>Review Details</h1>
      <p>Product ID: {productId}</p>
      <p>Review ID: {reviewId}</p>
    </div>
  );
}
