// components/Box.tsx
import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #0070f3",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
