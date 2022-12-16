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
    TextareaAutosize
  } from "@mui/material";

  export const CreateCelebrity = (props) => {
    return(
        <form autoComplete="off" noValidate>
              <Card>
                <CardHeader subheader="" title="Add Celebrity" />
                <Divider />
                <CardContent>
                <Typography sx={{ mb: 3 }} variant="h6">
                  Basic Info
                </Typography>
                  <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                  <Button
                    variant="contained"
                    component="label"
                    >
                    Upload Profile Photos
                    <input
                        type="file"
                        hidden
                        multiple
                    />
                    </Button>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="First name"
                        name="firstName"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={12}>
                    <TextField
                    fullWidth
                    label="Short Description"
                    multiline
                    rows={10}
                    variant="outlined"
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
                        helperText="Please specify the Account name"
                        label="Account Name"
                        name="accountName"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bank Account Number"
                        name="accountNumber"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bank Name"
                        name="bankName"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bank Code"
                        name="bankCode"
                        type="number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bank Address"
                        name="bankAddress"
                        required
                        variant="outlined"
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
                        required
                        variant="outlined"
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
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Instagram"
                        name="instagram"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="TikTok"
                        name="tiktok"
                        required
                        variant="outlined"
                      />
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
                      <TextField
                        fullWidth
                        label="Twitter"
                        name="twitter"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="LinkedIn"
                        name="linkedin"
                        required
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider/>

                <CardContent>
                <Typography sx={{ mb: 3 }} variant="h6">
                  Genre
                </Typography>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="genere"
                            value="Pop"
                        />
                    }
                    label="Pop"/>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="genere"
                            value="Electronic"
                        />
                    }
                    label="Electronic"/>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="genere"
                            value="Hip Hop"
                        />
                    }
                    label="Hip Hop"/>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="genere"
                            value="Country"
                        />
                    }
                    label="Country"/>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="genere"
                            value="Latin"
                        />
                    }
                    label="Latin"/>
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
                  <Button color="primary" variant="contained">
                    Save details
                  </Button>
                </Box>
              </Card>
            </form>
    )
  }