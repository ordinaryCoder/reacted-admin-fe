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
  styled,
  Paper,
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { baseUrl } from "../../constants/api";
import { Field, FieldArray, FormikProvider, useFormik } from "formik";
import { createCelebritySchema } from "../../utils/validators";
import { useEffect, useState } from "react";
import axios from "axios";
import { Router } from "next/router";
import { Stack } from "@mui/system";
import { removeItemAtIndex } from "../../utils/arrayUtils";

//TODO:
// validation message check,
// catergory validation

// {
//   "user_id": "88",
//   "first_name,": "Noah",
//   "last_name,": "Kahan",
//   "email,": "noahkahan@gmail.com",
//   "phone,": "3146777678",
//   "role,": "Celebrity",
//   "title,": "Noah Kahan",
//   "tag_line,": "Pop / Folk",
//   "short_description,": "As Noah Kahan changes, he casts those experiences onto songs like light through a film projector. At the core of the music’s upbeat energy and unfiltered lyrics, you’ll hear who he was before and who he became — almost in real-time. The Vermont singer still pens songs straight from the heart and still cracks jokes with his signature, self-deprecating sense of humor; he’s just changed in all of the right ways (and chronicled them via his songwriting). He gained that understanding through quite the journey from small town Vermont to global renown. He’s racked up over one billion streams, released two full length albums (Busyhead, 2019 and I Was/I Am, 2021) and a mid-pandemic EP (Cape Elizabeth, 2020), picked up a Gold Certification for “Hurt Somebody” feat. Julia Michaels, and performed on television shows such as The Late Show with Stephen Colbert, Late Night with Seth Meyers, and TODAY. Not to mention, he’s collaborated with everyone from Joy Oladokun to Chelsea Cutler to mxmtoon to Quinn XCII to Gryffin. After 5 years of critical acclaim and global touring, he sought an even purer style of writing and arrangement, a challenge from within to convey a vivid representation of what he loves, fears, and struggles with most passionately. Now, Noah continues to progress on his 2022 singles “Stick Season” and “Northern Attitude,” taken from his highly anticipated new album Stick Season out now.",
//   "long_description,": "As Noah Kahan changes, he casts those experiences onto songs like light through a film projector. At the core of the music’s upbeat energy and unfiltered lyrics, you’ll hear who he was before and who he became — almost in real-time. The Vermont singer still pens songs straight from the heart and still cracks jokes with his signature, self-deprecating sense of humor; he’s just changed in all of the right ways (and chronicled them via his songwriting). He gained that understanding through quite the journey from small town Vermont to global renown. He’s racked up over one billion streams, released two full length albums (Busyhead, 2019 and I Was/I Am, 2021) and a mid-pandemic EP (Cape Elizabeth, 2020), picked up a Gold Certification for “Hurt Somebody” feat. Julia Michaels, and performed on television shows such as The Late Show with Stephen Colbert, Late Night with Seth Meyers, and TODAY. Not to mention, he’s collaborated with everyone from Joy Oladokun to Chelsea Cutler to mxmtoon to Quinn XCII to Gryffin. After 5 years of critical acclaim and global touring, he sought an even purer style of writing and arrangement, a challenge from within to convey a vivid representation of what he loves, fears, and struggles with most passionately. Now, Noah continues to progress on his 2022 singles “Stick Season” and “Northern Attitude,” taken from his highly anticipated new album Stick Season out now.",
//   "price,": "500",
//   "is_featured,": "",
//   "bank_account_name,": "Test Account",
//   "bank_account_number,": "3216553766",
//   "bank_name,": "Test Bank",
//   "bank_address,": "USA",
//   "paypal_id,": null,
//   "added_date,": "2023-01-13 10:27:57",
//   "updated_date,": null,
//   "categories,": "Pop, Hiphop",
//   "images,": [],
//   "w9form,": "http://s3-us-west-2.amazonaws.com/reacted/w9_form/_1673605677?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY4GBF6Z3MMICD4H7%2F20230208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230208T115519Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=51f66f431aba37bfda0292da68b3d1524d06fe22070a1df8269a8dccfaf8994b",
//   "social_media_links,": "\"[{\\\"Youtube\\\":\\\"https:\\/\\/www.youtube.com\\/@NoahKahan\\\"},{\\\"Spotify\\\":\\\"https:\\/\\/open.spotify.com\\/artist\\/2RQXRUsr4IW1f3mKyKsy4B\\\"},{\\\"Apple Music\\\":\\\"\\\"},{\\\"Tiktok\\\":\\\"https:\\/\\/www.tiktok.com\\/@noahkahanmusic?lang=en\\\"},{\\\"Instagram\\\":\\\"https:\\/\\/www.instagram.com\\/noahkahanmusic\\/?hl=en\\\"}]\""
// }

