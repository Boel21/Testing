"use client";

// React Basic
import { useState } from "react";

// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// Material UI Icons

// Data Utils
import { mockDataContacts } from "@/data/mockData";

// Components
import Header from "@/global/Header";
import MainButtons from "@/global/MainButtons";

const SparePartsUsage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // States to show/hide the forms
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  //NOTE this is dummy data for the table example
  const columns: any = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Header
            title="Facturación"
            subtitle="Registros y análisis de uso de repuestos"
          />
        </Box>
        <Box display="flex" alignItems="end">
          <MainButtons
            setShowAddNewForm={setShowAddNewForm}
            showAddNewForm={showAddNewForm}
          />
        </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default SparePartsUsage;
