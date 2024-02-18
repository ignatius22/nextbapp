import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import CardFeature from "./CardFeature";
export default function FeaturePost() {
  return (
    <Container style={{ marginTop: "10%", marginBottom: "8%" }}>
      <Box textAlign="center">
        <Typography fontSize={14} color="#23A6F0" fontFamily={"Montserrat"}>
          Practice Advice
        </Typography>
        <Typography
          fontSize={24}
          fontWeight="bold"
          color="#252B42"
          fontFamily={"Montserrat"}
          letterSpacing={1.8}
        >
          Featured Posts
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%" }}
        flexWrap="wrap"
        marginTop={10}
        marginBottom={10}
      >
        <Grid container >
          <CardFeature img={img1} />
          <CardFeature img={img2} />
          <CardFeature img={img3} />
        </Grid>
      </Box>
    </Container>
  );
}
