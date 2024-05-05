import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  makeStyles,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#1E90FF", // Light blue background color
    color: "#FFFFFF", // White text color
    padding: theme.spacing(2),
    margin: 0,
  },
  tableContainer: {
    backgroundColor: "#e0e0e0",
    padding: theme.spacing(2),
    marginTop: theme.spacing(0),
    marginBottom: 0,
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    border: "1px solid #dddddd",
    padding: theme.spacing(1),
    textAlign: "center",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  actionButton: {
    marginRight: theme.spacing(1), // Add right margin between buttons
  },
}));

const mockEmployees = [
  { id: 1, name: "John Doe", email: "john@example.com", jobPosition: "Software Engineer", division: "IT" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", jobPosition: "HR Manager", division: "HR" },
  // Add more mock employees as needed
];

const EmployeeData = () => {
  const classes = useStyles();

  const handleEditEmployee = (id) => {
    console.log(`Edit employee with ID ${id}`);
  };

  const handleDeleteEmployee = (id) => {
    console.log(`Delete employee with ID ${id}`);
    // Add logic to delete employee
  };

  const handleMakeAdministrator = (id) => {
    console.log(`Make employee with ID ${id} as an administrator`);
    // Add logic to make employee an administrator
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Employee Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>ID</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Name</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Email</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Job Position</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Division</TableCell> {/* Changed column name */}
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEmployees.map(employee => (
              <TableRow key={employee.id}>
                <TableCell className={classes.tableCell}>{employee.id}</TableCell>
                <TableCell className={classes.tableCell}>{employee.name}</TableCell>
                <TableCell className={classes.tableCell}>{employee.email}</TableCell>
                <TableCell className={classes.tableCell}>{employee.jobPosition}</TableCell>
                <TableCell className={classes.tableCell}>{employee.division}</TableCell> {/* Render division instead of contact number */}
                <TableCell className={classes.tableCell}>
                  <Button variant="contained" color="primary" className={classes.actionButton} onClick={() => handleEditEmployee(employee.id)}>Edit</Button>
                  <Button variant="contained" color="secondary" className={classes.actionButton} onClick={() => handleDeleteEmployee(employee.id)}>Delete</Button>
                  <Button variant="contained" color="default" className={classes.actionButton} onClick={() => handleMakeAdministrator(employee.id)}>Make Admin</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default EmployeeData;