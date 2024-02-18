import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import hooli from "@/assets/images/hooli.png";
import lyf from "@/assets/images/lya.png";
import finger from "@/assets/images/finger.png";
import stripe from "@/assets/images/strip.png";
import aws from "@/assets/images/aws.png";
import discord from "@/assets/images/discord.png";

export default function PromotionSection() {
  return (
    <Box py={5}>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={2} md={2}>
          <Image src={hooli} alt="hooli" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={lyf} alt="hooli" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={finger} alt="hooli" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={stripe} alt="stripe" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={aws} alt="aws" />
        </Grid>
        <Grid item xs={2} md={2}>
          <Image src={discord} alt="discord" />
        </Grid>
      </Grid>
    </Box>
  );
}
