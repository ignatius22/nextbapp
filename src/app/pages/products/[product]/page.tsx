import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { getSingleProduct, useFetchProducts } from "@/actions/fetch-products";
import ProductList from "@/components/ProductList";
import ProductDetail from "@/components/ProductDetail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewSection from "@/components/ReviewSection";
import PromotionSection from "@/components/PromotionSection";
import Link from "next/link";

async function Product({ params }: { params: any }) {
  const { products, isLoading } = await useFetchProducts();
  const product = await getSingleProduct(params.product);
  console.log(product, "single product");

  return (
    <div>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <Box>
          <Container
            style={{
              flexDirection: "row",
              display: "flex",
              height: 58,
              gap: 8,
              alignItems: "center",
            }}
          >
            <Link href="/pages" style={{ textDecoration: "none" }}>
              <h1 style={{ fontSize: 14, fontWeight: "600", color: "#252B42" }}>
                Home
              </h1>
            </Link>
            <ArrowForwardIosIcon htmlColor="#BDBDBD" style={{ fontSize: 16 }} />
            <span style={{ fontSize: 14, fontWeight: "400", color: "#BDBDBD" }}>
              Shop
            </span>
          </Container>
        </Box>

        <Container>
          <ProductDetail product={product} />
        </Container>
      </div>

      <Container style={{ height: 450 }}>
        <Container
          style={{
            flexDirection: "row",
            display: "flex",
            height: 58,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            width: "97%",
          }}
        >
          <p style={{ fontSize: 14, fontWeight: "600", color: "#737373" }}>
            Description
          </p>

          <p style={{ fontSize: 14, fontWeight: "600", color: "#737373" }}>
            Additional Information
          </p>
          <p style={{ fontSize: 14, fontWeight: "600", color: "#737373" }}>
            Reviews <span style={{ color: "#23856D" }}>(0)</span>
          </p>
        </Container>
        <Container>
          <ReviewSection />
        </Container>
      </Container>

      <Container>
        <Box ml={3} borderBottom={"1px #ECECEC solid"}>
          <p
            style={{
              fontFamily: "inherit",
              fontSize: 24,
              fontWeight: "600",
              color: "#252B42",
            }}
          >
            BESTSELLER PRODUCTS
          </p>
        </Box>
        <Box mb={12}>
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
        </Box>
      </Container>
      <Container>
        <PromotionSection />
      </Container>
    </div>
  );
}

export default Product;
