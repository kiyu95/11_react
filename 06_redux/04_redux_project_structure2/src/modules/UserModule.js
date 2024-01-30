import { createActions, handleActions } from "redux-actions";

const initialState = {};

export const LOGIN = "user/LOGIN";
export const RESET_LOGIN_USER = "user/RESET_LOGIN_USER";

// createActions를 사용하여 LOGIN, RESET_LOGIN_USER 두 개의 액션 생성자를 만듦
export const {user : {login, resetloginUser}} = createActions({ // 액션 생성자를 사용하여 user 객체를 생성하고, 그 안에 login, resetloginUser 액션 생성자를 할당
    [LOGIN] : (res) => ({res}),
    [RESET_LOGIN_USER] : (res = initialState) => ({res})
});

const userReducer = handleActions({ // handelActions를 사용하여 리듀서를 정의 (리듀서는 이전 상태의 액션을 받아 새로운 상태를 반환하는 함수)
    [LOGIN] : (state, {payload : {res}} ) => { // payload 의 res 데이터를 가져옴
        if(res){
            localStorage.setItem("isLogin", true); // 로그인 성공 시, localStorage에 isLogin을 true로 설정
        }else{
            res = {message : "LOGIN_FAIL"}; // 로그인 실패 시, res 객체에 message 할당
        }

        return res;
    },
    [RESET_LOGIN_USER] : (state, {payload:{res}}) => { // 주어진 res 객체로 상태를 업데이트
        return res;
    }
}, initialState); // initialState는 리듀서가 초기 사앹를 설정하는데 사용. 리듀서의 첫 번째 매개변수로 state가 호출될 떄 이 값이 사용됨

export default userReducer;