import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function Detail() {
  const { id } = useParams();
  // const params = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.todo;
  });

  const findData = data.find((item) => {
    return item.id === id;
  });

  const backPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <DetailLayout>
        <Box2>
          <Box3>
            id:{findData.id}
            <BackBtn onClick={backPage} style={{ display: 'inline' }}>
              이전으로
            </BackBtn>
          </Box3>
          <h1>{findData.title}</h1>
          <DetailText>{findData.detail}</DetailText>
        </Box2>
      </DetailLayout>
    </div>
  );
}

const DetailLayout = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* -webkit-box-align: center; */
  align-items: center;
  /* -webkit-box-pack: center; */
  /* justify-content: center; */
`;

const Box2 = styled.div``;

const BackBtn = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center; /* 가로 정렬을 수행합니다. */
  align-items: center; /* 세로 정렬을 수행합니다. */
  text-align: center; /* 텍스트를 수평 중앙 정렬합니다. */
`;

const Box3 = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
`;

const DetailText = styled.div`
  font-size: 15px;
  font-weight: normal;
`;
