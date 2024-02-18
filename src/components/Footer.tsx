"use client";

import { Box, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="#FAFAFA">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: "bold", color: "#252B42" }}>
            Bandage
          </h1>
          <Box display="flex" gap={1} alignItems="center">
            <FacebookIcon htmlColor="#23A6F0" />
            <InstagramIcon htmlColor="#23A6F0" />
            <TwitterIcon htmlColor="#23A6F0" />
          </Box>
        </Container>
      </Box>
      <Box bgcolor="#FFFFFF">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box display="flex" alignItems="center" gap={18}>
            <Box>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", color: "#252B42" }}
              >
                Company Info
              </h1>
              <Box>
                <div>Home</div>
                <div>Shop</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Pages</div>
              </Box>
            </Box>
            <Box>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", color: "#252B42" }}
              >
                Legal
              </h1>
              <Box>
                <div>Home</div>
                <div>Shop</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Pages</div>
              </Box>
            </Box>
            <Box>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", color: "#252B42" }}
              >
                Features
              </h1>
              <Box>
                <div>Home</div>
                <div>Shop</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Pages</div>
              </Box>
            </Box>
            <Box>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", color: "#252B42" }}
              >
                Resources
              </h1>
              <Box>
                <div>Home</div>
                <div>Shop</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Pages</div>
              </Box>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column">
            <h1 style={{ fontSize: 16, fontWeight: "bold", color: "#252B42" }}>
              Get In Touch
            </h1>
            <Box mb={4}>
              <input
                type="text"
                placeholder="Your Email"
                style={{
                  borderColor: "#E6E6E6",
                  padding: 12,
                  border: "1px solid #737373 ",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: 12,
                  backgroundColor: "#23A6F0",
                  fontSize: 14,
                  color: "#FFFFFF",
                  border: "none",
                }}
              >
                Subscribe
              </button>
              <p style={{ fontSize: 13, color: "#737373" }}>
                Lore imp sum dolor Amit
              </p>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgcolor="#FAFAFA" mt={5} p={1}>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <h1 style={{ fontSize: 14, fontWeight: "bold", color: "#737373" }}>
              Made With Love By Finland All Right Reserved
            </h1>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
