// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Box, Button, TextField, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const MaintenanceForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const buttonStyle = {
    backgroundColor: colors.blueAccent[800],
    marginLeft: 5,
    color: colors.grey[100],
    border: "none",
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                id="outlined-nombre"
                label="Equipo"
                fullWidth
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Proveedor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tipo de mantenimiento"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
                name="model"
                error={!!touched.model && !!errors.model}
                helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha de inicio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.serial}
                name="serial"
                error={!!touched.serial && !!errors.serial}
                helperText={touched.serial && errors.serial}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Hora de inicio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha de finalización"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Hora de finalización"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Kit Predefinido"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Repuestos requeridos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Consumibles requeridos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Notas"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.supplier}
                name="supplier"
                error={!!touched.supplier && !!errors.supplier}
                helperText={touched.supplier && errors.supplier}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" sx={buttonStyle}>
                Crear
              </Button>
              <Button variant="contained" sx={buttonStyle}>
                Cancelar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  brand: yup.string().required("required"),
  model: yup.string().email("invalid email").required("required"),
  serial: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  cost: yup.string().required("required"),
  status: yup.string().required("required"),
  location: yup.string().required("required"),
});
const initialValues = {
  name: "",
  brand: "",
  model: "",
  serial: "",
  status: "",
  supplier: "",
  cost: "",
  date_of_purchase: "",
  purchase_order: "",
  location: "",
  instalation_date: "",
  warranty: "",
  cost_center: "",
  deprecation: "",
  description: "",
};

export default MaintenanceForm;
