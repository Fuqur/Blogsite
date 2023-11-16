import React, { FC } from "react";
import { useAuth } from "../../providers/useAuth";
import "./Prof.css";
import { Avatar, Card } from "@mui/material";

const Profile: FC = () => {
  const { user } = useAuth();

  return (
    <Card
      className="Profile"
      style={{
        backgroundColor: "#FFCCFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <Avatar
        alt={user?.name}
        src={user?.avatar}
        style={{ width: "80px", height: "80px", marginBottom: "16px" }}
      />
      <h1 style={{ fontSize: "24px", marginBottom: "8px" }}>{user?.name}</h1>
      <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
        Russia, SPB
      </h3>
      <p className="title" style={{ fontSize: "14px", marginBottom: "8px" }}>
        Student
      </p>
      <img
        src="https://www.runczech.com/file/edee/exclusive/rgb_vsfs_text_do-ctverce.png"
        alt="VSFS university"
        style={{ width: "100px", height: "auto", marginBottom: "16px" }}
      />
      <p style={{ fontSize: "14px" }}>VSFS university</p>
    </Card>
  );
};

export default Profile;
