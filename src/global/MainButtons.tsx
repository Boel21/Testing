"use client";
// React Basic
import { useState, useRef } from "react";

// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Box, Button, ButtonGroup, useTheme } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

// Material UI Icons
import SmartButtonOutlinedIcon from "@mui/icons-material/SmartButtonOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const MainButtons = (props: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // States for the dropdpwn button
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  // Get the use state props from the parent page
  const { showAddNewForm, setShowAddNewForm } = props;

  // Buttons Styles
  const buttonStyle = {
    backgroundColor: colors.blueAccent[800],
    marginLeft: 5,
    color: colors.grey[100],
    border: "none",
  };

  const options = [
    "Editar",
    "Historial",
    "Detalles",
    "Imprimir QR",
    "Agendar Mantenimiento",
  ];
  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box display="flex">
      <Button
        style={buttonStyle}
        variant="contained"
        startIcon={<LibraryAddOutlinedIcon />}
        onClick={() => setShowAddNewForm(!showAddNewForm)}
      >
        Nuevo Equipo
      </Button>
      <Button
        variant="contained"
        startIcon={<SmartButtonOutlinedIcon />}
        style={buttonStyle}
      >
        Detalles
      </Button>

      <Button
        style={buttonStyle}
        variant="contained"
        startIcon={<SyncOutlinedIcon />}
      >
        Sincronizar
      </Button>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Acciones"
        style={buttonStyle}
      >
        <Button onClick={handleToggle} style={buttonStyle}>
          Acciones
        </Button>
        <Button
          size="small"
          style={buttonStyle}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownOutlinedIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="split-button-menu"
                  autoFocusItem
                  sx={{ backgroundColor: colors.blueAccent[900] }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      sx={{ backgroundColor: colors.blueAccent[900] }}
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default MainButtons;
