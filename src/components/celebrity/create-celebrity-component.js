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
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { baseUrl } from "../../constants/api";
import { useFormik } from "formik";
import { createCelebritySchema } from "../../utils/validations";
import { useEffect, useState } from "react";
import axios from "axios";
import { Router } from "next/router";
export const CreateCelebrity = (props) => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [uploadProfilePicture, setUploadProfilePicture] = useState("");
  const [severity, setSeverity] = useState("success");

  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    axios.get(baseUrl + "/get_category").then((response) => {
      setCategoriesOptions(response?.data?.data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      title: "",
      tag_line: "",
      short_description: "",
      long_description: "",
      categories: "",
      price: "",
      is_featured: true,
      country: "",
      profile_picture: "",
      account_name: "",
      account_number: "",
      bank_name: "",
      bank_code: "",
      bank_address: "",
    },
    validationSchema: createCelebritySchema,
    onSubmit: (data) => {
      handleSubmit(data);
      console.log(data);
    },
  });

  const handleSubmit = (data) => {
    let catIdArray = [];
    selectedCategories.map((cat) => {
      catIdArray.push(cat.category_id);
    });
    data.categories = catIdArray.join(",");
    data.profile_picture = uploadProfilePicture;
    let formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    axios
      .post(baseUrl + "/add_celebrity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success) {
          setSeverity("success");
        } else {
          setSeverity("error");
        }
        setOpen(true);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(response, "Could not add celebrity");
      });
  };
  const handleChangeProfilePicture = (event) => {
    setUploadProfilePicture(event.currentTarget.files[0]);
  };

  return (
    <form autoComplete="off"
noValidate
onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader=""
title="Add Celebrity" />
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
              <Button 
              variant="contained"
component="label">
                Upload Profile Photos
                <input
                  type="file"
                  hidden
                  name="profile_picture"
                  accept="image/*"
                  onChange={handleChangeProfilePicture}
                  error={Boolean(formik.errors.profile_picture)}
                  helperText={formik.errors.profile_picture}
                />
              </Button>
              <span style={{ paddingLeft: "1rem" }}>{uploadProfilePicture?.name} </span>
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="first_name"
                variant="outlined"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.first_name)}
                helperText={formik.errors.first_name}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="last_name"
                variant="outlined"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.last_name)}
                helperText={formik.errors.last_name}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                variant="outlined"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.title)}
                helperText={formik.errors.title}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Tag Line"
                name="tag_line"
                variant="outlined"
                value={formik.values.tag_line}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.tag_line)}
                helperText={formik.errors.tag_line}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <Autocomplete
                multiple
                fullWidth
                onChange={(event, value) => setSelectedCategories(value)}
                id="checkboxes-tags-demo"
                options={categoriesOptions}
                disableCloseOnSelect
                getOptionLabel={(option) => option?.category_name}
                getOptionValue={(option) => option?.category_id}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.category_name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params}
label="Categories"
placeholder="" />
                )}
              />
            </Grid>

            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                variant="outlined"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.phone)}
                helperText={formik.errors.phone}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                variant="outlined"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.country)}
                helperText={formik.errors.country}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                variant="outlined"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.price)}
                helperText={formik.errors.price}
                required
              />{" "}
            </Grid>

            <Grid item
md={6}
xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    name="is_featured"
                    value={formik.values.is_featured}
                    onChange={formik.handleChange}
                  />
                }
                label="Is Featured?"
              />
            </Grid>

            <Grid item
md={12}
xs={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="short_description"
                variant="outlined"
                value={formik.values.short_description}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.short_description)}
                helperText={formik.errors.short_description}
                required
              />
            </Grid>
            <Grid item
md={12}
xs={12}>
              <TextField
                fullWidth
                label="Long Description"
                name="long_description"
                multiline
                rows={10}
                variant="outlined"
                value={formik.values.long_description}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.long_description)}
                helperText={formik.errors.long_description}
                required
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography sx={{ mb: 3 }}
variant="h6">
            Payment Info
          </Typography>
          <Grid container
spacing={3}>
            <Grid item
md={12}
xs={12}>
              <TextField
                fullWidth
                label="Account Name"
                name="account_name"
                variant="outlined"
                value={formik.values.account_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.account_name)}
                helperText={formik.errors.account_name}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Bank Account Number"
                name="account_number"
                variant="outlined"
                value={formik.values.account_number}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.account_number)}
                helperText={formik.errors.account_number}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Bank Name"
                name="bank_name"
                variant="outlined"
                value={formik.values.bank_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.bank_name)}
                helperText={formik.errors.bank_name}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Bank Code"
                name="bank_code"
                type="number"
                variant="outlined"
                value={formik.values.bank_code}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.bank_code)}
                helperText={formik.errors.bank_code}
                required
              />
            </Grid>
            <Grid item
md={6}
xs={12}>
              <TextField
                fullWidth
                label="Bank Address"
                name="bank_address"
                variant="outlined"
                value={formik.values.bank_address}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.bank_address)}
                helperText={formik.errors.bank_address}
                required
              />
            </Grid>

            {/* <Grid item md={12} xs={12}>
              <Typography sx={{ mb: 3 }} variant="h6">
                Add Your Paypal ID
              </Typography>
              <TextField fullWidth label="Paypal ID" name="paypalID"  variant="outlined" />
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        {/* <CardContent>
          <Typography sx={{ mb: 3 }} variant="h6">
            Social Media Links
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                
                variant="outlined"
                value={formik.values.facebook}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                
                variant="outlined"
                value={formik.values.instagram}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="TikTok"
                name="tiktok"
                
                variant="outlined"
                value={formik.values.tiktok}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Youtube"
                name="youtube"
                type="number"
                variant="outlined"
                value={formik.values.youtube}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                
                variant="outlined"
                value={formik.values.twitter}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="LinkedIn"
                name="linkedin"
                
                variant="outlined"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </CardContent> */}
        <Divider />

        {/* <CardContent>
          <Typography sx={{ mb: 3 }} variant="h6">
            Genre
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormControlLabel control={<Checkbox name="genere" value="Pop" />} label="Pop" />
              <FormControlLabel
                control={<Checkbox name="genere" value="Electronic" />}
                label="Electronic"
              />
              <FormControlLabel
                control={<Checkbox name="genere" value="Hip Hop" />}
                label="Hip Hop"
              />
              <FormControlLabel
                control={<Checkbox name="genere" value="Country" />}
                label="Country"
              />
              <FormControlLabel control={<Checkbox name="genere" value="Latin" />} label="Latin" />
            </Grid>
          </Grid>
        </CardContent> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            // disabled={formik.isSubmitting}
          >
            Save details
          </Button>
        </Box>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        onClose={() => setOpen(false)}
      >
        <Alert sx={{ width: "100%", color: "#fff" }}
variant="filled"
severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </form>
  );
};
