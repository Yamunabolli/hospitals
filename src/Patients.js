import { Button, Card, Input } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function Patients() {
const[data,setdata]=React.useState([]);
const nav = useNavigate()

 
const getdata=()=>
{
axios.get(' http://172.17.12.65:3000/listofusers')
        .then(response => setdata(response.data))
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        })
      }
      React.useEffect(() => {
        getdata()
      },[])

const handleedit=(row)=>{
  nav("/Register", { state: { row } })
}

const handledelete=(row)=>{
  console.log(row.patientId);
  var a = axios.delete(`http://172.17.12.65:3000/deleteuser/${row.patientId}`)
  .then(res => console.log(res))
  getdata(a)
}

      
  return (
    <div>
      <h3> There are {data.length}  posts in this database </h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        {/* <div className=''> */}
        <TableHead>
          <TableRow >
          {/* <TableCell >delete</TableCell> */}

            <TableCell >FirstName</TableCell>
            <TableCell >Middlename</TableCell>
            <TableCell >LastName</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >PhoneNumber</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Role</TableCell>
            <TableCell >CreatedBy</TableCell>
            <TableCell >username</TableCell>
            <TableCell >password</TableCell>
            <TableCell >CreatedDate</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >Addressline1</TableCell>
            <TableCell >Addressline2</TableCell>
            <TableCell >State</TableCell>
            <TableCell >Pincode</TableCell>
            <TableCell >AlternativeNumber</TableCell>
            <TableCell >City</TableCell>
            <TableCell >Country</TableCell>
            <TableCell >patientId</TableCell>
            <TableCell >Bloodgroup</TableCell>
         

          </TableRow>
        </TableHead>
        {/* </div> */}
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {/* <TableCell ><Button onClick={()=>handledelete(row)}>delete</Button></TableCell> */}

                           <TableCell >{row.Firstname}</TableCell>

              <TableCell >{row.Middlename}</TableCell>

              <TableCell >{row.LastName}</TableCell>
              <TableCell >{row.Email}</TableCell>
              <TableCell >{row.PhoneNumber}</TableCell>
              <TableCell >{row.Age}</TableCell>
              <TableCell >{row.Role}</TableCell>
              <TableCell >{row.CreatedBy}</TableCell>
              <TableCell >{row.username}</TableCell>
              <TableCell >{row.password}</TableCell>
              <TableCell >{row.CreatedDate}</TableCell>
              <TableCell >{row.Gender}</TableCell>
              <TableCell >{row.Addressline1}</TableCell>
              <TableCell >{row.Addressline2}</TableCell>
              <TableCell >{row.State}</TableCell>
              <TableCell >{row.Pincode}</TableCell>
              <TableCell >{row.AlternativeNumber}</TableCell>
              <TableCell >{row.City}</TableCell>
              <TableCell >{row.Country}</TableCell>
              <TableCell >{row.patientId}</TableCell>
              <TableCell >{row.Bloodgroup}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
