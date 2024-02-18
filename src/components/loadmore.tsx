// "use client"

// import { useEffect, useState } from "react";
// import { query } from "@/actions/fetch-products";
// import ProductList from "./ProductList";
// import { Product } from "@/types/types";

// export function LoadMore() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [page, setPage] = useState(1);

//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   const loadMoreProduct = async () => {
//     // Once the page 8 is reached repeat the process all over again.
//     await delay(2000);
//     const nextPage = (page % 7) + 1;
//     const newProducts = (await query(nextPage)) ?? [];
//     setProducts((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
//     setPage(nextPage);
//   };

//   useEffect(() => {
    
//     loadMoreProduct();
//   }, []);

//   return (
//     <>
//       <ProductList products={products}/>
//       <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"></div>
//     </>
//   );
// }
