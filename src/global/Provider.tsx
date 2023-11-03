"use client";
import React, { ReactNode } from "react";
import { ColorModeContext, useMode } from "@/themes/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface RootLayoutProps {
  children: ReactNode;
}

const Provider: React.FC<RootLayoutProps> = ({ children }) => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Provider;
