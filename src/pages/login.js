import { Alert, Box, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import { loginUrl } from '../constants/api';
import { useAuth } from '../contexts/auth-context';

const Login = () => {
  const { replace } = useRouter()
  const [severity, setSeverity] = useState("info");
  const [open, setOpen] = useState(false);
  const [msg, setMessage] = useState("");
  const { signin } = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: (data) => {
      loginUser(data);
    }
  });
  const loginUser = (data) => {
    axios.post(`${loginUrl}?email=${data.email}&password=${data.password}`)
      .then(res => {
        if (res.data.success) {
          console.log('push')
          const token = res.data.data[0].access_token;
          const user = res.data.data[0]
          localStorage.setItem('reacted-admin-token', token)
          signin(user, token)
          setSeverity('success')
          setMessage(res.data.message)
          setOpen(true)
          replace("/")
        } else {
          setOpen(true)
          setSeverity('error')
          setMessage(res.data.message)
        }
      })
      .catch(err => {

      })
  }
  return (
    <>
      <Head>
        <title>Login | Reacted</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="HighlightText"
                variant="h4"
              >
                Admin Login
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                // disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
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
    </>
  );
};

export default Login;
