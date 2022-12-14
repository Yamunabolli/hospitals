import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DoctorList() {
    function createData(Doctor,specification) {
        return { Doctor,specification };
      }
const rows = [
    createData(' yamuna', "Neurologist"),
    createData('mani', "ENT"),
    createData('Nagarjuna',"Cardialogist")

  ];
  return (
    <div>
         <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Doctor</TableCell>
          <TableCell >specification</TableCell>
     
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.Doctor}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.Doctor}
            </TableCell>
            <TableCell >{row.specification}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

