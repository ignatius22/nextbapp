import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import window from "@/assets/images/window.png";
import map from "@/assets/images/book.png";
import arrow from "@/assets/images/bentarrow.png";
import Image from "next/image";

export default function BestService() {
  return (
    <Container style={{ marginTop: "10%", marginBottom: "8%" }}>
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
          THE BEST SERVICES
        </Typography>
        <Typography fontSize={14} color="#737373" fontFamily={"Montserrat"}>
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Box
        sx={{ flexGrow: 1 }}
        flexWrap="wrap"
        marginTop={10}
        marginBottom={10}
        textAlign="center"
      >
        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
            <Box>
              <Image src={map} alt="map" height={60} width={42} />
              <Box>
                <p
                  style={{ fontSize: 24, fontWeight: "bold", color: "#252B42" }}
                >
                  Easy Wins
                </p>
                <p style={{ fontSize: 14, color: "#737373" }}>
                  Get your best looking smile now!
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={4} width={"100%"}>
            <Box width="100%" display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image src={window} alt="map" height={60} width={42} />
              <Box>
                <p
                  style={{ fontSize: 24, fontWeight: "bold", color: "#252B42" }}
                >
                  Concrete
                </p>
                <p style={{ fontSize: 14, color: "#737373" }}>
                  Defalcate is most focused in helping you discover your most
                  beautiful smile
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Image src={arrow} alt="map" height={60} width={36} />
              <Box>
                <p
                  style={{ fontSize: 24, fontWeight: "bold", color: "#252B42" }}
                >
                  Hack Growth
                </p>
                <p style={{ fontSize: 14, color: "#737373" }}>
                  Overcame any hurdle or any other problem.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
