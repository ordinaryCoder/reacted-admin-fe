import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@mui/material';

// import { format } from 'date-fns';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import { v4 as uuid } from 'uuid';
import { SeverityPill } from '@/components/common/severity-pill/SeverityPill';

// Temp function
const uuid = (num: number): number => num;

const orders = [
  {
    id: uuid(1),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova',
    },
    createdAt: 1555016400000,
    status: 'pending',
  },
  {
    id: uuid(2),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu',
    },
    createdAt: 1555016400000,
    status: 'delivered',
  },
  {
    id: uuid(3),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson',
    },
    createdAt: 1554930000000,
    status: 'refunded',
  },
  {
    id: uuid(4),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer',
    },
    createdAt: 1554757200000,
    status: 'pending',
  },
  {
    id: uuid(5),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert',
    },
    createdAt: 1554670800000,
    status: 'delivered',
  },
  {
    id: uuid(6),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov',
    },
    createdAt: 1554670800000,
    status: 'delivered',
  },
];

export const RecentOrders = (props: any) => (
  <Card {...props}>
    <CardHeader title="Latest Orders" />
    {/* <PerfectScrollbar> */}
    <Box sx={{ minWidth: 800 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order Ref</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell sortDirection="desc">
              <Tooltip enterDelay={300} title="Sort">
                <TableSortLabel active direction="desc">
                  Date
                </TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow hover key={order.id}>
              <TableCell>{order.ref}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              {/* <TableCell>{format(order.createdAt, 'dd/MM/yyyy')}</TableCell> */}
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </TableCell>
              <TableCell>
                <SeverityPill
                  color={
                    (order.status === 'delivered' && 'success') ||
                    (order.status === 'refunded' && 'error') ||
                    'warning'
                  }
                >
                  {order.status}
                </SeverityPill>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
    {/* </PerfectScrollbar> */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
