import React, { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Autocomplete from '@mui/material/Autocomplete';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, "Please enter Your FirstName")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  middleName: yup
    .string()
    .trim()
    .min(2, "Please enter Your LastName")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only"),
  // .required("Required"),

  lastName: yup
    .string()
    .trim()
    .min(2, "Please enter Your LastName")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phnNo: yup
    .string()
    .max(10, "Please enter valid Phone_No")
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{10,10})+$/i,
      "Please enter valid Phone_No"
    )
    .required("Required"),
  altrphnNo: yup
    .string()
    .max(10, "Please enter valid Phone_No")
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{10,10})+$/i,
      "Please enter valid Phone_No"
    ),
  // .required("Required"),
  address1: yup
    .string()
    .trim()
    .min(3, "Please enter your address")
    .max(50, "Too Long!")
    .required("Required"),
  address2: yup
    .string()
    .trim()
    .min(3, "Please enter your address")
    .max(50, "Too Long!"),
  // .required("Required"),
  pincode: yup
    .string()
    .max(6, "Please enter valid pincode")
    .matches(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{6,6})+$/i,
      "Please enter valid pincode"
    )
    .required("Required"),
  city: yup
    .string()
    .trim()
    .min(2, "Please enter city name")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  state: yup
    .string()
    .trim()
    .min(2, "Please enter state name")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  country: yup
    .string()
    .trim()
    .min(2, "Please enter country name")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  age: yup
    .number()
    // .string()
    .min(1, "You must be at least 1 year")
    .max(120, "You must be at most 120 years")
    // .matches( /^[0-9]*$/, "Please enter characters only")
    .required("Required"),
  gender: yup
    .string()
    .required("Required"),
  role: yup
    .string()
    .required("Required"),
  uname: yup
    .string()
    .trim()
    .min(2, "Please enter Your UserName")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
    .required("Required"),
  password: yup
    .string('Enter your password')
    .min(8, 'minimum 8 characters length')
    .required('Password is required'),
});

export default function SimpleAccordion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); const location = useLocation()

  var formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phnNo: "",
      altrphnNo: "",
      age: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
      address1: "",
      address2: "",
      gender: "",
      role: "",
      uname: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
      console.log("formik");
    },
  });

  // console.log("location------------", location.state.row);

  const [data, setData] = useState([]);
  const [show, setshow] = React.useState(false)
