"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Image from "next/image";
import cover_1 from "@/assets/images/cover-1.jpeg";
import cover_2 from "@/assets/images/cover-2.jpeg";
import cover_3 from "@/assets/images/cover-3.jpeg";
import cover_4 from "@/assets/images/cover-4.jpeg";


export default function Landing() {
  return (
    <Container style={{ marginTop: 80}}>
      <Grid container spacing={1} >
        <Grid item xs={6} md={4} position="relative">
          <Image
            src={cover_1}
            alt="Picture of cover one"
            style={{ width: "100%", height: "100%" }}
          />
          <Box position="absolute" top={10} padding={3}>
            <Typography
              fontFamily={"Montserrat"}
              style={{ color: "#2DC071", fontSize: 14, fontWeight: "bold" }}
            >
              5 Items
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize={40}
              color="#252B42"
              fontFamily={"Montserrat"}
            >
              FURNITURE
            </Typography>
            <Typography
              fontFamily={"Montserrat"}
              style={{ color: "#252B42", fontSize: 14, fontWeight: "bold" }}
            >
              Read More
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={8} spacing={1} position="relative">
          <Grid md={12}>
            <Image
              src={cover_2}
              alt="Picture of cover one"
              style={{ width: "100%", height: "100%" }}
            />
            <Box position="absolute" top={10} padding={3}>
              <Typography
                style={{ color: "#2DC071", fontSize: 14, fontWeight: "bold" }}
              >
                5 Items
              </Typography>
              <Typography
                fontWeight="bold"
                fontSize={24}
                color="#252B42"
                fontFamily={"Montserrat"}
              >
                FURNITURE
              </Typography>
              <Typography
                fontFamily={"Montserrat"}
                style={{ color: "#252B42", fontSize: 14, fontWeight: "bold" }}
              >
                Read More
              </Typography>
            </Box>
          </Grid>

          <Grid container spacing={1} position="relative">
            <Grid item md={6}>
              <Image
                src={cover_3}
                alt="Picture of cover one"
                style={{ width: "100%", height: "100%" }}
              />
              <Box position="absolute" top={10} padding={3}>
                <Typography
                  fontFamily={"Montserrat"}
                  style={{ color: "#2DC071", fontSize: 14, fontWeight: "bold" }}
                >
                  5 Items
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize={24}
                  color="#252B42"
                  fontFamily={"Montserrat"}
                >
                  FURNITURE
                </Typography>
                <Typography
                  style={{ color: "#252B42", fontSize: 14, fontWeight: "bold" }}
                  fontFamily={"Montserrat"}
                >
                  Read More
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} position="relative">
              <Image
                src={cover_4}
                alt="Picture of cover one"
                style={{ width: "100%", height: "100%" }}
              />
              <Box position="absolute" top={10} padding={3}>
                <Typography
                  fontFamily={"Montserrat"}
                  style={{ color: "#2DC071", fontSize: 14, fontWeight: "bold" }}
                >
                  5 Items
                </Typography>
                <Typography
                  fontWeight="bold"
                  fontSize={24}
                  color="#252B42"
                  fontFamily={"Montserrat"}
                >
                  FURNITURE
                </Typography>
                <Typography
                  style={{ color: "#252B42", fontSize: 14, fontWeight: "bold" }}
                >
                  Read More
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
