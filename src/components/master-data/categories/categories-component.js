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

  

  export const CategoryComponent = (props) => {
    return(
        <form autoComplete="off" noValidate>
              <Card>
                <CardHeader subheader="" title="Add Category" />
                <Divider />
                <CardContent>
                <Typography sx={{ mb: 3 }} variant="h6">
                  Basic Info
                </Typography>
                  <Grid container spacing={3}>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Category Title"
                        label="Category Title"
                        name="categoryTitle"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Category Slug"
                        name="categorySlug"
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
                    Add Category
                  </Button>
                </Box>
              </Card>
            </form>
    )
  }