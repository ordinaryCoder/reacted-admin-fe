import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../constants/api";
import { DashboardLayout } from "../components/dashboard-layout";
import { CelebrityList } from "../components/celebrity/celebrities-list";
import { useEffect, useState } from "react";

const Page = () => {

  const [celebList, setcelebList] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + "/get_celebrity").then((response) => {
      console.log("response", response?.data?.data);
      setcelebList(response?.data?.data.reverse());
    });
  }, []);

  return (
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
              <CelebrityList celebList={celebList}/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );

} 


Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
