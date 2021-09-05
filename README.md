# B2Tech 근태 관리 프로그램 💼

## 1. 프로젝트 소개

> 근태 등록, 근무제 선택 및 신청, 연차 등 휴가 관리, 초과 근로 관리 및 수당 지급 등 **인사 업무 시스템** 개발 프로젝트
>  : 기업 자체에서 현재 외부 공용 단말에 `휴대폰번호 뒷자리(4자리)`입력을 통해 직원들 출퇴근 기록 체크중
>  : 기존 출퇴근 기록 체크 서비스에서 확장성을 갖춘 ERP 기반 근태관리 프로그램 기획 및 구현에 초점

* 🎈 **근태 프로그램 메인**
  - 개인별 고유한 데이터인 `사원번호` 입력을 통해 출퇴근 등록 및 조회
* 🎈 **휴가/근무제 신청**
  - **휴가 신청:** 개인별 `휴가일수(발생/사용/잔여)`, `휴가 type`, `휴가 일자` 선택 후 등록
  - **근무제 신청:** 유연근무제 4가지 type 중 `시차출퇴근` 에 대한 `월단위 기간` 및 `출근시간` 선택 후 등록
* 🎈 **마이페이지**
  - 개인별 `당일 출퇴근 시간` 확인
  - 주 52시간에 따른 한주 동안의 근로시간, 요일별 초과근로시간 및 출퇴근 시간 `시각화`
* 🎈 **관리자 페이지**
  - `관리자 권한`이 부여된 사용자인지 여부에 따라, 좌측 사이드 바 메뉴의 활성화 영역 조정
  - `react-table 라이브러리` 및 `useMemo Hook` 을 활용하여, 전 직원 기본정보 및 출퇴근정보 테이블화
  - `fetch 함수`를 통해 서버에서 불러온 전 직원의 기본정보 및 출퇴근 정보에 대한 `검색` 기능

### ::🌟프로젝트 기간

- **2021.06.07. ~ 2021.07.01. (4주)**

### ::🌈프로젝트 팀원 (👩‍💻github)

- **Front-end 2명**: [김유림](https://github.com/yurim45), [안정현](https://github.com/ahnjeongh2)
- **Back-end 1명**: [최우석](https://github.com/tonic523)
  - [Back-end github 링크](https://github.com/tonic523/schedule_management)

### ::🧱기술스택

- **Front-end:** `React`, `React Hooks`, `Styled Component`, `JavaScript`
- **Back-end:** Python, MySQL, Django, AWS(RDS, EC2)
- **Common:** gitlab, git graph, slack, trello, google ppt, google sheets, EC2, RDS

# 2. 기획부터 개발까지

## 기획 및 개발

- 마일스톤 작성

![](https://images.velog.io/images/april_5/post/90a57d0e-4a62-4a29-a6cb-b5057f10b677/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.16.47.png)

### ✨ 1st Sprint:

: 기획 및 모델링, 레이아웃 및 스타일링

- 구현해야하는 agenda 선정

  ![](https://images.velog.io/images/april_5/post/13dafcb8-c8d7-4867-84c2-7b3abc339e36/agenda.gif)

- 업무정의서 작성
  [업무정의서](https://docs.google.com/presentation/d/1XT9IQHJaveUvmiiiiL3wBcmdgPHKUOj2ILt34UM_K7U/edit#slide=id.gdeef1f0040_0_83)

### 🌈 2nd Sprint

![](https://images.velog.io/images/april_5/post/3498d076-be62-44eb-8084-894a7c9fcac1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.12.01.png)

: 근태 입력 및 조회, 휴가/근무제 신청, 마이페이지, 관리자 페이지 기능 구현

- 💬`글래스모피즘`을 컨셉으로 화면 디자인

- 사용된 라이브러리

  - chart.js, react-chartjs-2
  - react-datepicker
  - react-table
  - react-tabs

- 💬 사용자가 주소창에 `url`을 직접 입력 후 접속 시 <span style="color:red">**토큰 또는 권한이 없는 사용자는 접속하지 못 하도록, 튕겨내도록 구현한 점**</span>은 기존에 진행했던 1차 및 2차 프로젝트와는 다른 점

![](https://images.velog.io/images/april_5/post/81760022-7945-478b-82ec-81bfd8a44fe3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.12.42.png)

### 🎁 3rd Sprint:

: `API` 연결

<img alt="마이페이지_모바일" src="https://images.velog.io/images/april_5/post/fd23a2b0-bea6-4bad-8db5-7012991ed59b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.13.11.png" width="200px" />

## 🌈최종발표

- 🎬 [프로젝트 전체 시연 영상(유튜브 영상 )](https://www.youtube.com/watch?v=X-Lhwc6PuU4)

- 인턴십이 진행되었던 기업의 개발팀장님께서 파견중이시라, 최종발표는 ZOOM으로 진행.

  ![](https://images.velog.io/images/april_5/post/847c6fe4-48e9-46ef-ba18-890741da1e7a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.19.43.png)
