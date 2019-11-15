import { put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* initialSaga() {
  yield put({ type: 'HOME_PAGE' })
}

function* aboutPageAsync() {
  yield delay(1000)
  yield put({ type: 'ABOUT_PAGE_UPDATE', payload:{ title:'About Page ::::', data: {name:'c', age:30}}})
  yield delay(1000)
  yield put({ type: 'ABOUT_PAGE_UPDATE', payload:{ title:'About Page ::::', data: {name:'c', age:30}}})
  yield delay(1000)
  yield put({ type: 'ABOUT_PAGE_UPDATE', payload:{ title:'About Page ::::', data: {name:'c', age:30}}})
}

function* watchAboutPageEvent() {
  yield takeEvery('ABOUT_PAGE', aboutPageAsync)
}

export default function* rootSaga() {
  yield all([
    initialSaga(),
    watchAboutPageEvent()
  ])
}