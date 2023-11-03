"use client";

// Themes and Styles
import tokens from "@/themes/theme";
import { Box } from "@mui/material";

// Material UI - Third party Libraries and features
import { useTheme } from "@mui/material";

// Material UI Icons

// Data Utils

// Components
import Header from "@/global/Header";

const Reports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Reportes" subtitle="Informes y análisis" />
    </Box>
  );
};

export default Reports;
