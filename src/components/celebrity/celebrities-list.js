import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { SpotifyIcon } from "../../icons/spotify";
import { AppleMusicIcon } from "../../icons/apple-music";
import { TikTokIcon } from "../../icons/tik-tok";
import { SocialLinks } from "../SocialTile";
import Link from "next/link";

export const CelebrityList = (props) => {
  const { celebList } = props;

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Social Media Links</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Registration Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {celebList.map((cat, index) => (
                <TableRow key={index} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar sx={{ mr: 2 }}>AB</Avatar>
                      {cat.title}
                    </Box>
                  </TableCell>
                  <TableCell>{cat.email}</TableCell>
                  <TableCell>
                    <Stack direction="row">
                      <SocialLinks links={cat?.social_media_links} />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip label="Active" color="success" />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row">
                      <Link
                        href={{
                          pathname: "/update/[user]/[userid]",
                          query: { user: cat?.role, userid: cat?.user_id },
                        }}
                      >
                        <IconButton aria-label="ViewDetails" color="primary" size="small">
                          <VisibilityIcon color="primary" />
                        </IconButton>
                      </Link>

                      <IconButton aria-label="Delete" color="error" size="small">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell>{cat.added_date}</TableCell>
                </TableRow>
              ))}
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
  );
};
