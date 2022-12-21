import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";

import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseUrl } from "../../../constants/api";

export const CategoryComponent = (props) => {
  const formik = useFormik({
    initialValues: {
      category_name: "",
      slug: "",
      image: "",
    },
    validationSchema: Yup.object().shape({
      category_name: Yup.string().required('Category Title is required')
    }),
    onSubmit: (data) => {
      //Router.push("/").catch(console.error);
      handleSubmit(data);
      console.log(data);
    },
  });

  const url = baseUrl + '/add_category';

  const handleSubmit = (data) => {
    let formdata = new FormData();
    Object.keys(data).forEach(k => {
      formdata.append(k, data[k])
    })
    axios
      .post(url, data)
      .then((response) => {
        console.log(response, "Cat Success");
      })
      .catch((error) => {
        console.log(response, "Cat Error");
      });
  };

  return (
    <form autoComplete="off"
      noValidate
      onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader=""
          title="Add Category" />
        <Divider />
        <CardContent>
          <Typography sx={{ mb: 3 }}
            variant="h6">
            Basic Info
          </Typography>
          <Grid container
            spacing={3}>
            <Grid item
              md={12}
              xs={12}>
              <TextField
                fullWidth
                label="Category Title"
                name="category_name"
                required
                variant="outlined"
                value={formik.values.category_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.category_name)}
                helperText={formik.errors.category_name}
              />
            </Grid>
            <Grid item
              md={12}
              xs={12}>
              <TextField
                fullWidth
                label="Category Slug"
                name="slug"
                required
                variant="outlined"
                value={formik.values.slug}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item
              md={12}
              xs={12}>
              <Button
                variant="contained"
                component="label"
              >
                Upload Category Icon
                <input
                  type="file"
                  hidden
                  name="catIcon"
                />
              </Button>
            </Grid>

          </Grid>
        </CardContent>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary"
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}>
            Add Category
          </Button>
        </Box>
      </Card>
    </form>
  );
};
