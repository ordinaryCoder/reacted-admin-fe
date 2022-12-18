import {
  Box,
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
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import { MusicCreatorSchema } from "../../utils/validators";

export const CreateMusicCreator = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "asd",
      lastName: "asd",
      artistName: "asd",
      email: "asd@asc.com",
      phoneNumber: "8899556644",
      country: "cvf",
    },
    validationSchema: MusicCreatorSchema,
    onSubmit: (values) => {
      console.log("values");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
                <input type="file" hidden multiple />
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First names"
                name="firstName"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                // helperText="Please specify the first name"
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                // helperText="Please specify the first name"
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Artist name"
                name="artistName"
                variant="outlined"
                value={formik.values.artistName}
                onChange={formik.handleChange}
                error={formik.touched.artistName && Boolean(formik.errors.artistName)}
                // helperText="Please specify the first name"
                helperText={formik.touched.artistName && formik.errors.artistName}
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
                error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText="Please specify the first name"
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                type="number"
                variant="outlined"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                // helperText="Please specify the first name"
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
                error={formik.touched.country && Boolean(formik.errors.country)}
                // helperText="Please specify the first name"
                helperText={formik.touched.country && formik.errors.country}
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
              <TextField fullWidth label="Facebook" name="facebook" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Instagram" name="instagram" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="TikTok" name="tiktok" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Youtube" name="youtube" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Twitter" name="twitter" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="LinkedIn" name="linkedin" variant="outlined" />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography sx={{ mb: 3 }} variant="h6">
            Genre
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <FormControlLabel 
                control={<Checkbox name="genre" value="Pop" />} 
                label="Pop" />
              <FormControlLabel
                control={<Checkbox name="genre" value="Electronic" />}
                label="Electronic"/>
              <FormControlLabel
                control={<Checkbox name="genre" value="Hip Hop" />}
                label="Hip Hop"/>             
              <FormControlLabel
                control={<Checkbox name="genre" value="Country" />}
                label="Country"/>            
              <FormControlLabel 
                control={<Checkbox name="genre" value="Latin" />}
                label="Latin" />             
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid item md={12} xs={12}>
            <Typography sx={{ mb: 3 }} variant="h6">
              Upload Celebrity Music
            </Typography>
            <Button variant="contained" component="label">
              Upload Music Audios
              <input type="file" hidden multiple />
            </Button>
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
    </form>
  );
};
