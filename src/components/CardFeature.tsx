import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function CardFeature({ img }: { img: any }) {
  return (
    
    <Grid item xs={4} md={4} boxShadow={1}>
      <Box  display={"flex"} flexDirection={"column"} > 
        <Image src={img} alt="map" style={{width:"100%"}} />
        <Box p={2}>
          <Box display={"flex"} gap={1}>
            <span style={{ fontSize: 12, color: "#8EC2F2" }}>Google</span>
            <span style={{ fontSize: 12, color: "#8EC2F2" }}>Trending</span>
            <span style={{ fontSize: 12, color: "#8EC2F2" }}>New</span>
          </Box>
          <Box>
            <h1
              style={{
                fontSize: 20,
                color: "#252B42",
                fontWeight: "300",
                textAlign: "left",
              }}
            >
              Loudest à la Madison #1 (L'integral)
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#737373",
                fontWeight: "300",
                textAlign: "left",
              }}
            >
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </Box>
        </Box>
        <Box display={"flex"} p={2} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} gap={0.4}>
            <AccessTimeOutlinedIcon
              style={{ fontSize: 12, color: "#23A6F0" }}
            />
            <p
              style={{
                fontWeight: "300",
                color: "#737373",
                fontSize: 12,
              }}
            >
              22 April 2021
            </p>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.4}>
            <PhotoSizeSelectActualOutlinedIcon
              style={{ fontSize: 12, color: "#23856D" }}
            />
            <p
              style={{
                fontWeight: "300",
                color: "#737373",
                fontSize: 12,
              }}
            >
              10 comments
            </p>
          </Box>
        </Box>
        <Box display={"flex"} p={2} alignItems={"center"}>
          <p style={{ color: "#737373", fontSize: 14, fontWeight: "bold" }}>
            Learn More
          </p>
          <ChevronRightOutlinedIcon style={{ color: "#23A6F0" }} />
        </Box>
      </Box>
    </Grid>
  );
}
