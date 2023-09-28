// 액션 타입 상수들을 정의합니다. 이러한 상수들은 액션 객체를 생성할 때 사용됩니다.
const CREATE_TODO = 'todo/CREATE_TODO'; // 할일 추가 액션 타입
const DELETE_TODO = 'todo/DELETE_TODO'; // 할일 삭제 액션 타입
const UPDATE_TODO = 'todo/UPDATE_TODO'; // 할일 업데이트 액션 타입
const READ_TODO = 'todo/READ_TODO'; // 할일 조회 액션 타입

// 할일을 생성하는 액션 생성자 함수
export const createTodos = (payload) => {
  return { type: CREATE_TODO, payload };
};

// 할일을 삭제하는 액션 생성자 함수
export const deleteTodos = (payload) => {
  return { type: DELETE_TODO, payload };
};

// 할일을 업데이트하는 액션 생성자 함수
export const updateTodos = (payload) => {
  return { type: UPDATE_TODO, payload };
};

// 할일을 조회하는 액션 생성자 함수
export const readTodos = (payload) => {
  return { type: READ_TODO, payload };
};

const initialState = [
  {
    id: 1,
    title: '리액트',
    detail: '리액트를 배워봅시다',
    isDone: false,
  },
];

// 할일 관련 액션을 처리하는 리듀서 함수입니다.
const todo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      // 새로운 할일을 추가하고 현재 상태 배열에 복사하여 반환합니다.
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          detail: action.payload.body,
          isDone: action.payload.isDone,
        },
      ];
    case DELETE_TODO:
      // 할일을 삭제하고 액션에서 받은 배열을 반환합니다.
      return [...action.payload];
    case UPDATE_TODO:
      // 할일을 업데이트하고 액션에서 받은 배열을 반환합니다.
      return [...action.payload];
    default:
      // 액션 타입에 맞지 않는 경우 현재 상태를 그대로 반환합니다.
      return state;
  }
};

export default todo;
