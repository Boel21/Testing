"use client";

// Themes and Styles
import tokens, { ColorModeContext } from "@/themes/theme";

// React Imports
import { useContext } from "react";

// NextJS
import Image from "next/image";

// Material UI - Third party Libraries and features
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// Material UI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const imageStyle = {
    borderRadius: "50%",
  };

  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: colors.primary[400] }}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        sx={{
          backgroundColor: colors.blueAccent[800],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Buscar" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <Box>
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <IconButton>
            <Image
              src={`/assets/user.jpg`}
              alt="logo"
              width={40}
              height={40}
              style={imageStyle}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
