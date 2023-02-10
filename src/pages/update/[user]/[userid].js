import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
// import { CreateCelebrity } from "../../../components/celebrity/create-celebrity-component";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../constants/api";
import axios from "axios";
import { useRouter } from "next/router";
import { UpdateCeleberityDetails } from "../../../components/celebrity/update-celeb-details";

const Page = () => {
  const [celeb, setCeleb] = useState();
  const { query } = useRouter();
  const [loader, setLoader] = useState(true);
  const [socialLinks, setSocialLinks] = useState([]);

  const fetchSocialMediaPlatforms = (platformsData, social_media_links = []) => {
    console.log("inside social media", platformsData, social_media_links);
    try {
      const convert = JSON.parse(social_media_links ?? "");
      const keyValuePair = JSON.parse(convert).map((link) => {
        const key = Object.keys(link)[0] ?? "";
        return { platform: key, url: link[key], value: link[key] };
      });

      const socialMediaLinks = [];
      const socialMediaMaster = platformsData?.data?.data || [];
      socialMediaMaster.forEach((s) => {
        if (s.status === "Active") {
          const valueMap = keyValuePair.find((m) => m.platform === s.platform_name);
          if (valueMap) {
            socialMediaLinks.push(valueMap);
          }
        }
      });
      setSocialLinks(socialMediaLinks);
    } catch (error) {
      console.log("error", error);
      setLoader(false);
    }
  };

  const getCeleb = async () => {
    if (query && query.userid) {
      const celebDetails = await axios.get(baseUrl + `/get_celebrity?celebrity_id=${query.userid}`);
      const platformsData = await axios.get(baseUrl + "/get_all_social_media_platforms");

      Promise.all([celebDetails, platformsData]).then((responses) => {
        fetchSocialMediaPlatforms(platformsData, celebDetails?.data?.data[0]?.social_media_links);
        setCeleb(celebDetails?.data?.data[0]);
        setLoader(false);
      });
    }
  };

  useEffect(() => {
    getCeleb();
  }, [query]);

  return (
    <>
      <Head>
        <title>Update User Details | Reacted</title>
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
            Update {celeb && `${celeb?.first_name} ${celeb?.last_name}`} Profile Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12}>
              {!loader && celeb ? (
                <UpdateCeleberityDetails socialLinks={socialLinks} userDetails={celeb} />
              ) : (
                <>Loading.....</>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
