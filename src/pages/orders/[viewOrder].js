import Head from "next/head";
import {
  Box
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { ViewOrderComponent } from '../../components/orders/view-orders';
import { useRouter } from 'next/router';
import AuthWrapper from '../../hoc/AuthWrapper';

const Page = () => {
  const { ViewOrder } = useRouter().query
  return (
    <>
      {/* <AuthWrapper> */}
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
      {/* </AuthWrapper> */}
    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