const nav = useNavigate()

  const submitHandler = () => {
    setshow(false)
    setData((prevFormValues) => [...prevFormValues, formik.values]);
    console.log(data);
    console.log(formik.values);
  };

  useEffect(() => {
    localStorage.setItem("initialValues", JSON.stringify(data));
  }, [data]);



  const gender = [
    { label: "None" },
    { label: "Men" },
    { label: "Women" },
    { label: "Other" }
  ]

  const role = [
    { label: "Doctor" },
    { label: "patient" },

  ]
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <form onSubmit={formik.handleSubmit}>
              <div>
                <Stack direction="row" spacing={1} className="stackFields">
                  <div style={{ 'color': 'white' }}>
                    <TextField style={{ 'color': 'white' }}
                      id="outlined-basic"
                      name="firstName"
                      label="FirstName"
                      variant="outlined"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName && Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      name="middleName"
                      label="MiddleName"
                      variant="outlined"

                      value={formik.values.middleName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.middleName && Boolean(formik.errors.middleName)
                      }
                      helperText={formik.touched.middleName && formik.errors.middleName}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      name="lastName"
                      label="LastName"
                      variant="outlined"

                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastName && Boolean(formik.errors.lastName)
                      }
                      helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      name="email"
                      label="Email"
                      variant="outlined"

                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>
                </Stack>
              </div>
              <br />
              {/* <br /> */}

              <Stack direction="row" spacing={1} className="stackFields">

                <div>
                  <TextField
                    name="phnNo"
                    label="PhnNo"
                    variant="outlined"

                    value={formik.values.phnNo}
                    onChange={formik.handleChange}
                    error={formik.touched.phnNo && Boolean(formik.errors.phnNo)}
                    helperText={formik.touched.phnNo && formik.errors.phnNo}
                  />
                </div>
                <div>
                  <TextField
                    name="altrphnNo"
                    label="Alternative PhnNo"
                    variant="outlined"

                    value={formik.values.altrphnNo}
                    onChange={formik.handleChange}
                    error={formik.touched.altrphnNo && Boolean(formik.errors.altrphnNo)}
                    helperText={formik.touched.altrphnNo && formik.errors.altrphnNo}
                  />
                </div>
                <div>
                  <TextField
                    name="age"
                    label="Age"
                    variant="outlined"

                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                  />
                </div>

                <div >
                  {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
    
                  <Select
                    name="gender"
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    label="Gender"
                    variant="outlined"

                    // onChange={formik.handleChange}
                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                    helperText={formik.touched.gender && formik.errors.gender}
                  >
                    <MenuItem value="gender">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl> */}

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    variant="outlined"
                    options={gender}
                    sx={{ width: 225 }}
                    renderInput={(params) =>
                      <TextField {...params} label="gender" />}
                  />

                </div>
              </Stack>
              <br />

              <Stack direction="row" spacing={1} className="stackFields">

                <div >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    variant="outlined"
                    options={role}
                    sx={{ width: 225 }}
                    renderInput={(params) =>
                      <TextField {...params} label="role" />}
                  />
                </div>
                <div>
                  {/* <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                  }}
                  autoComplete="off"
                > */}
                  <TextField
                    name="address1"
                    label="address1"
                    variant="outlined"
                    id="outlined-basic"

                    multiline
                    // rows={1}
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                    error={formik.touched.address1 && Boolean(formik.errors.address1)}
                    helperText={formik.touched.address1 && formik.errors.address1}
                  />
                  {/* </Box> */}
                </div>

                <div>
                  {/* <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                  }}
                  autoComplete="off"
                > */}
                  <TextField
                    name="address2"
                    label="address2"
                    variant="outlined"

                    multiline
                    // rows={1}
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                    error={formik.touched.address2 && Boolean(formik.errors.address2)}
                    helperText={formik.touched.address2 && formik.errors.address2}
                  />
                  {/* </Box> */}
                </div>
                <div>
                  <TextField
                    name="city"
                    label="City"
                    variant="outlined"

                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </div>

              </Stack>
              <br />

              <Stack direction="row" spacing={1} className="stackFields">
                <div>
                  <TextField
                    name="state"
                    label="State"
                    variant="outlined"

                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                </div>
                <div>
                  <TextField
                    name="country"
                    label="Country"
                    variant="outlined"

                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                  />
                </div>
                <div>
                  <TextField
                    name="pincode"
                    label="Pincode"
                    variant="outlined"

                    value={formik.values.pincode}
                    onChange={formik.handleChange}
                    error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                    helperText={formik.touched.pincode && formik.errors.pincode}
                  />
                </div>
                <div>
                  <TextField
                    name="uname"
                    label="UserName"
                    variant="outlined"

                    value={formik.values.uname}
                    onChange={formik.handleChange}
                    error={formik.touched.uname && Boolean(formik.errors.uname)}
                    helperText={formik.touched.uname && formik.errors.uname}
                  />
                </div>
              </Stack>
              <br />


              <Stack direction="row" spacing={1} className="stackFields">


                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <div>
                      <TextField
                        name="password"
                        label="Password"
                        variant="outlined"

                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Submit
                    </Button>
                  </Grid>
                  {/* <Grid item xs={2}>
                  <Item>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Submit
                    </Button>
                  </Item>
                </Grid> */}
                </Grid>


              </Stack>
            </form>
          </Box>
        </AccordionDetails>
      </Accordion>
      </div>
  )
              }