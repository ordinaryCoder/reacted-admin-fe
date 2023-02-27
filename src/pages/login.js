import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Link, TextField, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { baseUrl } from "../constants/api";
import { Logo } from "../components/logo";
import  useAuth  from "../contexts/auth-context";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const theme = useTheme();

  const { signIn,loading } = useAuth();
  const validationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
  });

  useEffect(() => {
    const access_key = localStorage.getItem("access_key");
    const role_id = localStorage.getItem("role_id");
    if (access_key && role_id) {
      router.replace("/");
    } else
      router.replace("/login");
  }, []);
  

  const handleSubmit = async (data) => {
    try {
      const { email, password } = data;
      const response = await axios.post(`${baseUrl}/login`,data, {
        params: {
          email,
          password,
        },
      });
      if (response.status === 200 && response.data.success) {
        console.log("Logging in");
        const userData = {
          name: response.data?.data[0].first_name,
          email: response.data.data[0].email,
          userId: response.data.data[0].user_id,
          access_token: response.data.data[0].access_token,
          role_id: response.data.data[0].role_id,
          role_id1: response.data.data[0].role_id1,
          phone: response.data.data[0].phone,
        }
        signIn(userData);
        router.replace("/");
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      handleSubmit(data);
    },
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
      {loading && <div>Loading...</div>}
      <Head>
        <title>Login | Reacted</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >

        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: theme.palette.background.light,
            py: 5,
            px: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Logo sx={{}} />
          <NextLink href="/" passHref>
            <Button
              sx={{ ml: 2, alignSelf: "flex-start" }}
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit} sx={{ bgcolor: "text.secondary" }}>
            <Box sx={{ my: 1 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
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
