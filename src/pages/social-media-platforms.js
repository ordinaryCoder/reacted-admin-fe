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
  FormControlLabel,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { AddSocialMediaComponent } from "../components/master-data/social-media-platforms/create-social-media";
import { SoclaiMediaList } from "../components/master-data/social-media-platforms/social-media-list"
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import axios from "axios";

const Page = () => {
  const [socialmedialist, setSocialMediaList] = useState([]);

  const url = baseUrl + '/get_all_social_media_platforms'
  useEffect(() => {
    getSocialMediaList();
  }, [getSocialMediaList]);

  const getSocialMediaList = useCallback(
    () => {
      axios.get(url).then((response) => {
        //console.log(response); 
        setSocialMediaList(response.data.data.reverse());
        console.log(response.data.data);
      }).catch((response) => {
        console.log(response);
      });
    },
    [url],
  )

  return (

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
          <Typography sx={{ mb: 3 }}
            variant="h4">
            Social Media Platforms
          </Typography>
          <Grid container
            spacing={2}>
            <Grid item
              lg={5}
              md={5}
              xs={12}>
              <AddSocialMediaComponent onSubmitForm={() => getSocialMediaList()} />
            </Grid>
            <Grid item
              lg={7}>
              <SoclaiMediaList
                data={socialmedialist}
                onDeletePlatformItem={() => getSocialMediaList()} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
