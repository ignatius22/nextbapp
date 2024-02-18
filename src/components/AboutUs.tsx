import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/user.jpg";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/gal1.png";
import img2 from "@/assets/images/gal2.png";
import img3 from "@/assets/images/gal3.png";
import img4 from "@/assets/images/gal4.png";
import img5 from "@/assets/images/gal5.png";
import img6 from "@/assets/images/gal6.png";
import img7 from "@/assets/images/gal7.png";
import img8 from "@/assets/images/gal8.png";
import img9 from "@/assets/images/gal9.png";

export default function AboutUs() {
  return (
    <Box sx={{ width: "100%", marginTop: 20, mb: 10 }}>
      <Grid container spacing={3} alignItems={"center"}>
        <Grid item xs={4} md={6} textAlign={"center"}>
          <Box textAlign={"center"}>
            <h1 style={{ fontSize: 24, color: "#252B42", fontWeight: "bold" }}>
              What they say about us
            </h1>
            <Box>
              <Box>
                <Image
                  src={avatar}
                  alt="user"
                  height={90}
                  width={90}
                  style={{ borderRadius: 40 }}
                />
                <Box>
                  <StarIcon htmlColor="#F3CD03" />
                  <StarIcon htmlColor="#F3CD03" />
                  <StarIcon htmlColor="#F3CD03" />
                  <StarIcon htmlColor="#F3CD03" />
                  <StarBorderPurple500OutlinedIcon htmlColor="#F3CD03" />
                </Box>
              </Box>
              <Box
                textAlign={"center"}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "#737373",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "70%",
                  }}
                >
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <span
                  style={{ fontSize: 14, color: "#23A6F0", fontWeight: "bold" }}
                >
                  Regina Miles
                </span>
                <span
                  style={{ fontSize: 14, color: "#252B42", fontWeight: "bold" }}
                >
                  Designer
                </span>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={4}
          md={6}
          flexWrap={"wrap"}
          sx={{ width: "100%" }}
          gap={2}
          p={2}
        >
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img1} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img2} alt="gal" />
            </Box>
          </Grid>

          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img3} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img4} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img5} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img6} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img7} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img8} alt="gal" />
            </Box>
          </Grid>
          <Grid item xs={2} md={3} boxShadow={1}>
            <Box>
              <Image src={img9} alt="gal" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
