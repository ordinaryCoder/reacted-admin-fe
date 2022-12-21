import Head from "next/head";
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
  FormControlLabel
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { AddSocialMediaComponent } from "../components/master-data/social-media-platforms/create-social-media";
import { SoclaiMediaList } from "../components/master-data/social-media-platforms/social-media-list"



const Page = () => (
  
  <>
    <Head>
      <title>Categories | Reacted</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Social Media Platforms
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={5} md={5} xs={12}>
            <AddSocialMediaComponent />            
          </Grid>
          <Grid item lg={7}>
            <SoclaiMediaList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
