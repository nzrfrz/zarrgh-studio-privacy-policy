import React from "react";
import { Route, Routes } from "react-router-dom";

import { BarcodeChecker } from "../Pages/BarcodeChecker";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/privacy-policy/barcode-checker" element={<BarcodeChecker />} />
        </Routes>
    );
};