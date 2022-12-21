import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Chip
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import DeleteIcon from '@mui/icons-material/Delete';

export const CustomerSupportList = (props) => {

    const categories = [
        { name: 'Abhishek Potdar', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
        { name: 'Amit Rawat', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
        { name: 'Omkar D', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
        { name: 'Abhimanyu P', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
        { name: 'Shubham J', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
        { name: 'Prasad P', email: 'abhirpotdar@gmail.com', phone: '8776566677', message: "This is a test message" },
      ];
    return(
<Card>
    <PerfectScrollbar>
      <Box>
        <Table stickyHeader
aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                />
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Phone
              </TableCell>
              <TableCell>
                Message
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell>
                Action
              </TableCell>
              <TableCell>
                Added Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { categories.map((category, index) => 
            <TableRow
            key={index}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                      {category.name}
                  </Box>
                </TableCell>
                <TableCell>
                {category.email}
                </TableCell>
                <TableCell>
                {category.phone}
                </TableCell>
                <TableCell>
                {category.message}
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>                  
                </TableCell>
                <TableCell>
                12-08-2022
                </TableCell>
              </TableRow>
            )}
            
              
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    {/*<TablePagination
      component="div"
      count={customers.length}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleLimitChange}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25]}
                />*/}
  </Card>
    )
}

    