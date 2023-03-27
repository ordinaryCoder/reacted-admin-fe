import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import axios from 'axios';
import { baseUrl } from '../../constants/api';
import { useRouter } from 'next/router';


const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const LatestOrders = (props) => {
  const [Orders, setOrders] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (window) {
      axios.get(baseUrl + "/get_all_orders", {
        headers: `authorization:${window.localStorage.getItem('access_key')?.replaceAll('"', '')}`
      }).then((response) => {
        setOrders(response?.data?.data);
        console.log("RESPONSE", response)
      });
    }
    return (() => {
      setOrders([])
    })
  }, []);
  return (

    <Card {...props}>
      <CardHeader title="Latest Orders" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          {Orders?.length > 0 ? <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.iOrderId}
                  </TableCell>
                  <TableCell>
                    {`${order.vBillingFirstName} ${order.vBillingLastName}`}
                  </TableCell>
                  <TableCell>
                    {/* {format(, 'dd/MM/yyyy')} */}
                    {new Date(order.dtAddedDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <SeverityPill
                      color={(order.eOrderStatus === 'Completed' && 'success')
                        || (order.eOrderStatus === 'Failed' && 'error')
                        || 'warning'}
                    >
                      {order.eOrderStatus ?? "N.A."}
                    </SeverityPill>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => {
                      router.push(`orders/${order.iOrderId}`)
                    }}>
                      View Order
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> : <h3 style={{ textAlign: 'center' }}>No Orders Found</h3>}
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
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
  )

}
