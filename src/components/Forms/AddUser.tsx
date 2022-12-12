import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import muiTextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Head from 'next/head';
import Router from 'next/router';
import * as Yup from 'yup';

const TextField = styled(muiTextField)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      genre: '',
      social: '',
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      firstName: Yup.string().max(255).required('First name is required'),
      lastName: Yup.string().max(255).required('Last name is required'),
      phone: Yup.number().max(10).required('Phone Number is required'),
      // policy: Yup.boolean().oneOf([true], 'This field must be checked'),
    }),
    onSubmit: () => {
      // eslint-disable-next-line no-console
      Router.push('/').catch(console.error);
    },
  });

  return (
    <>
      <Head>
        <title>Add User</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="md">
          {/* <NextLink href="/" passHref>
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink> */}
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Add a New User
              </Typography>
              {/* <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography> */}
            </Box>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6}>
                <TextField
                  error={Boolean(
                    formik.touched.firstName && formik.errors.firstName
                  )}
                  fullWidth
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  label="First Name"
                  margin="normal"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  error={Boolean(
                    formik.touched.lastName && formik.errors.lastName
                  )}
                  fullWidth
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  label="Last Name"
                  margin="normal"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6}>
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
              </Grid>
              <Grid xs={6}>
                <TextField
                  error={Boolean(formik.touched.phone && formik.errors.phone)}
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  label="Phone"
                  margin="normal"
                  name="Phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.phone}
                  variant="outlined"
                />
              </Grid>
              <TextField
                error={Boolean(formik.touched.genre && formik.errors.genre)}
                fullWidth
                helperText={formik.touched.genre && formik.errors.genre}
                label="Genre"
                margin="normal"
                name="genre"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.genre}
                variant="outlined"
              />

              <TextField
                error={Boolean(formik.touched.genre && formik.errors.genre)}
                fullWidth
                helperText={formik.touched.genre && formik.errors.genre}
                label="Bank Details"
                margin="normal"
                name="bankDetails"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.genre}
                variant="outlined"
              />

              <TextField
                error={Boolean(formik.touched.social && formik.errors.social)}
                fullWidth
                helperText={formik.touched.social && formik.errors.social}
                label="Social Media Link"
                margin="normal"
                name="socilaMedia"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                value={formik.values.social}
                variant="outlined"
              />
            </Grid>

            {/*   <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
              }}
            >
            <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
               <Typography color="textSecondary" variant="body2">
                I have read the{' '}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography> 
            </Box> */}
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ width: '25ch', ml: 'auto', mr: 'auto' }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Add User
              </Button>
            </Box>
            {/* <Typography color="textSecondary" variant="body2">
              Have an account?{' '}
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography> */}
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
