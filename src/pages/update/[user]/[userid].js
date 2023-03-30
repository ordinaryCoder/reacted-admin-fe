import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
// import { CreateCelebrity } from "../../../components/celebrity/create-celebrity-component";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../constants/api";
import axios from "axios";
import { useRouter } from "next/router";
import { UpdateCeleberityDetails } from "../../../components/celebrity/update-celeb-details";
import { UpdateMusicCreator } from "../../../components/music-creator/update-music-creator";

const Page = () => {
  const [celeb, setCeleb] = useState();
  const [musicCreatorDetails, setMusicCreatorDetails] = useState();
  const { query } = useRouter();
  console.log(query);
  const [loader, setLoader] = useState(true);
  const [socialLinks, setSocialLinks] = useState([]);

  const fetchSocialMediaPlatforms = (platformsData, social_media_links = []) => {
    console.log("inside social media", platformsData, social_media_links);
    try {
      const socialMediaLinks = [];
      const socialMediaMaster = platformsData?.data?.data || [];
      if (social_media_links) {
        const convert = JSON.parse(social_media_links ?? "");
        const keyValuePair = JSON.parse(convert).map((link) => {
          const key = Object.keys(link)[0] ?? "";
          return { platform: key, url: link[key], value: link[key] };
        });
        socialMediaMaster.forEach((s) => {
          if (s.status === "Active") {
            const valueMap = keyValuePair.find((m) => m.platform === s.platform_name);
            if (valueMap) {
              socialMediaLinks.push(valueMap);
            }
          }
        });
      } else {
        socialMediaMaster.forEach((s) => {
          if (s.status === "Active") {
            socialMediaLinks.push({
              platform: s.platform_name,
              url: s.platform_link,
              value: s.platform_link,
            });
          }
        });
      }
      setSocialLinks(socialMediaLinks);
    } catch (error) {
      console.log("error", error);
      setLoader(false);
    }
  };

  const getUserDetails = async () => {
    if (query && query.userid) {
      if (query.user.toUpperCase() === "CELEBRITY") {
        const celebDetails = await axios.get(
          baseUrl + `/get_celebrity?celebrity_id=${query.userid}`
        );
        const platformsData = await axios.get(baseUrl + "/get_all_social_media_platforms");

        Promise.all([celebDetails, platformsData]).then((responses) => {
          fetchSocialMediaPlatforms(platformsData, celebDetails?.data?.data[0]?.social_media_links);
          setCeleb(celebDetails?.data?.data[0]);
          setLoader(false);
        });
      }
      if (query.user.toUpperCase() === "MUSIC-CREATOR") {
        const musicCreatorDetails = await axios.get(
          baseUrl + `/get_music_creator?music_creator_id=${query.userid}`
        );
        const platformsData = await axios.get(baseUrl + "/get_all_social_media_platforms");

        Promise.all([musicCreatorDetails, platformsData]).then((responses) => {
          fetchSocialMediaPlatforms(
            platformsData,
            musicCreatorDetails?.data?.data[0]?.social_media_links
          );
          setMusicCreatorDetails(musicCreatorDetails?.data?.data[0]);
          setLoader(false);
        });
      }
    }
  };
  console.log('CELEB:', query.user?.toUpperCase())

  useEffect(() => {
    getUserDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {query.user?.toUpperCase() === "CELEBRITY" && (
            <>
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
            </>
          )}

          {query.user?.toUpperCase() === "MUSIC-CREATOR" && (
            <>
              <Typography sx={{ mb: 3 }} variant="h4">
                Update{" "}
                {musicCreatorDetails &&
                  `${musicCreatorDetails?.first_name} ${musicCreatorDetails?.last_name}`}{" "}
                Profile Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} xs={12}>
                  {!loader && musicCreatorDetails ? (
                    <UpdateMusicCreator
                      socialLinks={socialLinks}
                      userDetails={musicCreatorDetails}
                    />
                  ) : (
                    <>Loading.....</>
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
