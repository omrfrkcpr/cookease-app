import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  const navigate = useNavigate();

  const {} = recipe;

  return (
    <div>
      Details
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Details;
