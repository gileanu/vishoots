"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: "",
        style: {
          border: "2px",
          borderRadius: "0px",
          padding: "12px",
        },
      }}
    />
  );
};
