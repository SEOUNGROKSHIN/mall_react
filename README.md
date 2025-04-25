# 기본 리액트 동작 방식 프로젝트 설명
### 1. 라우팅 시스템 (root.jsx)
프로젝트는 `react-router-dom`을 사용하여 라우팅을 관리하고 있습니다.
주요 라우트 구조:
- `/` (메인 페이지)
- `/about` (어바웃 페이지)
- `/todo` (할일 관리 페이지)

특징:
- `lazy loading`을 사용하여 성능 최적화
- 를 통한 로딩 상태 처리 `Suspense`
- 중첩 라우팅 지원 (todoRouter 통해)

### 2. 페이지 구조
#### IndexPage (todo/IndexPage.jsx)
- 기본 레이아웃()을 사용 `BasicLayout`
- 네비게이션 기능:
    - LIST 버튼: 할일 목록 페이지로 이동
    - ADD 버튼: 할일 추가 페이지로 이동

- `Outlet`을 사용하여 하위 라우트의 컴포넌트를 렌더링

#### ListPage (ListPage.jsx)
- URL 파라미터를 통한 페이징 처리
    - page: 현재 페이지 (기본값: 1)
    - size: 페이지당 항목 수 (기본값: 10)

### 3. 주요 특징과 패턴
1. **컴포넌트 분리**
    - 각 페이지가 독립적인 컴포넌트로 분리
    - 레이아웃과 페이지 컨텐츠의 명확한 구분

2. **성능 최적화**
    - `lazy loading`으로 초기 로딩 시간 단축
    - 을 사용한 함수 메모이제이션 `useCallback`

3. **라우팅 관리**
    - 중앙 집중식 라우팅 설정
    - 동적 라우팅과 중첩 라우팅 지원

### 4. 실행 흐름
1. 애플리케이션 시작
    - root.jsx에서 정의된 라우터 설정 로드
    - 초기 경로에 따른 컴포넌트 로드

2. 사용자 상호작용
    - 네비게이션 메뉴 클릭 시 해당 경로로 이동
    - URL 파라미터에 따른 데이터 로딩 및 표시

3. 컴포넌트 렌더링
    - 레이아웃 컴포넌트가 먼저 렌더링
    - 해당 경로의 페이지 컴포넌트가 내부에 렌더링


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
