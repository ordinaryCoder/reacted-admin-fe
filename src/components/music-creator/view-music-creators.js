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

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export const MusicCreatorsList = (props) => {
    return(
<Card>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                />
              </TableCell>
              <TableCell>
                Full Name
              </TableCell>
              <TableCell>
                Artist Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Social Media Links
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell>
                Action
              </TableCell>
              <TableCell>
                Registration Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
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
                      Abhishek Potdar
                  </Box>
                </TableCell>
                <TableCell>
                  Test Artist Name
                </TableCell>
                <TableCell>
                  abhirpotdar@gmail.com
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
size="small">
                    <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="secondary"
size="small">
                    <InstagramIcon />
                    </IconButton>
                    <IconButton color="error"
aria-label="Youtube"
size="small">
                    <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary"
aria-label="LinkedIn"
size="small">
                    <LinkedInIcon color="primary"/>
                    </IconButton>
                </Stack>
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
color="primary"
size="small">
                    <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
                </TableCell>
                <TableCell>
                  08-12-2022 12:28:97
                </TableCell>
              </TableRow>
              <TableRow
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
                      Abhishek Potdar
                  </Box>
                </TableCell>
                <TableCell>
                  Test Artist Name
                </TableCell>
                <TableCell>
                  abhirpotdar@gmail.com
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
size="small">
                    <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="secondary"
size="small">
                    <InstagramIcon />
                    </IconButton>
                    <IconButton color="error"
aria-label="Youtube"
size="small">
                    <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary"
aria-label="LinkedIn"
size="small">
                    <LinkedInIcon color="primary"/>
                    </IconButton>
                </Stack>
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
color="primary"
size="small">
                    <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
                </TableCell>
                <TableCell>
                  08-12-2022 12:28:97
                </TableCell>
              </TableRow>
              <TableRow
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
                      Abhishek Potdar
                  </Box>
                </TableCell>
                <TableCell>
                  Test Artist Name
                </TableCell>
                <TableCell>
                  abhirpotdar@gmail.com
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
size="small">
                    <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="secondary"
size="small">
                    <InstagramIcon />
                    </IconButton>
                    <IconButton color="error"
aria-label="Youtube"
size="small">
                    <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary"
aria-label="LinkedIn"
size="small">
                    <LinkedInIcon color="primary"/>
                    </IconButton>
                </Stack>
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
color="primary"
size="small">
                    <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
                </TableCell>
                <TableCell>
                  08-12-2022 12:28:97
                </TableCell>
              </TableRow>
              <TableRow
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
                      Abhishek Potdar
                  </Box>
                </TableCell>
                <TableCell>
                  Test Artist Name
                </TableCell>
                <TableCell>
                  abhirpotdar@gmail.com
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
size="small">
                    <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="secondary"
size="small">
                    <InstagramIcon />
                    </IconButton>
                    <IconButton color="error"
aria-label="Youtube"
size="small">
                    <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary"
aria-label="LinkedIn"
size="small">
                    <LinkedInIcon color="primary"/>
                    </IconButton>
                </Stack>
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
color="primary"
size="small">
                    <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
                </TableCell>
                <TableCell>
                  08-12-2022 12:28:97
                </TableCell>
              </TableRow>
              <TableRow
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
                      Abhishek Potdar
                  </Box>
                </TableCell>
                <TableCell>
                  Test Artist Name
                </TableCell>
                <TableCell>
                  abhirpotdar@gmail.com
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
size="small">
                    <FacebookIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="secondary"
size="small">
                    <InstagramIcon />
                    </IconButton>
                    <IconButton color="error"
aria-label="Youtube"
size="small">
                    <YouTubeIcon />
                    </IconButton>
                    <IconButton color="primary"
aria-label="LinkedIn"
size="small">
                    <LinkedInIcon color="primary"/>
                    </IconButton>
                </Stack>
                </TableCell>
                <TableCell>
                <Chip label="Active"
color="success" />
                </TableCell>
                <TableCell>
                <Stack direction="row">
                    <IconButton aria-label="Facebook"
color="primary"
size="small">
                    <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton aria-label="Instagram"
color="error"
size="small">
                    <DeleteIcon />
                    </IconButton>
                </Stack>
                  
                  
                </TableCell>
                <TableCell>
                  08-12-2022 12:28:97
                </TableCell>
              </TableRow>
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

    