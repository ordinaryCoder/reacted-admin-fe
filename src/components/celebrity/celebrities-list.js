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
import { useRouter } from 'next/router';
import axios from 'axios';
import { deleteCelebrity } from '../../constants/api';
import { HttpRequest } from '../../services/axios.service';

export const CelebrityList = (props) => {
  const [celebList, setcelebList] = useState([]);
  const [severity, setSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState('')
  // const { celebList } = props;
  const router = useRouter()
  const http = new HttpRequest()
  console.log(celebList)
  const FetchList = async () => {
    const response = await http.axiosRequest("/get_celebrity", 'GET', true, {})
    if (response.data?.success) {
      setcelebList(response?.data?.data.reverse());
    } else {
      setOpen(true)
      setSeverity('error')
      setMessage(response.data.message)
    }
  }

  const handleCelebDelete = async (id) => {
    const formData = new FormData();
    formData.append('celebrity_id', id)
    const response = await http.axiosRequest(deleteCelebrity, 'POST', true, {}, formData, {
      'Content-Type': 'multipart/formdata'
    })
    if (response?.data?.success) {
      setOpen(true)
      setSeverity('success')
      setMessage(response.data.message)
      FetchList()
    } else {
      setOpen(true)
      setSeverity('error')
      setMessage(response.data.message)
    }
  }



  useEffect(() => {
    FetchList()
  }, []);
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
                    <Chip label={cat?.status ?? 'N.A.'} color="success" />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row">
                      {/* <Link
                        href={{
                          pathname: "/update/[role]/[userid]",
                          query: { role: 'celebrity', userid: cat?.user_id },
                        }}
                      > */}
                      <div onClick={() => {
                        router.push(`/update/celebrity/${cat?.user_id}`)
                      }}>
                        <IconButton aria-label="ViewDetails" color="primary" size="small">
                          <VisibilityIcon color="primary" />
                        </IconButton>
                      </div>
                      {/* </Link> */}

                      <IconButton aria-label="Delete" color="error" size="small" onClick={() => {
                        handleCelebDelete(cat?.user_id)
                      }}>
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
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        onClose={() => setOpen(false)}
      >
        <Alert sx={{ width: "100%", color: "#fff" }} variant="filled" severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </Card>
  );
};
