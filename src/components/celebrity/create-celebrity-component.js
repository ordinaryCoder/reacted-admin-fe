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
} from "@mui/material";
import { useFormik } from "formik";
import { CreateCelebrityScehma } from "../../utils/validators";

const CreateCelebrity = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "asd",
      lastName: "asd",
      email: "asd@asc.com",
      phone: "8899556644",
      country: "cvf",
      shortDesc: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      bankCode: "",
      bankAddress: "",
      paypalID: "",
    },
    validationSchema: CreateCelebrityScehma,
    onSubmit: (values) => {
      console.log("values");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader subheader="" title="Add Celebrity" />
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
                label="First name"
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
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                // helperText="Please specify the first name"
                helperText={formik.touched.lastname && formik.errors.lastname}
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
                name="phone"
                type="number"
                variant="outlined"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                // helperText="Please specify the first name"
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item md={12} xs={12}>
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
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Short Description"
                name="shortDesc"
                multiline
                rows={10}
                variant="outlined"
                value={formik.values.shortDesc}
                onChange={formik.handleChange}
                error={formik.touched.shortDesc && Boolean(formik.errors.shortDesc)}
                // helperText="Please specify the first name"
                helperText={formik.touched.shortDesc && formik.errors.shortDesc}
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
                name="accountName"
                variant="outlined"
                value={formik.values.accountName}
                onChange={formik.handleChange}
                error={formik.touched.accountName && Boolean(formik.errors.accountName)}
                // helperText="Please specify the first name"
                helperText={formik.touched.accountName && formik.errors.accountName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Bank Account Number"
                name="accountNumber"
                variant="outlined"
                value={formik.values.accountNumber}
                onChange={formik.handleChange}
                error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
                // helperText="Please specify the first name"
                helperText={formik.touched.accountNumber && formik.errors.accountNumber}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Bank Name"
                name="bankName"
                variant="outlined"
                value={formik.values.bankName}
                onChange={formik.handleChange}
                error={formik.touched.bankName && Boolean(formik.errors.bankName)}
                // helperText="Please specify the first name"
                helperText={formik.touched.bankName && formik.errors.bankName}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Bank Code"
                name="bankCode"
                type="number"
                variant="outlined"
                value={formik.values.bankCode}
                onChange={formik.handleChange}
                error={formik.touched.bankCode && Boolean(formik.errors.bankCode)}
                // helperText="Please specify the first name"
                helperText={formik.touched.bankCode && formik.errors.bankCode}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Bank Address"
                name="bankAddress"
                variant="outlined"
                value={formik.values.bankAddress}
                onChange={formik.handleChange}
                error={formik.touched.bankAddress && Boolean(formik.errors.bankAddress)}
                // helperText="Please specify the first name"
                helperText={formik.touched.bankAddress && formik.errors.bankAddress}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Typography sx={{ mb: 3 }} variant="h6">
                Add Your Paypal ID
              </Typography>
              <TextField
                fullWidth
                label="Paypal ID"
                name="paypalID"
                variant="outlined"
                value={formik.values.paypalID}
                onChange={formik.handleChange}
                error={formik.touched.paypalID && Boolean(formik.errors.paypalID)}
                // helperText="Please specify the first name"
                helperText={formik.touched.paypalID && formik.errors.paypalID}
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
              <TextField
                fullWidth
                label="Youtube"
                name="youtube"
                type="number"
                variant="outlined"
              />
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

export default CreateCelebrity;
