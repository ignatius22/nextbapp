"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "@/assets/images/phone.png";
import message from "@/assets/images/message.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import {
  getTotalCartPrice,
  getTotalCartQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/redux/feature/cartSlice";
import { formatCurrency } from "@/lib/util";
import { useFetchProducts } from "@/actions/fetch-products";
import {
  getWishlist,
  removeFromWishlist,
  selectItemsInWishlist,
} from "@/redux/feature/wishlistSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Header() {
  const totalItemsInCart = useAppSelector(getTotalCartQuantity);
  const totalPrice = useAppSelector(getTotalCartPrice);
  const wishlistCount = useAppSelector(selectItemsInWishlist);

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [isOpenWishList, setIsClosedWishList] = useState(false);
  const toggleModalWishList = () => setIsClosedWishList(!isOpenWishList);
  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
  };

  const cartItems = useAppSelector((state) => state.cart.cart);
  const wishlistItems = useAppSelector(getWishlist);

  const dispatch = useAppDispatch();
  console.log(cartItems, "kkk");

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(products, "fetched");

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await useFetchProducts();
      setProducts(result.products);
      setIsLoading(result.isLoading);
    };

    fetchProducts();
  }, []);

  return (
    <header>
      <Box bgcolor={"#23856d"}>
        <Container
          style={{
            flexDirection: "row",
            display: "flex",
            height: 58,
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src={phone} alt="Picture of phone" />
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#FFFFFF",
                  letterSpacing: 2,
                }}
              >
                (225) 555-0118
              </p>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <Image src={message} alt="Message" />
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#FFFFFF",
                  letterSpacing: 2,
                }}
              >
                michelle.rivera@example.com
              </p>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <p
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#FFFFFF",
                letterSpacing: 1,
              }}
            >
              Follow Us and get a chance to win 80% off
            </p>
          </Box>
          <Box display="flex" alignItems="center" gap={3}>
            <p
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#FFFFFF",
                letterSpacing: 1,
              }}
            >
              Follow Us :
            </p>
            <Box display="flex" gap={1} alignItems="center">
              <FacebookIcon htmlColor="#FFFFFF" />
              <InstagramIcon htmlColor="#FFFFFF" />
              <YouTubeIcon htmlColor="#FFFFFF" />
              <TwitterIcon htmlColor="#FFFFFF" />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container
        style={{
          flexDirection: "row",
          display: "flex",
          height: 58,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box width={187}>
          <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#252B42" }}>
            Bandage
          </h1>
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: 12,
                fontSize: 14,
                fontWeight: "500",
                color: "#737373",
                lineHeight: 1,
                alignItems: "center",
              }}
            >
              <li>
                <Link href="/pages" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>Shop</li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li>About</li>
                <KeyboardArrowDownIcon />
              </div>

              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </Box>
          <Box display="flex" alignItems="center" gap={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <PersonOutlineOutlinedIcon htmlColor="#23A6F0" />
              <p style={{ fontSize: 14, color: "#23A6F0", fontWeight: "600" }}>
                Login / Register
              </p>
            </Box>
            <Box display="flex" gap={2} alignItems="center">
              <SearchOutlinedIcon htmlColor="#23A6F0" />
              <Box display="flex" gap={0.4} alignItems="center">
                {!isOpen ? (
                  <p onClick={toggleModal} style={{ cursor: "pointer" }}>
                    <LocalGroceryStoreOutlinedIcon htmlColor="#23A6F0" />
                  </p>
                ) : (
                  <LocalGroceryStoreIcon htmlColor="#23A6F0" />
                )}
                <Typography style={{ fontSize: 12, color: "#23A6F0" }}>
                  {totalItemsInCart}
                </Typography>
              </Box>
              <Box display="flex" gap={0.4} alignItems="center">
                <p onClick={toggleModalWishList} style={{ cursor: "pointer" }}>
                  <FavoriteBorderOutlinedIcon htmlColor="#23A6F0" />
                </p>

                <p style={{ fontSize: 12, color: "#23A6F0" }}>
                  {wishlistCount}
                </p>
              </Box>
            </Box>
            {isOpen && (
              <Modal isOpen={isOpen} onClose={toggleModal} modalTitle="My Cart">
                <Box style={{ zIndex: -1111 }}>
                  {cartItems.map((item) => {
                    return item ? (
                      <Box
                        key={item.id}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent="space-between"
                        borderBottom="1px #ECECEC solid"
                        gap={3}
                        py={1}
                      >
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent="space-between"
                          gap={3}
                        >
                          <Box>
                            <Image
                              src={item.thumbnail ?? ""}
                              width={50}
                              height={50}
                              alt={item.title ?? ""}
                            />
                          </Box>
                          <Box>
                            <Typography
                              fontFamily="inherit"
                              fontSize={14}
                              fontWeight="300"
                              color="#252B42"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              fontFamily="inherit"
                              fontSize={12}
                              fontWeight="600"
                              color="#252B42"
                            >
                              {formatCurrency(item.unitPrice ?? 0)}
                            </Typography>
                            <Typography
                              fontFamily="inherit"
                              fontSize={12}
                              fontWeight="600"
                              color="#252B42"
                            >
                              quantity: {item.quantity}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent="center"
                          gap={1}
                        >
                          <div
                            style={{
                              height: 20,
                              width: 20,
                              backgroundColor: "#F3CD03",
                              borderRadius: 30,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <AddIcon
                              style={{ fontSize: 15 }}
                              onClick={() =>
                                dispatch(increaseItemQuantity(item.id))
                              }
                            />
                          </div>

                          <Typography>{item.quantity}</Typography>
                          <div
                            style={{
                              height: 20,
                              width: 20,
                              backgroundColor: "#F3CD03",
                              borderRadius: 30,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                            }}
                            onClick={() =>
                              dispatch(decreaseItemQuantity(item.id))
                            }
                          >
                            <RemoveIcon style={{ fontSize: 15 }} />
                          </div>
                        </Box>
                      </Box>
                    ) : (
                      <li >Product data not available</li>
                    );
                  })}
                  <Box borderTop="1px #ECECEC solid" my={3} py={0.5}>
                    <Typography
                      fontSize={12}
                      fontWeight="600"
                      fontFamily="inherit"
                    >
                      Total
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight="400"
                      fontFamily="inherit"
                    >
                      {formatCurrency(totalPrice)}
                    </Typography>
                  </Box>
                </Box>
              </Modal>
            )}
          </Box>
          {isOpenWishList && (
            <Modal
              isOpen={isOpenWishList}
              onClose={toggleModalWishList}
              modalTitle="Wish Lists"
            >
              {wishlistItems.map((item) => (
                <Box
                  key={item.id}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-between"
                  borderBottom="1px #ECECEC solid"
                  gap={3}
                  py={1}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent="space-between"
                    gap={3}
                  >
                    <Box>
                      <Image
                        src={item.thumbnail ?? ""}
                        width={50}
                        height={50}
                        alt={item.title ?? ""}
                      />
                    </Box>
                    <Box>
                      <Typography
                        fontFamily="inherit"
                        fontSize={14}
                        fontWeight="300"
                        color="#252B42"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent="center"
                    gap={1}
                  >
                    <div
                      style={{
                        height: 20,
                        width: 20,
                        backgroundColor: "#F3CD03",
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <DeleteOutlineIcon style={{ fontSize: 15 }} />
                    </div>
                  </Box>
                </Box>
              ))}
            </Modal>
          )}
        </Box>
      </Container>
    </header>
  );
}
