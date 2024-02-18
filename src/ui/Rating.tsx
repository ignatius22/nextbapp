import React from "react";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarIcon from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";

type StarProps = {
  filled: "full" | "half" | "empty";
};

const Star: React.FC<StarProps> = ({ filled }) => {
  if (filled === "full") {
    return <StarIcon htmlColor="#F3CD03" />;
  } else if (filled === "half") {
    return <StarHalf  htmlColor="#F3CD03" />; // Replace with your half-filled star
  } else {
    return <StarBorderPurple500OutlinedIcon />;
  }
};

type RatingProps = {
  value: number;
  max: number;
};

const Rating: React.FC<RatingProps> = ({ value, max }) => (
  <div>
    {[...Array(max)].map((_, i) => {
      let filled: StarProps["filled"] = "empty";
      if (i < Math.floor(value)) {
        filled = "full";
      } else if (i < value) {
        filled = "half";
      }
      return <Star key={i} filled={filled} />;
    })}
  </div>
);

// Usage
// <Rating value={4.92} max={5} />
export default Rating;
