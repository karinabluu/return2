import { createStore } from 'redux'; // Redux 스토어를 생성하는 createStore 함수를 불러옵니다.
import { combineReducers } from 'redux'; // 여러 개의 리듀서를 합치기 위한 combineReducers 함수를 불러옵니다.
import todo from '../modules/todo'; // 'todo' 모듈을 가져옵니다. (상대 경로를 사용하고 있는 것으로 보입니다.)

// combineReducers 함수를 사용하여 여러 개의 리듀서를 합치는 작업을 수행합니다.
const rootReducer = combineReducers({ todo });

// createStore 함수를 사용하여 스토어를 생성하고, 합쳐진 리듀서를 전달합니다.
const store = createStore(rootReducer);

export default store; // 생성된 스토어를 내보냅니다.

// createStore 함수를 사용하여 Redux 스토어를 생성합니다.
// combineReducers 함수를 사용하여 다수의 리듀서를 하나의 루트 리듀서로 결합합니다.
// store 변수에 createStore 함수를 사용하여 스토어를 생성하고, 루트 리듀서를 전달합니다.
// 마지막으로 store를 내보냄으로써 다른 파일에서 이 스토어를 사용할 수 있도록 합니다.
// 이 코드는 Redux 스토어를 구성하고 사용할 수 있는 준비가 완료된 것으로,
// 앱에서 상태(state) 관리 및 데이터 흐름을 처리하기 위해 Redux를 사용할 때 필요한 기본 구조를 제공합니다.
