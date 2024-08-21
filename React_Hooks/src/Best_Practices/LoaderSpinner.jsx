// Loader.js
import React from "react";
import { ClipLoader } from "react-spinners";

const LoaderSpinner = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader loading={loading} size={150} />
    </div>
  );
};

export default LoaderSpinner;
