import { useEffect, useState } from "react";

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
  Snackbar,
  Alert,
  Autocomplete,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useFormik } from "formik";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import { createMusicCreatorSchema } from "../../utils/validations";

export const CreateMusicCreator = (props) => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [uploadProfilePicture, setUploadProfilePicture] = useState("");
  const [severity, setSeverity] = useState("info");
  const [uploadProfilePictureNames, setUploadProfilePictureNames] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    axios.get(baseUrl + "/get_category").then((response) => {
      console.log("response", response?.data?.data);
      setCategoriesOptions(response?.data?.data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      artist_name: "",
      description: "",
      categories: "",
      country: "",
      instagram: "",
      youtube: "",
      twitter: "",
      facebook: "",
      tiktok: "",
      linkedIn: "",
    },
    validationSchema: createMusicCreatorSchema,
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
      .post(baseUrl + "/add_music_creator_by_admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response, "Celebrity added");
          setSeverity("success");
        } else {
          console.log(response, "Could not add celebrity");
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
    setUploadProfilePicture(event?.currentTarget?.files);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader="" title="Add Music Creator" />
        <Divider />
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h6">
            Basic Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Button variant="contained" component="label">
                Upload Profile Photos
                <input
                  type="file"
                  hidden
                  name="profile_picture"
                  accept="image/*"
                  onChange={handleChangeProfilePicture}
                  error={Boolean(formik.errors.profile_picture)}
                  helperText={formik.errors.profile_picture}
                  multiple
                />
              </Button>
              <span style={{ paddingLeft: "1rem" }}>{uploadProfilePictureNames} </span>
            </Grid>
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Artist Name"
                name="artist_name"
                variant="outlined"
                value={formik.values.artist_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.artist_name)}
                helperText={formik.errors.artist_name}
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
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
                  <TextField {...params} label="Categories" placeholder="" />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h6">
            Social Media Links
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Facebook"
                name="facebook"
                required
                variant="outlined"
                value={formik.values.facebook}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.facebook)}
                helperText={formik.errors.facebook}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Instagram"
                name="instagram"
                required
                variant="outlined"
                value={formik.values.instagram}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.instagram)}
                helperText={formik.errors.instagram}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="LinkedIn"
                name="linkedin"
                required
                variant="outlined"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.linkedin)}
                helperText={formik.errors.linkedin}
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
                error={Boolean(formik.errors.tiktok)}
                helperText={formik.errors.tiktok}
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
                error={Boolean(formik.errors.youtube)}
                helperText={formik.errors.youtube}
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
                error={Boolean(formik.errors.twitter)}
                helperText={formik.errors.twitter}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <Divider />
        <CardContent>
          <Grid item md={12} xs={12}>
            <Typography sx={{ mb: 3 }} variant="h6">
              Upload Celebrity Music
            </Typography>
            <Grid item md={12} xs={12}>
              <Button variant="contained" component="label">
                Upload Music
                <input
                  type="file"
                  hidden
                  name="music"
                  accept="mp3/*"
                  // onChange={handleChangeMusic}
                  error={Boolean(formik.errors.music)}
                  helperText={formik.errors.music}
                />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
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
        <Alert sx={{ width: "100%", color: "#fff" }} variant="filled" severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </form>
  );
};
