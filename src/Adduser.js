import React from 'react'

export default function Adduser() {
    const validationSchema = yup.object({
        Firstname: yup
        .string()
        // .test('Must be exactly 5 characters', val => val.length === 5)
         .trim()
          .min(2, "Please enter Your FirstName")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          Middlename: yup
          .string()
          .trim()
          .min(2, "Please enter Your LastName")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only"),
          // .required("Required"),
      
          LastName: yup
          .string()
          .trim()
          .min(2, "Please enter Your LastName")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          Email: yup
          .string("Enter your email")
          .trim()
          .email("Enter a valid email")
          .required("Email is required"),
          PhoneNumber: yup
          .string()
          .max(10, "Please enter valid Phone_No")
          .matches(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{10,10})+$/i,
            "Please enter valid Phone_No"
          )
          .required("Required"),
          AlternativeNumber: yup
          .string()
          .max(10, "Please enter valid Phone_No")
          .matches(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{10,10})+$/i,
            "Please enter valid Phone_No"
          ),
          // .required("Required"),
          Addressline1: yup
          .string()
          .trim()
          .min(3, "Please enter your address")
          .max(50, "Too Long!")
          .required("Required"),
          Addressline2: yup
          .string()
          .trim()
          .min(3, "Please enter your address")
          .max(50, "Too Long!"),
          // .required("Required"),
          Pincode: yup
          .string()
          .max(6, "Please enter valid pincode")
          .matches(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]{6,6})+$/i,
            "Please enter valid pincode"
          )
          .required("Required"),
          City: yup
          .string()
          .trim()
          .min(2, "Please enter city name")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          State: yup
          .string()
          .trim()
          .min(2, "Please enter state name")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          Country: yup
          .string()
          .trim()
          .min(2, "Please enter country name")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          Age: yup
          .number()
          // .string()
          .min(1, "You must be at least 1 year")
          .max(120, "You must be at most 120 years")
          // .matches( /^[0-9]*$/, "Please enter characters only")
          .required("Required"),
          height: yup
          .number(),
          // .string()
          // .min(1, "You must be at least 1 year")
          // .max(120, "You must be at most 120 years")
          // .matches( /^[0-9]*$/, "Please enter characters only")
          // .required("Required"),
          weight: yup
          .number(),
          // .string()
          // .min(1, "You must be at least 1 year")
          // .max(120, "You must be at most 120 years")
          // .matches( /^[0-9]*$/, "Please enter characters only")
          // .required("Required"),
      
          Gender: yup
          .string()
          .required("Required"),
          Role: yup
          .string()
          .required("Required"),
          Bloodgroup: yup
          .string(),
          // .required("Required"),
          username: yup
          .string()
          .trim()
          .min(2, "Please enter Your UserName")
          .max(50, "Too Long!")
          .matches(/^[a-zA-Z ]{2,50}$/, "Please enter characters only")
          .required("Required"),
          password: yup
          .string('Enter your password')
          .min(8, 'minimum 8 characters length')
          .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Please set the strong password")
          .required('Password is required'),
      });
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
      <Card className="cardSize">
          <h1 style={{ color: "midnightblue",alignItems:"center" }}>Register Form</h1>


        <form onSubmit={formik.handleSubmit}>
          <div>
            
            <Stack direction="row" spacing={8} className="stackFields">
              <div style={{'color':'white'}}>
                <TextField 
                  id="outlined-basic"
                  name="Firstname"
                  maxLength="5"
                  variant="outlined"
                  label={ <span >{"FirstName"}<StarIcon className="icon" /></span>}
                  value={formik.values.Firstname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.Firstname && Boolean(formik.errors.Firstname)
                  }
                  helperText={
                    formik.touched.Firstname && formik.errors.Firstname
                  }
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  name="Middlename"
                  label="MiddleName"
                  variant="outlined"

                  value={formik.values.Middlename}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.Middlename && Boolean(formik.errors.Middlename)
                  }
                  helperText={formik.touched.Middlename && formik.errors.Middlename}
                />
              </div>
              <div>
            <TextField
                  id="outlined-basic"
                  name="LastName"
                  variant="outlined"

                  label={ <span >{"LastName"}<StarIcon className="icon" /></span>}
                  value={formik.values.LastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.LastName && Boolean(formik.errors.LastName)
                  }
                  helperText={formik.touched.LastName && formik.errors.LastName}
                />
            </div>
            <div>
            <TextField
                id="outlined-basic"
                name="Email"
                variant="outlined"

                label=
                // { <span >{"Email"}<StarIcon className="icon" /></span>}
                "Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                error={formik.touched.Email && Boolean(formik.errors.Email)}
                helperText={formik.touched.Email && formik.errors.Email}
              />
           </div>
            </Stack>
          </div>
          <br />

          <Stack direction="row" spacing={8} className="stackFields">
           <div>
            <TextField
                name="PhoneNumber"
                variant="outlined"

                label={ <span >{"PhnNo"}<StarIcon className="icon" /></span>}
                value={formik.values.PhoneNumber}
                onChange={formik.handleChange}
                error={formik.touched.PhoneNumber && Boolean(formik.errors.PhoneNumber)}
                helperText={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
              />
            </div>
            <div>
              <TextField
                name="AlternativeNumber"
                label="Alternative PhnNo"
                variant="outlined"

                value={formik.values.AlternativeNumber}
                onChange={formik.handleChange}
                error={formik.touched.AlternativeNumber && Boolean(formik.errors.AlternativeNumber)}
                helperText={formik.touched.AlternativeNumber && formik.errors.AlternativeNumber}
              />
            </div>
            <div>
              <TextField
                name="Age"
                variant="outlined"

                label=
                // { <span >{"Age"}<StarIcon className="icon" /></span>}
                "Age"
                value={formik.values.Age}
                onChange={formik.handleChange}
                error={formik.touched.Age && Boolean(formik.errors.Age)}
                helperText={formik.touched.Age && formik.errors.Age}
              />
            </div>
            <div style={{ marginTop: "-1.5%" }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-standard-label">
                {/* { <span >{"Gender"}<StarIcon className="icon" /></span>} */}
                Gender
                </InputLabel>
                <Select
                  name="Gender"
                  variant="outlined"

                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  label="Gender"
                    // onChange={formik.handleChange}
                  error={formik.touched.Gender && Boolean(formik.errors.Gender)}
                  helperText={formik.touched.Gender && formik.errors.Gender}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Stack>
          <br />


          <Stack direction="row" spacing={8} className="stackFields">
          <div>
              <TextField
                name="height"
                label="Height"
                variant="outlined"

                value={formik.values.height}
                onChange={formik.handleChange}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && formik.errors.height}
              />
            </div>
            <div>
              <TextField
                name="weight"
                label="Weight"
                variant="outlined"

                value={formik.values.weight}
                onChange={formik.handleChange}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </div>
            <div>
         <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{'color':'black'}}>Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="Role"
        variant="outlined"

                  value={formik.values.Role}
                  onChange={formik.handleChange}
                  label="Role"
                error={formik.touched.Role && Boolean(formik.errors.Role)}
                helperText={formik.touched.Role && formik.errors.Role}
      >
        <FormControlLabel value="doctor" control={<Radio size="small"/>} label="Doctor" />
        <FormControlLabel value="patient" control={<Radio size="small"/>} label="Patient" />
      </RadioGroup>
    </FormControl>
    </div>
            <div style={{ marginTop: "-1.5%" }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Blood Group
                </InputLabel>
                <Select
                  name="Bloodgroup"
                  variant="outlined"

                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={formik.values.Bloodgroup}
                  onChange={formik.handleChange}
                  label="Gender"
                    // onChange={formik.handleChange}
                  error={formik.touched.Bloodgroup && Boolean(formik.errors.Bloodgroup)}
                  helperText={formik.touched.Bloodgroup && formik.errors.Bloodgroup}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"A+"}>A+</MenuItem>
                  <MenuItem value={"A-"}>A-</MenuItem>
                  <MenuItem value={"B+"}>B+</MenuItem>
                  <MenuItem value={"B-"}>B-</MenuItem>
                  <MenuItem value={"o+"}>o+</MenuItem>
                  <MenuItem value={"o-"}>o-</MenuItem>
                  <MenuItem value={"AB+"}>AB+</MenuItem>
                  <MenuItem value={"AB-"}>AB-</MenuItem>

                </Select>
              </FormControl>
            </div>
          </Stack>
          <br />


          <Stack direction="row" spacing={8} className="stackFields">
          <div>
              <TextField
                name="username"
                variant="outlined"

                label=
                // { <span >{"UserName"}<StarIcon className="icon" /></span>}
                "UserName"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </div>

          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "78ch" },
              }}
              autoComplete="off"
            >
              <TextField
                name="Addressline1"
                id="outlined-multiline-static"
                variant="outlined"
                label=
                // { <span >{"Address-1"}<StarIcon className="icon" /></span>}
                "Address-1"
                multiline
                rows={1}
                value={formik.values.Addressline1}
                onChange={formik.handleChange}
                error={formik.touched.Addressline1 && Boolean(formik.errors.Addressline1)}
                helperText={formik.touched.Addressline1 && formik.errors.Addressline1}
              />
            </Box>
          </div>
          </Stack>


          <Stack direction="row" spacing={8} className="stackFields">
          <div>
              <TextField
                name="password"
                variant="outlined"
                label=
                // { <span >{"Password"}<StarIcon className="icon" /></span>}
                "Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "78ch" },
              }}
              autoComplete="off"
            >
              <TextField
                name="Addressline2"
                id="outlined-multiline-static"
                variant="outlined"
                label="Address-2"
                multiline
                rows={1}
                value={formik.values.Addressline2}
                onChange={formik.handleChange}
                error={formik.touched.Addressline2 && Boolean(formik.errors.Addressline2)}
                helperText={formik.touched.Addressline2 && formik.errors.Addressline2}
              />
            </Box>
          </div>

          </Stack>
          <br />



          <Stack direction="row" spacing={8} className="stackFields">
            <div>
            <TextField
                name="City"
                variant="outlined"
                label=
                // { <span >{"City"}<StarIcon className="icon" /></span>}
                "City"
                value={formik.values.City}
                onChange={formik.handleChange}
                error={formik.touched.City && Boolean(formik.errors.City)}
                helperText={formik.touched.City && formik.errors.City}
              />
            </div>
            <div>
              <TextField
                name="State"
                variant="outlined"
                label=
                // { <span >{"State"}<StarIcon className="icon" /></span>}
                "State"
                value={formik.values.State}
                onChange={formik.handleChange}
                error={formik.touched.State && Boolean(formik.errors.State)}
                helperText={formik.touched.State && formik.errors.State}
              />
              </div>
              <div>
              <TextField
                name="Country"
                variant="outlined"
                label=
                // { <span >{"Country"}<StarIcon className="icon" /></span>}
                "Country"
                value={formik.values.Country}
                onChange={formik.handleChange}
                error={formik.touched.Country && Boolean(formik.errors.Country)}
                helperText={formik.touched.Country && formik.errors.Country}
              />
            </div>
            <div>
              <TextField
                name="Pincode"
                variant="outlined"
                label=
                // { <span >{"Pincode"}<StarIcon className="icon" /></span>}
                "Pincode"
                value={formik.values.Pincode}
                onChange={formik.handleChange}
                error={formik.touched.Pincode && Boolean(formik.errors.Pincode)}
                helperText={formik.touched.Pincode && formik.errors.Pincode}
              />
            </div>
          </Stack>
          <br />




          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </form>
      </Card>
      </AccordionDetails>
      </Accordion>
    </div>
  )
}
