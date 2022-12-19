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

export const CategoryList = (props) => {

    const categories = [
        { name: 'Pop', slug: 'pop' },
        { name: 'HipHop', slug: 'HipHop' },
        { name: 'EDM', slug: 'EDM' },
        { name: 'Rock', slug: 'Rock' },
        { name: 'Latin', slug: 'Latin' },
        { name: 'Indie', slug: 'Indie' },
        { name: 'International', slug: 'International' },
      ];
    return(
<Card>
    <PerfectScrollbar>
      <Box>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                />
              </TableCell>
              <TableCell>
                Category Title
              </TableCell>
              <TableCell>
                Slug
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
                    <Avatar
                      sx={{ mr: 2 }}
                    >
                      AB
                    </Avatar>
                      {category.name}
                  </Box>
                </TableCell>
                <TableCell>
                {category.slug}
                </TableCell>
                <TableCell>
                <Chip label="Active" color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Instagram" color="error" size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
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

    