import { useEffect, useState } from 'react';
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
import axios from 'axios';
import { baseUrl } from '../../../constants/api';

export const SoclaiMediaList = (props) => {

    const [socialmedialist, setSocialMediaList] = useState([]);

    const url = baseUrl+'/get_all_social_media_platforms'
    useEffect(() => {
      axios.get(url).then((response) => {
        //console.log(response); 
        setSocialMediaList(response.data.data);     
      }).catch((response) => { 
        console.log(response); 
      });
    }, []);

    console.log(socialmedialist, 'Social media');
    
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
                Status
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { socialmedialist.map((platform, index) => 
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
                      {platform.platform_name}
                  </Box>
                </TableCell>
                <TableCell>
                <Chip label={platform.status} color="success" />
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

    