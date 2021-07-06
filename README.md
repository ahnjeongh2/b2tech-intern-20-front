# B2Tech 근태 관리 프로그램🚀

## 1. 프로젝트 소개

> 근태 등록, 근무제 선택 및 신청, 연차 등 휴가 관리, 초과 근로 관리 및 수당 지급 등 **인사 업무 시스템** 개발 프로젝트

- 기본 근태 입력 및 조회
- 휴가 신청 및 근무제 신청
- 마이페이지
  - 근로시간 및 초과근무, 출•퇴근 시간 시각화
  - 신청한 휴가 내역 조회
- 관리자 페이지
  - 사원 전체 리스트의 기본 정보
  - 일별 출•퇴근 기록 조회 및 검색 기능

### ::기간🌟

- 2021-06-07 ~ 07-01

### ::🌈팀원

- Front-end: 김유림, 안정현
- Back-end: 최우석

### ::기술스택

- 공통: `Gitlab`, `git graph`, `slack`, `trello`, `google ppt`, `Google Sheets`, `EC2`, `RDS`
- Front-end: `HTML`, `Styled component`, `Javascript`, `React`
- Back-end: `Python`, `MySQL`, `Django`

# 2. 기획부터 개발까지

## 기획 및 개발

- 마일스톤 작성

![](https://images.velog.io/images/april_5/post/90a57d0e-4a62-4a29-a6cb-b5057f10b677/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.16.47.png)
[마일스톤](https://docs.google.com/spreadsheets/d/1OzO3EYk1YkdXKXxF5LBPHa49bzenTgqC-bJbDMWWf40/edit#gid=0)

### ✨ 1st sprint:

: 기획 및 모델링, 레이아웃 및 스타일링

- 구현해야하는 agenda 선정

  ![](https://images.velog.io/images/april_5/post/13dafcb8-c8d7-4867-84c2-7b3abc339e36/agenda.gif)

- 업무정의서 작성
  [업무정의서](https://docs.google.com/presentation/d/1XT9IQHJaveUvmiiiiL3wBcmdgPHKUOj2ILt34UM_K7U/edit#slide=id.gdeef1f0040_0_83)

### 🌈 2nd sprint

![](https://images.velog.io/images/april_5/post/3498d076-be62-44eb-8084-894a7c9fcac1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.12.01.png)

: 근태 입력 및 조회, 휴가/근무제 신청, 마이페이지, 관리자 페이지 기능 구현

- 💬`글래스모피즘`을 컨셉으로 화면 디자인
- 사용된 라이브러리

  - chart.js, react-chartjs-2
  - react-datepicker
  - react-table, react-table-filter
  - react-tabs

- 💬 사용자가 주소창에 `url`을 직접 입력 후 접속 시 <span style="color:red">**토큰 또는 권한이 없는 사용자는 접속하지 못 하도록, 튕겨내도록 구현한 점**</span>은 클론 프로젝트와는 다른 점.

![](https://images.velog.io/images/april_5/post/81760022-7945-478b-82ec-81bfd8a44fe3/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.12.42.png)

### 🎁 3rd sprint:

: `API` 연결

<img alt="마이페이지_모바일" src="https://images.velog.io/images/april_5/post/fd23a2b0-bea6-4bad-8db5-7012991ed59b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.13.11.png" width="200px" />

## 🌈최종발표 및 피드백

- 인턴십이 진행되었던 기업의 개발팀장님께서 파견중이시라, 최종발표는 ZOOM으로 진행.

  ![](https://images.velog.io/images/april_5/post/847c6fe4-48e9-46ef-ba18-890741da1e7a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-01%2012.19.43.png)
