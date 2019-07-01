import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//generator to get all new jobs
function* fetchNewJobsList() {
    const allNewJobs = yield axios.get('/api/job/toapply');
    yield put({
        type: 'SET_NEW_JOBS_LIST',
        payload: allNewJobs.data,
    })
}

//generator to get all applied jobs
function* fetchAppliedJobsList() {
    const allAppliedJobs = yield axios.get('/api/job/applied');
    yield put({
        type: 'SET_APPLIED_JOBS_LIST',
        payload: allAppliedJobs.data,
    })
}

//generator to delete one job
function* deleteJob(action) {
    yield axios.delete(`/api/job/delete/${action.payload.id}`);
    if(action.payload.status_id === 1) {
        yield put({type: 'FETCH_NEW_JOBS_LIST'});
    } else {
        yield put({type: 'FETCH_APPLIED_JOBS_LIST'});
    }
}




function* jobListSaga() {
    yield takeEvery('FETCH_NEW_JOBS_LIST', fetchNewJobsList);
    yield takeEvery('DELETE_JOB', deleteJob);
    yield takeEvery('FETCH_APPLIED_JOBS_LIST', fetchAppliedJobsList);

  }
  
  export default jobListSaga;