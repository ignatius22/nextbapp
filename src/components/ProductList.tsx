"use client";
import { formatCurrency } from "@/lib/util";
import { Product } from "@/types/types";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList: React.FC<Product> = ({products}) => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} flexWrap="wrap" marginTop={5}>
        <Grid container spacing={3}>
          {products.products &&
            products.products.map((product: Product) => (
              <Grid item xs={2.3} md={2.3} key={product.id}>
                <Link
                  href={`/pages/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={183}
                      height={238}
                    />
                    <Box
                      display="flex"
                      flexDirection="column"
                      textAlign={"center"}
                      width="100%"
                      height={"100%"}
                      mt={1}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        textAlign={"center"}
                        pb={2}
                      >
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#252B42",
                          }}
                        >
                          {product.title}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            color: "#737373",
                            fontWeight: "bold",
                            paddingTop: 2,
                          }}
                        >
                          {product.brand}
                        </span>
                      </Box>
                      <Box textAlign={"center"} p={1}>
                        <span
                          style={{
                            fontSize: 16,
                            color: "#BDBDBD",
                            fontWeight: "bold",
                          }}
                        >
                          {formatCurrency(product.price)}
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            color: "#23856D",
                            fontWeight: "bold",
                            marginLeft: 12,
                          }}
                        >
                          ${product.discountPercentage}
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
