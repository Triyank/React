import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"}  onClick={onSelect}/>
);
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStar, setSelectdeStar] = useState(0);
  return (
    <>
      {createArray(totalStars).map((_, i) => (
        <Star selected={selectedStar > i} 
        onSelect={() => setSelectdeStar(i + 1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </>
  );
}
