import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = {
    tableHeader: {
        fontSize: '16px',
        backgroundColor: 'black',
        color: 'white',
    },
    tableBody: {
        fontSize: '14px',
    },
    jobTitle: {
        fontSize: '14px',
    },
    button: {
        fontSize: '10px',
    },
}

class FollowUp extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FOLLOW_UP_LIST' });
        //fetch full list of status
        // this.props.dispatch({
        //     type: 'FETCH_ALL_STATUS',
        // });
    }
    //function to move jobs to applied list
    // handleMove = (job) => {
    //     this.props.dispatch({
    //         type: 'UPDATE_JOB_STATUS',
    //         payload: {
    //             job_id: job.id,
    //             status_id: 1,
    //         },
    //     })
    // }
    //get input and dispatch the update action immediately
    // handleChange = (job) => (event) => {
    //     this.props.dispatch({
    //         type: 'UPDATE_JOB_STATUS',
    //         payload: {
    //             status_id: event.target.value,
    //             job_id: job.id
    //         },
    //     })
    // }

    //function to delete job
    // handleDelete = (job) => {
    //     this.props.dispatch({
    //         type: 'DELETE_JOB',
    //         payload: job,
    //     })
    // }

    //function to get job details for one job
    handleGetDetail = (job) => {
        this.props.history.push(`/job-list/detail/${job.id}`);
    }

    render() {
        return (

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        this is the side
                        <br />
                        i don't know what to put
                        <br />
                        i am stuck with styling
                        </Grid>
                    <Grid item xs={12} sm={9}>
                        <Paper style={styles.paper}>
                            <h2>List of jobs to apply</h2>
                            <pre>
                                {/* {JSON.stringify(this.props.reduxState.jobList.appliedJobsListReducer, null, 2)} */}
                            </pre>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={styles.tableHeader} >Job Title</TableCell>
                                        <TableCell style={styles.tableHeader}>company</TableCell>
                                        {/* <TableCell style={styles.tableHeader}>Post URL</TableCell> */}
                                        {/* <TableCell style={styles.tableHeader}>Status</TableCell> */}
                                        {/* <TableCell style={styles.tableHeader}>Delete Job</TableCell> */}
                                        {/* <TableCell style={styles.tableHeader}>See Detail</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.reduxState.followup.followUpReducer.map(job => <TableRow key={job.id}>
                                        <TableCell style={styles.jobTitle}><Link to={`/job-list/detail/${job.id}`} >{job.title}</Link></TableCell>
                                        <TableCell style={styles.tableBody}>{job.company}</TableCell>
                                        {/* <TableCell style={styles.tableBody}>{job.post_url}</TableCell> */}
                                        {/* <TableCell style={styles.tableBody}> */}
                                        {/* <Select
                                    variant="outlined"
                                    id="status"
                                    name="status"
                                    displayEmpty
                                    value={job.status_id}
                                    onChange={this.handleChange(job)}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {this.props.status.map(status => <MenuItem key={status.id} value={status.id}>{status.status_name}</MenuItem>)}
                                </Select>               

                            </TableCell> */}

                                    </TableRow>)}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState,
    status: reduxState.status
})
export default connect(mapReduxStateToProps)(FollowUp);