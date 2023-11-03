// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Box, Button, TextField, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";

const EquipmentForm = () => {
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
                label="Nombre"
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
                label="Marca"
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
                label="Modelo"
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
                label="Serie"
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
                label="Estatus"
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
                label="Proveedor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.supplier}
                name="supplier"
                error={!!touched.supplier && !!errors.supplier}
                helperText={touched.supplier && errors.supplier}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Costo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cost_center}
                name="cost_center"
                error={!!touched.cost_center && !!errors.cost_center}
                helperText={touched.cost_center && errors.cost_center}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha de Compra"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date_of_purchase}
                name="date_of_purchase"
                error={!!touched.date_of_purchase && !!errors.date_of_purchase}
                helperText={touched.date_of_purchase && errors.date_of_purchase}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Orden de Compra"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.purchase_order}
                name="purchase_order"
                error={!!touched.purchase_order && !!errors.purchase_order}
                helperText={touched.purchase_order && errors.purchase_order}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ubicación"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha de Instalación"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.instalation_date}
                name="instalation_date"
                error={!!touched.instalation_date && !!errors.instalation_date}
                helperText={touched.instalation_date && errors.instalation_date}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Garantía"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.warranty}
                name="warranty"
                error={!!touched.warranty && !!errors.warranty}
                helperText={touched.warranty && errors.warranty}
                sx={{ gridColumn: "span 2" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Centro de Costo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cost_center}
                name="cost_center"
                error={!!touched.cost_center && !!errors.cost_center}
                helperText={touched.cost_center && errors.cost_center}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Depreciación"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.deprecation}
                name="deprecation"
                error={!!touched.deprecation && !!errors.deprecation}
                helperText={touched.deprecation && errors.deprecation}
                sx={{ gridColumn: "span 1" }}
                color="secondary"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Descripción"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
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
  name: yup.string().required("Requerido"),
  brand: yup.string().required("requerido"),
  model: yup.string().email("invalid email").required("Requerido"),
  serial: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Requerido"),
  cost: yup.string().required("Requerido"),
  status: yup.string().required("Requerido"),
  location: yup.string().required("Requerido"),
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

export default EquipmentForm;
