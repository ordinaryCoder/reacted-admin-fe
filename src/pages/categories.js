import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { CategoryComponent } from "../components/master-data/categories/categories-component";
import { CategoryList } from "../components/master-data/categories/categories-list";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../constants/api";
import axios from "axios";

const Page = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  const getCategoryList = useCallback(() => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response);
        setCategoryList(response.data.data.reverse());
      })
      .catch((response) => {
        console.log(response);
      });
  }, [url]);

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
          <Typography sx={{ mb: 3 }} variant="h4">
            Categories
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={5} md={5} xs={12}>
              <CategoryComponent onCategorySubmit={() => getCategoryList()} />
            </Grid>
            <Grid item lg={7}>
              <CategoryList data={categoryList} onDeletePlatformItem={() => getCategoryList()} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
