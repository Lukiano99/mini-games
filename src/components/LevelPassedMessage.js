// SuccessMessage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => clearTimeout(timeout); // Čišćenje timeout-a kada komponenta bude unmount-ovana
  }, [navigate]);

  return (
    <div>
      <h1 className="successMessage center">SUCCESS!</h1>
    </div>
  );
};

export default SuccessMessage;
