import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router의 필요한 컴포넌트를 불러옵니다.
import Home from '../pages/Home'; // 홈 페이지 컴포넌트를 가져옵니다.
import Detail from '../pages/Detail'; // 상세 페이지 컴포넌트를 가져옵니다.

// 라우터 컴포넌트 정의
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 라우트 구성을 위한 Routes 컴포넌트를 시작합니다. */}
        <Route path="/" element={<Home />} />
        {/* 루트 경로에 대한 홈 페이지를 렌더링하는 라우트 */}
        <Route path="detail/:id" element={<Detail />} />
        {/* /detail/:id 경로에 대한 상세 페이지를 렌더링하는 라우트 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router; // 라우터 컴포넌트를 내보냅니다.

// BrowserRouter 컴포넌트를 사용하여 브라우저의 URL을 기반으로 라우팅을 처리합니다.
// 이 코드는 React Router를 사용하여 페이지 간의 전환을 관리하는 기본적인 라우팅 설정을 나타내고 있습니다.
