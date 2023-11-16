import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";

const Card: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <Box sx={{
            border: '1px solid #ccc',
            borderRadius: '40px',
            padding: 1,
            backgroundColor: '#FF99FF',
            marginTop: 3,
        }}
        >
            {children}
        </Box>
    );
}

export default Card;