// const getSocialMediaLinks = (links) => {
//   try {
//     const convert = JSON.parse(links);
//     const keyValuePair = JSON.parse(convert).map((link) => {
//       const key = Object.keys(link)[0] ?? "";
//       return { platform: key, url: link[key] };
//     });
//     const socialLinksArr = keyValuePair.filter((kp) => kp.url !== "");
//     return socialLinksArr.map((p) => ({
//       platformName: p.platform_name,
//       value: p.url,
//     }));
//   } catch (error) {
//     // console.log('error', error);
//   }
// };

export const UpdateCeleberityDetails = (props) => {
  
  const {
    user_id,
    first_name,
    last_name,
    email,
    phone,
    // role,
    title,
    tag_line,
    short_description,
    long_description,
    price,
    // is_featured,
    bank_account_name,
    bank_account_number,
    bank_name,
    bank_address,
    // paypal_id,
    // added_date,
    // updated_date,
    categories,
    // images,
    w9form,
    // social_media_links,
  } = props.userDetails;

  const {socialLinks = []} = props;

  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  // const [uploadProfilePicturecategoriesOptions, setUploadProfilePicture] = useState([]);
  const [severity, setSeverity] = useState("success");

  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  // const checkedIcon = <CheckBoxIcon fontSize="small" />;


  const formik = useFormik({
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      title: title,
      tag_line: tag_line,
      short_description: short_description,
      long_description: long_description,
      categories: categories,
      price: price,
      is_featured: true,
      // country: country,
      profile_picture: "",
      account_name: bank_account_name,
      account_number: bank_account_number,
      bank_name: bank_name,
      // bank_code: bank_code,
      bank_address: bank_address,
      social_media_links: socialLinks,
    },
    validationSchema: createCelebritySchema,
    onSubmit: (data) => {
      handleSubmit(data);
      console.log(data);
    },
    enableReinitialize: true,
    validateOnChange: true,
  });

  const handleSubmit = (data) => {
    // let catIdArray = [];
    // selectedCategories.map((cat) => {
    //   catIdArray.push(cat.category_id);
    // });
    // data.categories = catIdArray.join(",");
    uploadProfilePicture.forEach((pic, i) => {
      data[`profile_picture[${i}]`] = pic;
    });
    // data['profile_picture[0]'] = uploadProfilePicture;
    let formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "social_media_links") {
        formData.append(key, data[key]);
      }
    });
    const mediaLinks = data.social_media_links.map((link) => ({ [link.platformName]: link.value }));
    formData.append("social_media_links", JSON.stringify(mediaLinks));
    formData.append('celebrity_id', user_id ?? '');
    // formData.append('categories', categories ?? '');
    console.log("in handle submit", formData);

    axios
      .post(baseUrl + "/update_celebrity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === 1) {
          setSeverity("success");
        } else if (response.data.success === 0) {
          setSeverity("warning");
        } else {
          setSeverity("error");
        }
        setOpen(true);
        console.log("in success response", response);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(response, "Could not add celebrity");
      });
  };
  // const handleChangeProfilePicture = (event) => {
  //   let selectedFIles = [];
  //   const targetFiles = event.target.files;
  //   const targetFilesObject = [...targetFiles, ...uploadProfilePicture];
  //   setUploadProfilePicture(targetFilesObject);
  // };
  // const removeImage = (index) => {
  //   const remove = removeItemAtIndex(uploadProfilePicture, index);
  //   setUploadProfilePicture(remove);
  // };

  // useEffect(() => {
  //   const celebCategories = categories.length
  //     ? categories.split(',').map((x) => x.trim())
  //     : [];

  //   const celebCategoriesData = [];
  //   categories.forEach((c) => {
  //     if (celebCategories?.includes(c.category_name)) {
  //       celebCategoriesData.push({ ...c, selected: true });
  //     } else {
  //       celebCategoriesData.push({ ...c, selected: false });
  //     }
  //   });
  //   // setCelebCategories(celebCategoriesData);
  // }, [props.userDetails]);

  // console.log("update user details", props, socialMediaPlatforms);

  return (
    <FormikProvider value={formik}>
      <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        <Card>
          {/* <CardHeader subheader="" title="Add Celebrity" /> */}
          <Divider />
          <CardContent>
            <Typography sx={{ mb: 3 }} variant="h6">
              Basic Info
            </Typography>
            <Grid container spacing={3}>
              {/* <Grid item md={12} xs={12}>
                  <Button variant="contained" component="label">
                    Upload Profile Photos
                    <input
                      type="file"
                      hidden
                      multiple
                      name="profile_picture"
                      accept="image/*"
                      onChange={handleChangeProfilePicture}
                      error={Boolean(formik.errors.profile_picture)}
                      helpertext={formik.errors.profile_picture}
                    />
                  </Button>
                  <span style={{ paddingLeft: "1rem" }}>{uploadProfilePicture?.name} </span>
                </Grid> */}
              {/* <Grid item md={12} xs={12}>
                  <Stack direction="row" spacing={2}>
                    {uploadProfilePicture.map((pic, i) => {
                      return <Item key={i} style={{ position: 'relative' }} className="imgPreview">
                        <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src={URL.createObjectURL(pic)} />
                        <CancelRoundedIcon style={{ cursor: "pointer" }} onClick={() => removeImage(i)} />
                      </Item>
                    })}
                  </Stack>
                </Grid> */}
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
              <Grid item md={6} xs={12}>
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
              {/* <Grid item md={6} xs={12}>
                <Autocomplete
                  multiple
                  fullWidth
                  onChange={(event, value) => {
                    formik.setFieldValue("categories", value);
                    setSelectedCategories(value);
                  }}
                  id="checkboxes-tags-demo"
                  options={categoriesOptions}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option?.category_name}
                  // getoptionvalue={(option) => option?.category_id}
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
              </Grid> */}

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
              {/* <Grid item md={6} xs={12}>
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
                </Grid> */}
              <Grid item md={6} xs={12}>
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
                />
              </Grid>

              <Grid item md={6} xs={12}>
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

              <Grid item md={12} xs={12}>
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
              <Grid item md={12} xs={12}>
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
            <Typography sx={{ mb: 3 }} variant="h6">
              Payment Info
            </Typography>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12}>
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
              <Grid item md={6} xs={12}>
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
              <Grid item md={6} xs={12}>
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
              {/* <Grid item md={6} xs={12}>
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
                </Grid> */}
              <Grid item md={6} xs={12}>
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
          <CardContent>
            <Typography sx={{ mb: 3 }} variant="h6">
              Social Media Links
            </Typography>
            <Grid container spacing={3}>
              <FieldArray validateOnChange={false} name="social_media_links">
                <>
                  {formik.values.social_media_links.map((platform, index) => {
                    return (
                      <Grid key={index} item md={6} xs={12}>    
                        <Field name={`social_media_links.${index}.value`}>
                          {({ field }) => (
                            <TextField
                              fullWidth
                              label={platform.platform}
                              variant="outlined"
                              {...field}
                            />
                          )}
                        </Field>
                      </Grid>
                    );
                  })}
                </>
              </FieldArray>

              {/* {
                socialMediaPlatforms.map((platform, index) => {
                  return (
                    <Grid key={index} item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label={platform.platform_name}
                        name={platform.platform_name}
  
                        variant="outlined"
                        // value={formik.values.[]}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  )
                })
              } */}
            </Grid>
          </CardContent>

          <Divider />

          {w9form === "" || w9form === null ? (
            <CardContent>
              <Typography sx={{ mb: 3 }} variant="h6">
                W9 Form Upload
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <Button variant="contained" component="label">
                    Upload W9 Form
                    <input
                      type="file"
                      hidden
                      name="w9_form"
                      error={Boolean(formik.errors.w9_form)}
                      helpertext={formik.errors.w9_form}
                    />
                  </Button>
                  <span style={{ paddingLeft: "1rem" }}>{uploadProfilePicture?.name} </span>
                </Grid>
              </Grid>
            </CardContent>
          ) : null}

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
          autoHideDuration={6000}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          onClose={() => setOpen(false)}
        >
          <Alert sx={{ width: "100%", color: "#fff" }} variant="filled" severity={severity}>
            {msg}
          </Alert>
        </Snackbar>
      </form>
    </FormikProvider>
  );
};
