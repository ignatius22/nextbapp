"use client";

import { formatCurrency } from "@/lib/util";
import Rating from "@/ui/Rating";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";

import {
  addToCart,
  getCurrentQuantityById,
  removeFromCart,
} from "@/redux/feature/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/feature/wishlistSlice";
import { Product } from "@/types/types";

export default function ProductDetail({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  const currentQuantity = useAppSelector(getCurrentQuantityById(product.id));
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonColor, setButtonColor] = useState("#23A6F0");
  const [isDisabled, setIsDisabled] = useState(false);

  const wishlist = useAppSelector((state) => state.wishlist.wishlist);
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    toast.success(`${product.title} added to the wishlist`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(product.id));
    toast.error(`${product.title} removed from the wishlist`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    if (currentQuantity > 0) {
      setButtonText("Already in Cart");
      setButtonColor("#333");
      setIsDisabled(true);
    } else {
      setButtonText("Add to Cart");
      setButtonColor("#23A6F0");
      setIsDisabled(false);
    }
  }, [currentQuantity]);

  const handleAddToCart = () => {
    if (currentQuantity === 0) {
      dispatch(
        addToCart({
          ...product,
          quantity: 0,
          price: 0,
        })
      );

      toast.success(`${product.title} added to the cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleRemoveFromCart = () => {
    if (currentQuantity > 0) {
      dispatch(removeFromCart(product.id));
      toast.error(`${product.title} removed from the cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Show notification when item is not in the cart
      toast.warning(`${product.title} is not in the cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Grid container style={{ paddingBottom: "2.5%", paddingTop: "2%" }}>
        <Grid item xs={6} md={6}>
          <Box width={"90%"}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              height={450}
              width={450}
              style={{ width: "100%" }}
            />
            <Box display="flex" gap={2} flexWrap="wrap" width={"100%"}>
              {product.images.map((img: string) => (
                <Box key={`${img}id`}>
                  <Image src={img} alt={img} height={100} width={100} />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={6}
          md={6}
          flexWrap={"wrap"}
          sx={{ width: "100%" }}
        >
          <Box height={450}>
            <Box>
              <span
                style={{ fontSize: 20, color: "#252B42", fontWeight: "300" }}
              >
                {product.title}
              </span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Rating value={product.rating} max={5} />
                <p
                  style={{ fontSize: 14, color: "#737373", fontWeight: "600" }}
                >
                  10 Reviews
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <span
                style={{ fontSize: 24, color: "#252B42", fontWeight: "600" }}
              >
                {formatCurrency(product.price)}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "#737373",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                Available:{" "}
                <span
                  style={{ fontSize: 14, color: "#23A6F0", fontWeight: "600" }}
                >
                  {product.stock ? "In Stock" : "Out Stock"}
                </span>
              </span>
            </Box>
            <Box
              display={"flex"}
              width={400}
              flexDirection={"column"}
              borderTop={"1px #BDBDBD solid"}
              mt={18}
              pt={2}
            >
              <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
                <Box
                  bgcolor={"#23A6F0"}
                  borderRadius={30}
                  width={30}
                  height={30}
                ></Box>
                <Box
                  bgcolor={"#2DC071"}
                  borderRadius={30}
                  width={30}
                  height={30}
                ></Box>
                <Box
                  bgcolor={"#E77C40"}
                  borderRadius={30}
                  width={30}
                  height={30}
                ></Box>
                <Box
                  bgcolor={"#252B42"}
                  borderRadius={30}
                  width={30}
                  height={30}
                ></Box>
              </Box>
              <Box
                display={"flex"}
                width={"100%"}
                gap={2}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={10}
              >
                <button
                  style={{
                    height: 35,
                    backgroundColor: buttonColor,
                    fontSize: 10,
                    color: "#FFFFFF",
                    border: "none",
                    width: 80,
                    borderRadius: 4,
                    cursor: `${currentQuantity > 0 ? "" : "pointer"}`,
                    fontFamily: "inherit",
                  }}
                  disabled={isDisabled}
                  suppressHydrationWarning={true}
                  onClick={handleAddToCart}
                >
                  {buttonText}
                </button>
                {currentQuantity > 0 && (
                  <button
                    style={{
                      height: 35,
                      backgroundColor: "#FF004D",
                      fontSize: 10,
                      color: "#FFFFFF",
                      border: "none",
                      width: 80,
                      borderRadius: 4,
                      fontFamily: "inherit",
                    }}
                    onClick={handleRemoveFromCart}
                    suppressHydrationWarning={true}
                  >
                    Remove from Cart
                  </button>
                )}

                <Box
                  alignItems={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  gap={3}
                >
                  <button
                    style={{
                      height: 35,
                      backgroundColor: "#F3CD03",
                      fontSize: 10,
                      color: "#333333",
                      border: "none",
                      width: 80,
                      borderRadius: 4,
                      fontFamily: "inherit",
                      fontWeight: "400",
                    }}
                    onClick={handleAddToWishlist}
                    suppressHydrationWarning={true}
                  >
                    {isProductInWishlist
                      ? "Already in Wishlist"
                      : "Add to Wishlist"}
                  </button>
                  {isProductInWishlist && (
                    <button
                      style={{
                        height: 35,
                        backgroundColor: "#FF004D",
                        fontSize: 10,
                        color: "#FFFFFF",
                        border: "none",
                        width: 80,
                        borderRadius: 4,
                        fontFamily: "inherit",
                        fontWeight: "400",
                      }}
                      onClick={handleRemoveFromWishlist}
                      suppressHydrationWarning={true}
                    >
                      Remove from Wishlist
                    </button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
