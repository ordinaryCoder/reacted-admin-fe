import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { CalendarMonth } from "@mui/icons-material";
import { Stack } from "@mui/system";

import CustomizedMenus from "../../components/dropdown-button/dropdown";

const Page = () => {
  
  return (
    <>
      <Head>
        <title>Order No 12322 - Reacted</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3, display: "flex", alignItems: "center" }} variant="p" component="p">
            <Link href="/orders" sx={{ display: "flex", alignItems: "center" }}>
              <>
                <ArrowBackIcon color="primary" sx={{ mr: 2 }} /> Back to Orders
              </>
            </Link>
          </Typography>
          <Typography sx={{ mb: 3 }} variant="h3" component="h1">
            Order No 1212
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              Place on <CalendarMonth color="action" sx={{ ml: 1, mr: 1 }} /> 01/01/2023 15:31
            </Typography>
            <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
              <CustomizedMenus />
              <Button variant="contained" color="warning">
                Order Status: Pending
              </Button>
            </Stack>
          </Stack>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <Card>
                <CardHeader subheader="" title="Order Details" />
                <Divider />
                <Box
                  sx={{
                    p: 3,
                  }}
                >
                  <List>
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Customer Name
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>Miron Vitold</Typography>
                        <Typography sx={{ opacity: 0.75 }}>
                          Street John Wick, no. 7 San Diego
                        </Typography>
                        <Typography sx={{ opacity: 0.75 }}>USA</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Order ID
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>5ecb8a6879877087d4aa2690</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Date
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>01/01/2023 15:31</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Sub Total
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>$ 1000</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Tax
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>$180 ( 18% VAT )</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Coupon Code
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>PROMO1 ( Discount - $80 )</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Total
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Typography sx={{ opacity: 0.75 }}>$ 1800</Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText sx={{ pl: "0px", fontWeight: 800, maxWidth: "300px" }}>
                        <Box>
                          <Typography variant="p" sx={{ fontWeight: 600 }}>
                            Order Status
                          </Typography>
                        </Box>
                      </ListItemText>
                      <Box
                        sx={{
                          flex: "1 1 0%",
                          mt: "0px",
                        }}
                      >
                        <Chip label="In Process" color="warning" />
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Card>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <Card>
                <CardHeader title="Order Items" />
                <Divider />
                <Box>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Celebrity Name</TableCell>
                          <TableCell>Review Status</TableCell>
                          <TableCell>Review Expiry Date</TableCell>
                          <TableCell>Amout Paid</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Abhishek Potdar x1</TableCell>
                          <TableCell>
                            <Chip label="In Progress" color="warning" />
                          </TableCell>
                          <TableCell>01/01/2023</TableCell>
                          <TableCell>$1000</TableCell>
                          <TableCell>
                            <Tooltip title="This will only change the order status as Refunded. You need to go to stripe and refund the amount for the Music Creator">
                              <Button color="error" variant="contained">
                                Refund
                              </Button>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abhimanyu Patil x1</TableCell>
                          <TableCell>
                            <Chip label="Music Reviewed" color="success" />
                          </TableCell>
                          <TableCell>01/01/2023</TableCell>
                          <TableCell>$1000</TableCell>
                          <TableCell>This Cant be refunded</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
