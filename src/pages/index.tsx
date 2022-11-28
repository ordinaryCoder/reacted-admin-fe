import { Box, Container, Grid } from '@mui/material';

import { Sales } from '@/components/dashboard/recent-orders/OrderChart';
import { RecentOrders } from '@/components/dashboard/recent-orders/RecentOrders';
import { RecentUsers } from '@/components/dashboard/recent-user/RecentUsers';
import { OngoingOrders } from '@/components/dashboard/stats-cards/OngoingOrders';
import { Profit } from '@/components/dashboard/stats-cards/Profit';
import { StatCard } from '@/components/dashboard/stats-cards/StatCard';
import { TotalUsers } from '@/components/dashboard/stats-cards/TotalUsers';
import { Meta } from '@/components/meta/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Reacted Admin Front end"
          description="Reacted Admin Front end"
        />
      }
    >
      {/* Dashboard - Stats, Recent Celebrity/Creator, Recent Orders, Total(all mentioned before) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <StatCard />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <OngoingOrders />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalUsers />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Profit sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <RecentUsers sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <RecentOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Index;
