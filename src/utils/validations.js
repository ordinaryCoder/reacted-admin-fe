import * as Yup from "yup";
export const createCelebritySchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Must be a valid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  title: Yup.string().required("Title is required"),
  tag_line: Yup.string().required("Tag Line is required"),
  short_description: Yup.string().required("Short Description is required"),
  long_description: Yup.string().required("Long Description is required"),
  price: Yup.string().required("Price is required"),
  country: Yup.string().required("Country is required"),
  //   profile_picture: Yup.string().required("Profile_pictureis required"),
  account_name: Yup.string().required("Account Name  is required"),
  account_number: Yup.string().required("Account Number is required"),
  bank_name: Yup.string().required("Bank Name  is required"),
  bank_code: Yup.string().required("Bank Code is required"),
  bank_address: Yup.string().required("Bank Address  is required"),
});

export const createMusicCreatorSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Must be a valid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  artist_name: Yup.string().required("Artist Name is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string().required("Country is required"),
  instagram: Yup.string().required("Instagram is required"),
  facebook: Yup.string().required("Facebook is required"),
  linkedin: Yup.string().required("Linkedin is required"),
});
