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
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useFormik } from "formik";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import { createMusicCreatorSchema } from "../../utils/validators";

export const CreateMusicCreator = (props) => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [uploadProfilePicture, setUploadProfilePicture] = useState("");
  const [severity, setSeverity] = useState("info");
  const [uploadMusicFile, setUploadMusicFile] = useState("");

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
    },
  });
  const handleSubmit = (data) => {
    let catIdArray = [];
    let socialMediaLinksArray = [];

    selectedCategories.map((cat) => {
      catIdArray.push(cat.category_id);
    });
    data.categories = catIdArray.join(",");

    socialMediaLinksArray.push(
      data.instagram,
      data.youtube,
      data.twitter,
      data.facebook,
      data.tiktok,
      data.linkedIn
    );
    data.social_media_links = socialMediaLinksArray;

    data.profile_picture = uploadProfilePicture;
    data.music = uploadMusicFile;
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
          setSeverity("success");
        } else {
          setSeverity("error");
        }
        setOpen(true);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(response, "Could not add music creator");
      });
  };
  const handleChangeUpload = (event, type) => {
    type === "profile"
      ? setUploadProfilePicture(event?.currentTarget?.files[0])
      : setUploadMusicFile(event?.currentTarget?.files[0]);
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
                  onChange={(e) => handleChangeUpload(e, "profile")}
                  error={Boolean(formik.errors.profile_picture)}
                  helperText={formik.errors.profile_picture}
                  multiple
                />
              </Button>
              <span style={{ paddingLeft: "1rem" }}>{uploadProfilePicture?.name} </span>
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
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                variant="outlined"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.description)}
                helperText={formik.errors.description}
                required
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
                name="linkedIn"
                variant="outlined"
                value={formik.values.linkedIn}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.linkedIn)}
                helperText={formik.errors.linkedIn}
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
                  accept=".mp3,audio/*"
                  onChange={(e) => handleChangeUpload(e, "music")}
                  error={Boolean(formik.errors.music)}
                  helperText={formik.errors.music}
                />
              </Button>
              <span style={{ paddingLeft: "1rem" }}>{uploadMusicFile?.name} </span>
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
