import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

import chair from "@/assets/images/chair.png";

export default function ReviewSection() {
  return (
    <Box
      sx={{
        paddingBottom: "2.5%",
        paddingTop: "4%",
        margin: "auto",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        borderTop:"1px #ECECEC solid",

      }}
    >
      <Grid container>
        <Grid item xs={6} md={6}>
          <Box>
            <p
              style={{ fontFamily: "inherit", fontSize: 24, fontWeight: "600", color:"#252B42" }}
            >
              the quick fox jumps over{" "}
            </p>
          </Box>
          <Box width={"80%"}>
            <p style={{ fontFamily: "inherit", fontSize: 14, fontWeight: "300", color:"#737373" }}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p style={{ fontFamily: "inherit", fontSize: 14, fontWeight: "300", color:"#737373" }}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p style={{ fontFamily: "inherit", fontSize: 14, fontWeight: "300", color:"#737373" }}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
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
          <Box width={"100%"}>
            <Image
              src={chair}
              alt="chair"
              height={200}
              width={200}
              style={{ width: "100%", height: "60%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
