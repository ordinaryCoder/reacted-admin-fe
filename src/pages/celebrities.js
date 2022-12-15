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
import { CelebrityList } from "../components/celebrity/celebrities-list";



const Page = () => (
  
  <>
    <Head>
      <title>All Music Creators | Reacted</title>
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
          Celebrities
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} xs={12}>
            <CelebrityList />            
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
