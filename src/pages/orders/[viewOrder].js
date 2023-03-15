import Head from "next/head";
import {
  Box
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { ViewOrderComponent } from '../../components/orders/view-orders';
import { useRouter } from 'next/router';

const Page = () => {
  const { ViewOrder } = useRouter().query
  return (
    <>
      <Head>
        <title>Order No {ViewOrder} - Reacted</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <ViewOrderComponent />
      </Box>
    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
