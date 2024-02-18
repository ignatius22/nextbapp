import { url } from "@/lib/util";
import { Product } from "@/types/types";

export async function useFetchProducts() {
  let isLoading: boolean = true;
  let products: any = null;

  try {
    const res = await fetch(url);
    const data: Product[] = await res.json();
    products = data;
    isLoading = false;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
  return { products, isLoading };
}

export async function query(
  limit: number,
  skip: number
): Promise<{ data: Product[]; loading: boolean }> {
  let loading = true;
  let data: Product[] = [];

  try {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    data = await res.json();
    loading = false;
  } catch (error) {
    console.error("Failed to fetch products", error);
    loading = false;
  }

  return { data, loading };
}


export async function getSingleProduct(id: string) {
  let isLoading: boolean = true;
  let product: any = null;
  try {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    product = data;
    isLoading = false;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }

  return product;
}
