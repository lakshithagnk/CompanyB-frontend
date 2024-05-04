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
}));

const mockApplicants = [
  { id: 1, name: "Applicant 1", email: "applicant1@example.com", positionApplied: "Software Developer", division: "IT" },
  { id: 2, name: "Applicant 2", email: "applicant2@example.com", positionApplied: "HR Manager", division: "HR" },
  // Add more mock applicants as needed
];

const ApplicatData = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Applicant Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>ID</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Name</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Email</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Position Applied</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Division</TableCell> {/* New Division column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockApplicants.map(applicant => (
              <TableRow key={applicant.id}>
                <TableCell className={classes.tableCell}>{applicant.id}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.name}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.email}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.positionApplied}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.division}</TableCell> {/* Render division */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default ApplicatData;
