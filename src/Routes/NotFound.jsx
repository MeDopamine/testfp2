import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Menggunakan nilai -1 untuk kembali ke halaman sebelumnya
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            
                <Button onClick={goBack} colorScheme="blue" size="lg">
                    Not Found
                </Button>
            
        </div>
        // <div>
        //     <h1>404 | Not Found</h1>
        //     <button onClick={goBack} data-testid="back">
        //         Back
        //     </button>
        // </div>
    );
};

export default NotFound;
