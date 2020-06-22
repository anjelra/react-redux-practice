import { createAction, handleActions } from "redux-actions";

// 하단은 action 을 정의한 것임.
// 액션 타입을 정의해 준다.
const INCREMENT = 'couter/INCREMENT';
const DECREMENT = 'couter/DECREMENT';

// 액션 생성 함수를 만든다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내 주어야 한다.
// case1 : 액션 생성 함수를 직접 만든다.
// export const increment = () => ({
//     type: INCREMENT
// });

// export const decrement = () => ({
//     type: DECREMENT
// });

// case2: redux-actions의 createAction이라는 함수를 사용하면 액션 생성 함수 코드를 만들 수 있다.
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

// 리듀서를 만들어서 내보내줍니다.
// case1: handleActions를 이용하지 않고 리듀서를 만들어서 보내는 방법.
// export default function reducer(state = initialState, action) {
//     // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
//     // state = initialState 이렇게 하면 initialState가 기본 값으로 셋팅됩니다.
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 number: state.number + 1
//             };

//         case DECREMENT:
//             return {
//                 number: state.number - 1
//             };
            
//         default:
//             return state;       // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
//     }
// }

// case2: handleActions를 사용해서 리듀서를 만들어보기.
// handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.

// 하단은 reducer를 정의한 것임.
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있음.
    // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시킬 수 있음.
    [DECREMENT]: ({number}) => ({
        number: number - 1
    })
}, initialState);   // initialState는 초기화값.