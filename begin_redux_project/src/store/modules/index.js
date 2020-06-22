import { combineReducers } from "redux";
import counter from './counter';

// combineReducer로 리듀서 합치기
// 지금은 reducer가 하나밖에 없지만, 앞으로 여러개를 만든다면 한 프로젝트에 여러개의 리듀서가 존재하게 됩니다.
// 여러개의 리듀서가 있을 때에는, redux의 함수 combineReducers를 사용하여 하나의 리듀서로 합쳐줄 수 있습니다.
// 이렇게 합쳐진 리듀서는 '루트 리듀서'라고 부릅니다.
export default combineReducers({
    counter
});