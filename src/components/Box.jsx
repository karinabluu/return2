import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Redux 관련 함수 및 훅을 불러옵니다.
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅을 불러옵니다.
import todo, { deleteTodos, updateTodos } from '../modules/todo'; // todo 모듈과 액션 생성자 함수를 불러옵니다.
import styled from 'styled-components'; // styled-components를 사용하여 CSS 스타일링을 합니다.
// import Detail from '../pages/Detail';

export default function Box({ id, item, title, detail, isDone }) {
  const dispatch = useDispatch(); // useDispatch 훅을 사용해 Redux 액션을 디스패치(dispatch)할 수 있는 함수를 가져옵니다.
  const navigate = useNavigate(); // React Router의 네비게이션 함수를 가져옵니다.

  // 할 일 삭제 함수
  const deleteTodo = (id) => {
    const deleteData = data.filter((item) => item.id !== id); // 선택한 할 일(id)을 제외한 데이터를 생성합니다.
    dispatch(deleteTodos(deleteData)); // deleteTodos 액션을 디스패치하여 Redux 스토어의 데이터를 업데이트합니다.
  };

  // 할 일 완료 처리 함수
  const updateTodo = (id) => {
    const updateData = data.map((item) => {
      if (id === item.id) return { ...item, isDone: true }; // 선택한 할 일(id)을 완료 상태로 업데이트합니다.
      return item;
    });
    dispatch(updateTodos(updateData)); // updateTodos 액션을 디스패치하여 Redux 스토어의 데이터를 업데이트합니다.
  };

  // 할 일 취소 처리 함수
  const cancelTodo = (id) => {
    const cancelData = data.map((item) => {
      if (id === item.id) return { ...item, isDone: false }; // 선택한 할 일(id)의 완료 상태를 취소합니다.
      return item;
    });
    dispatch(updateTodos(cancelData)); // updateTodos 액션을 디스패치하여 Redux 스토어의 데이터를 업데이트합니다.
  };

  // Redux 스토어에서 할 일 데이터를 가져옵니다.
  const data = useSelector((state) => {
    return state.todo;
  });

  return (
    <div>
      <Todo key={id}>
        <DetailBtn onClick={() => navigate(`/detail/${id}`)}>
          상세보기
        </DetailBtn>

        <h3>{title}</h3>
        <Contents>{detail}</Contents>

        <BtnLayout>
          <Btn onClick={() => deleteTodo(id)} color="red">
            삭제하기
          </Btn>
          {isDone === false ? (
            <Btn onClick={() => updateTodo(id)} color="green">
              완료!
            </Btn>
          ) : (
            <Btn onClick={() => cancelTodo(id)} color="green">
              취소!
            </Btn>
          )}
        </BtnLayout>
      </Todo>
    </div>
  );
}

const Todo = styled.div`
  width: 270px;
  height: 190px;
  border: 4px solid teal;
  border-radius: 12px;
  font-size: 20px;
  padding: 12px 24px 24px;
  display: flex;
  flex-direction: column;
`;

const DetailBtn = styled.button`
  all: unset;
  font-size: 15px;
  font-weight: normal;
  cursor: pointer;
  color: #551a8b;
`;

const Contents = styled.div`
  font-size: 15px;
  font-weight: normal;
`;

const BtnLayout = styled.div`
  display: flex;
  margin-top: 18px;
  margin: 15px auto;
  gap: 15px;
`;

const Btn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${({ color }) => color};
  background-color: rgb(255, 255, 255);
  cursor: pointer;
`;

// useDispatch를 사용하여 Redux 스토어에 액션을 디스패치하고,
// useSelector를 사용하여 스토어의 데이터를 읽어옵니다.
// deleteTodo, updateTodo, cancelTodo 함수는 각각 할 일을 삭제, 완료 처리, 취소 처리하는데 사용됩니다.
