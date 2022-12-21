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

  

  export const AddSocialMediaComponent = (props) => {
    return(
        <form autoComplete="off" noValidate>
              <Card>
                <CardHeader subheader="" title="Add Social Media Platform" />
                <Divider />
                <CardContent>
                <Typography sx={{ mb: 3 }} variant="h6">
                  Basic Info
                </Typography>
                  <Grid container spacing={3}>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Title"
                        label="Title"
                        name="title"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Link"
                        name="link"
                        required
                        variant="outlined"
                      />
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
                  <Button color="primary" variant="contained">
                    Add Social Media Platform
                  </Button>
                </Box>
              </Card>
            </form>
    )
  }