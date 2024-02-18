// Assuming you have a type for Product
type Product = {
  id: number;
  name: string;
  title: string;
  description: string;

  // other product properties...
};

export async function getProducts(page: number): Promise<Product[]> {
  const response = await fetch(
    `https://dummyjson.com/products?limit=10&page=${page}`
  );
  const data: Product[] = await response.json();
  return data;
}
