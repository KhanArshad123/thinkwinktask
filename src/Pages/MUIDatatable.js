import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { useDispatch } from 'react-redux';
import { deleteUsr } from '../Action/Action';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function MUIDatatable(props) {
  const coloumn = props.header;
  const [rows,setRows] = React.useState(props.data);
  const dispatch=useDispatch();
  const [selected, setSelected] = React.useState(props.selected);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [order,setOrder]=React.useState("ASC");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rowSelect = (e, rowIndex) => {
    // alert(rowIndex);
    const index = page * rowsPerPage + rowIndex;
    props.selectedRow(index);
   
  };
  
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(()=>
  {
setRows(props.data)
  },[props.data])
  const sorting=(col)=>
  {
    
if(order==="ASC")
{
  const sorted=[...rows].sort((a,b)=>
  
    a[col].toLowerCase()>b[col].toLowerCase()?1:-1
  );
  setRows(sorted);
  setOrder("DSC");
}
else if(order==="DSC")
{
  const sorted=[...rows].sort((a,b)=>
  
    a[col].toLowerCase()<b[col].toLowerCase()?1:-1
  );
  setRows(sorted);
  setOrder("ASC");
}
  }
  const handleDelete=(e,index)=>
  {dispatch(deleteUsr(index));
    


  }

  return (
    // <Paper className={classes.root}>
    <div>
      {
          props.data.length>0?
          <div><TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell >Action</TableCell>
                <TableCell onClick={()=>{sorting('fname')}}>First Name</TableCell>
                <TableCell onClick={()=>{sorting('lname')}}>Last Name</TableCell>
                <TableCell onClick={()=>{sorting('email')}}>Email</TableCell>
                <TableCell onClick={()=>{sorting('contact')}}>Contact</TableCell>
                <TableCell onClick={()=>{sorting('city')}}>City</TableCell>
                <TableCell onClick={()=>{sorting('pin')}}>Pin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, j) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={
                        props.notClickable ? () => {} : (e)=>rowSelect(e,j)
                      }
                    >
                      <TableCell>
                        
                      <button onClick={(e)=>handleDelete(e,j)}>Delete</button>
                      </TableCell>
                      {coloumn.map((column) => {
                        return (
                          <TableCell>
                            {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                            {column === "avatar_url" ? (
                              <img
                                src={row[column]}
                                width={"100px"}
                                height={"100px"}
                              />
                            ) : (
                              row[column]
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ 1, 20, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
              </div>:<div>No Data to show.....</div>
      }
    </div>
  );
}
