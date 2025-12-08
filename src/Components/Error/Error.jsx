import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div
       className="flex flex-col items-center py-20 md:px-20 px-6"
    >
      <div className="md:w-[500px]">
        <img
          src="https://i.postimg.cc/vmh72rx5/file-folder-mascot-character-design-vector-166742-4413.avif"
          alt="Page Not Found"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl md:4xl lg:5xl pt-4 md:pt-7"
          style={{
            fontWeight: "bold",
            color: "#dc3545",
          }}
        >
          404-Page Not Found
        </h1>

        <h2 style={{ marginTop: "10px", fontSize: "22px", fontWeight: "500" }}>
          Page Not Found
        </h2>

        <p className="hidden md:grid" style={{ color: "#666", marginTop: "8px", fontSize: "15px" }}>
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
