"use client";
import { query } from "@/actions/fetch-products";
import ProductList from "@/components/ProductList";
import { Product } from "@/types/types";
import Loader from "@/ui/Loader";
import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(11);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 30;

  const fetchMoreProducts = async (newLimit: number) => {
    try {
      setIsLoading(true);
      const { data: newProducts, loading } = await query(newLimit, skip);

      if (!loading) {
        if (newProducts && newProducts.length > 0) {
          setProducts(
            (prevProducts) => [...prevProducts, ...newProducts] as Product[]
          );
          setSkip((prevSkip) => prevSkip + newLimit);
        } else {
          // No more products to fetch
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching more products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: initialProducts, loading } = await query(limit, 0);

        if (!loading) {
          setProducts((initialProducts as unknown as Product[]) || []);
          setSkip(limit);
        }
      } catch (error) {
        console.error("Error fetching initial products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container
      style={{ marginTop: "10%", marginBottom: "8%", position: "relative" }}
    >
      <Box textAlign="center">
        <Typography fontSize={20} color="#737373" fontFamily={"Montserrat"}>
          Featured Products
        </Typography>
        <Typography
          fontSize={24}
          fontWeight="bold"
          color="#252B42"
          fontFamily={"Montserrat"}
          letterSpacing={1.8}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography fontSize={14} color="#737373" fontFamily={"Montserrat"}>
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>

      {!isLoading ? (
        <ProductList
          products={products}
          id={0}
          title={""}
          description={""}
          price={0}
          discountPercentage={0}
          rating={0}
          stock={0}
          brand={""}
          category={""}
          thumbnail={""}
          images={[]}
        />
      ) : (
        <Loader />
      )}
      <Box textAlign="center" mt={12}>
        {isLoading && <Typography>Loading more products...</Typography>}
        {!isLoading && (
          <Button onClick={() => fetchMoreProducts(limit)}>
            LOAD MORE PRODUCTS
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Products;