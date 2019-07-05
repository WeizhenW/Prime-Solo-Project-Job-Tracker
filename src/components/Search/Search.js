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
import Button from '@material-ui/core/Button';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
    paper: {
        width: '80%',
        margin: '10px auto',
        padding: '100px',
        paddingTop: '20px',
    },
    title: {
        textAlign: 'center',
        color: '#F7882F',
        fontSize: '28px'
    },
    announce: {
        color: '#F7882F',
    }
}

class SearchJob extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FOLLOW_UP_LIST' });
        this.props.dispatch({
            type: 'FETCH_ALL_STATUS',
        });
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
    handleChange = (job) => (event) => {
        this.props.dispatch({
            type: 'UPDATE_JOB_STATUS',
            payload: {
                status_id: event.target.value,
                job_id: job.id,
            },
        })
    }

    //function to update status date
    

    //function to update follow up mode
    handleChangeFollowUp = (job) => (event) => {
        this.props.dispatch({
            type: 'UPDATE_FOLLOW_UP_MODE',
            payload: {
                job_id: job.id,
                follow_up: event.target.checked,
            }
        })
    }
    

    

    render() {
        return (

            <div>
                <Paper style={styles.paper}>
                    {this.props.reduxState.followup.followUpReducer.length ?
                        <>
                            <div style={styles.title}>
                                <h2>Your Task List</h2>
                            </div>
                            <pre>
                                {/* {JSON.stringify(this.props.reduxState.jobList.appliedJobsListReducer, null, 2)} */}
                            </pre>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={styles.tableHeader} >Job Title</TableCell>
                                        <TableCell style={styles.tableHeader}>company</TableCell>
                                        {/* <TableCell style={styles.tableHeader}>Post URL</TableCell> */}
                                        <TableCell style={styles.tableHeader}>Status</TableCell>
                                        <TableCell style={styles.tableHeader}>Follow Up Done</TableCell>
                                        <TableCell style={styles.tableHeader}>Follow Up Mode</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.reduxState.followup.followUpReducer.map(job => <TableRow key={job.id}>
                                        <TableCell style={styles.jobTitle}><Link to={`/job-list/detail/${job.id}`} >{job.title}</Link></TableCell>
                                        <TableCell style={styles.tableBody}>{job.company}</TableCell>
                                        {/* <TableCell style={styles.tableBody}>{job.post_url}</TableCell> */}
                                        <TableCell style={styles.tableBody}>
                                            <Select
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

                                        </TableCell>
                                        <TableCell style={styles.tableBody}>
                                            <Button onClick={() => this.handleFollowUp(job)} variant="contained">Done</Button>
                                        </TableCell>
                                        <TableCell style={styles.tableBody}>
                                            <FormGroup row>
                                                <FormControlLabel
                                                    control={
                                                        <Switch checked={job.follow_up} onChange={this.handleChangeFollowUp(job)} value="follow_up" />
                                                    }
                                                    label="Follow Up"
                                                />
                                            </FormGroup>
                                        </TableCell>

                                    </TableRow>)}
                                </TableBody>
                            </Table>
                        </>
                        :
                        <div>
                            <h3 style={styles.announce}>Your task list is empty - why not applying for more job!</h3>
                            <Link to='/new-job'><Button>Go to Add New Jobs</Button></Link>
                            <Link to='/job-list'><Button>Look at My Job List</Button></Link>
                        </div>
                    }
                </Paper>
            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(SearchJob);