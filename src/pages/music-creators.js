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
import { MusicCreatorsList } from "../components/music-creator/view-music-creators";
import { useEffect, useState } from "react";

const Page = () => {
  const [musicCreatorsList, setMusicCreatorList] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "/get_music_creator").then((response) => {
      console.log("response", response?.data?.data);
      setMusicCreatorList(response?.data?.data.reverse());
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
            Music Creator
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12}>
              <MusicCreatorsList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
