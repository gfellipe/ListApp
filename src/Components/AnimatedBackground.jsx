import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "../Pages/Home";
import { TiShoppingCart } from "react-icons/ti";

const AnimatedBackground = () => {
  const [showCart, setShowCart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCart(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#393535",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: showCart ? 9999 : 1,
      }}
    >
      {showCart && (
        <motion.div
          style={{
            width: "10rem",
            height: "10rem",
            background: "#a0ff52",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "5rem",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <TiShoppingCart />
        </motion.div>
      )}

      {!showCart && <Home />}
    </motion.div>
  );
};

export default AnimatedBackground;
