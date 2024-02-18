import Image from "next/image";
import bg from "@/assets/images/background.png";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function CallToAction() {
  return (
    <div style={{ marginTop: "10%" }}>
      <Box
        sx={{ flexGrow: 1 }}
        flexWrap="wrap"
        marginTop={10}
        textAlign="center"
      >
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box>
              <Image
                src={bg}
                alt="map"
                style={{ width: "100%", position: "relative" }}
              />
            </Box>
            <Box position="absolute" bottom={200} right={50} left={50} display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" flexDirection="column" alignItems="center">
                <p
                  style={{ color: "#23A6F0", fontSize: 14, fontWeight: "bold" }}
                >
                  Designing Better Experience
                </p>
                <h1
                  style={{ color: "#252B42", fontSize: 40, fontWeight: "bold", width:"60%" }}
                >
                  Problems trying to resolve the conflict between{" "}
                </h1>
                <span
                  style={{ color: "#737373", fontSize: 14, fontWeight: "300", width:"45%" }}
                >
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics:{" "}
                </span>
                <h5
                  style={{ fontWeight: "bold", fontSize: 24, color: "#23856D" }}
                >
                  $16.48
                </h5>
              </Box>
              <Box></Box>
              <button
                style={{
                  padding: 12,
                  backgroundColor: "#23A6F0",
                  fontSize: 14,
                  color: "#FFFFFF",
                  border: "none",
                }}
              >
                ADD YOUR CALL TO ACTION
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
