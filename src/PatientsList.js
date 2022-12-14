import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Outlet, useNavigate} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

  

function PatientsList() {

  const navigate = useNavigate();

  const editHandler=()=>{
    navigate('patientDetails')
  }

  
  const [data, setData] = useState([]);
  const getData=()=>{
    axios
        .get("http://172.17.12.65:3000/getlistofpatients")
        .then((response) => setData(response.data));   
  }
  
  useEffect(() => {
      getData();
  }, []);

//   useEffect(() => {

//   const deleteHandler=(sno)=>{
//     axios
//     .delete("http://172.17.12.65:3000/delpatient/sno" +sno)
//     .then((response) => {
//       console.log(response);
//     })
// };

// deleteHandler();
// }, []);




  return (
    <>
    <div>
       <Stack direction="row" spacing={3} >
 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Patient name" variant="outlined" />
      <TextField id="outlined-basic" label="Token number" variant="outlined" />
    </Box>
      <Button variant="contained" color="primary" style={{'width':'20ch', 'height':'7ch','marginTop':'8px'}}>
        search
      </Button>
      <Button variant="contained" color="primary" style={{'width':'20ch', 'height':'7ch','marginTop':'8px'}}>
        Reset
      </Button>
      </Stack>
    </div>


    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sno</StyledTableCell>
            <StyledTableCell align="center">Patient Name</StyledTableCell>
            <StyledTableCell align="center">Phone numbe</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Appointment Date&Time</StyledTableCell>
            <StyledTableCell align="center">Patient Problem</StyledTableCell>
            <StyledTableCell align="center" >Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,sno) => (
          <StyledTableRow key={row.sno}>
          <StyledTableCell component="th" scope="row">
          {row.sno}
          </StyledTableCell>       
              <StyledTableCell align="center">{row.patientname}</StyledTableCell>
              <StyledTableCell align="center">{row.phonenumber}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">{row.appointment}</StyledTableCell>
              <StyledTableCell align="center">{row.patientproblem}</StyledTableCell>
              <StyledTableCell align="center">
              <Button variant="contained" color="primary"  onClick={editHandler}><CreateIcon/></Button>
                </StyledTableCell>
                <StyledTableCell align="center">
              <Button variant="contained" color="primary" ><DeleteIcon/></Button>
                </StyledTableCell>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Outlet/>
    </>
  )
}

export default PatientsList