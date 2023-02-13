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

const Login = () => {
  const router = useRouter();
  const theme = useTheme();
  const validationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
  });

  const handleSubmit = async (data) => {
    try {
      const { email, password } = data;
      const res = await axios.post(`${baseUrl}/login/`, data, {
        params: {
          email,
          password,
        },
      });
      localStorage.setItem('access-key', JSON.stringify(res.data.data[0].access_token));
      if(localStorage.getItem('access-key')) {
        router.push('/');
      } else {
        alert("Something went wrong, please try again later")
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

  return (
    <>
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
                disabled={formik.isSubmitting}
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
    </>
  );
};

export default Login;
