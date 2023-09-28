import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodos } from '../modules/todo';
import { v4 as uuid } from 'uuid';
import Box from '../components/Box';
import styled from 'styled-components';

function Home() {
  const [title, setTitle] = useState(''); // 입력한 할일 제목을 상태로 관리
  const [detail, setDetail] = useState(''); // 입력한 할일 상세 내용을 상태로 관리
  // const [id, setId] = useState(uuid()); // 고유한 ID를 생성하여 상태로 관리
  const dispatch = useDispatch(); // Redux의 액션 디스패치 함수를 가져옴

  const inputTitle = (e) => {
    setTitle(e.target.value); // 할일 제목 입력이 변경될 때 상태를 업데이트
  };

  const inputDetail = (e) => {
    setDetail(e.target.value); // 할일 상세 내용 입력이 변경될 때 상태를 업데이트
  };

  const data = useSelector((state) => {
    return state.todo; // Redux 스토어에서 할일 목록 데이터를 가져옴
  });

  const createTodo = () => {
    if (!title.trim() || !detail.trim()) {
      return;
    }
    const newTodo = {
      id: uuid().slice(0, 5), // 새로운 할일을 생성할 때마다 새로운 UUID를 생성
      title: title.trim(), // 입력한 할일 제목 사용
      detail: detail.trim(), // 입력한 할일 상세 내용 사용
      isDone: false, // 새로운 할일은 완료되지 않은 상태로 초기화
    };
    dispatch(createTodos(newTodo)); // Redux 스토어에 새로운 할일을 추가하는 액션 디스패치
    setTitle(''); // 입력 필드 초기화
    setDetail(''); // 입력 필드 초기화
  };

  return (
    <div>
      <content>
        <Header>My Todo List</Header>
        <Title>
          <BoldText>제목</BoldText>
          <Input type="text" value={title} onChange={inputTitle} />
          <BoldText>내용</BoldText>
          <Input type="text" value={detail} onChange={inputDetail} />
          <PlusBtn onClick={createTodo}>추가하기</PlusBtn>
        </Title>
        <h2>Working.. 🔥</h2>
        <BoxLayout>
          {data.map((item) => {
            if (item.isDone === false)
              // 완료되지 않은 할일만 보여줌
              return (
                <Box
                  id={item.id}
                  item={item}
                  title={item.title}
                  detail={item.detail}
                  isDone={item.isDone}
                />
              );
          })}
        </BoxLayout>
        <h2>Done..! 🎉</h2>
        <BoxLayout>
          {data.map((item) => {
            if (item.isDone === true)
              // 완료된 할일만 보여줌
              return (
                <Box
                  id={item.id}
                  item={item}
                  title={item.title}
                  body={item.detail}
                  isDone={item.isDone}
                />
              );
          })}
        </BoxLayout>
      </content>
    </div>
  );
}

const Content = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  padding: 30px;
  gap: 20px;
`;

const BoldText = styled.div`
  font-weight: bold;
`;

const Input = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;

const PlusBtn = styled.div`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  display: flex;
  justify-content: center; /* 가로 정렬을 수행합니다. */
  align-items: center; /* 세로 정렬을 수행합니다. */
  margin-left: 20px;
  font-size: 0.85em;
`;

const BoxLayout = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export default Home;
