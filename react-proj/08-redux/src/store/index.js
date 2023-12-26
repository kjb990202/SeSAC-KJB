// import { combineReducers } from 'redux';
// import counterReducer from './counterReducer';
// import isDataReducer from './isDataReducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   isData: isDataReducer,
// });

// export default rootReducer;
// /src/store/index.js 파일

// 실습
import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

const rootReducer = combineReducers({
  money: bankReducer,
});

export default rootReducer;
