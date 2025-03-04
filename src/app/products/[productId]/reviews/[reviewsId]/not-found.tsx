"use client"

import { usePathname } from "next/navigation"

const NotFound = () => {
const pathname = usePathname();
const productId = pathname.split("/")[2];
const reviewsId = pathname.split("/")[4]

  return (
    <div>
        <h2>Review Not Found</h2>
        <p>Could not find requested resource of Review {reviewsId} for Product {productId}</p>
    </div>
  )
}

export default NotFound