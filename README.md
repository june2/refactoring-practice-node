## Repactoring Practice Node
- Node 18v 버전 설치가 필요합니다.

---
## Node 설치 방법
- Node 공식홈페이지 다운로드 설치
    - https://nodejs.org
- NVM활용 Node 설치
  - `NVM(Node Version Manager)`은 node버전 관리 도구를 말합니다.
  - [NVM 설치방법](https://github.com/june2/refactoring-practice-node/blob/main/README_NVM.md)
  
---
## test 코드 실행 법
```sh
## npm 사용시
$ npm run test
$ npm run test:watch # watch 모드 실행법

## yarn 사용시
$ yarn test
$ yarn test:watch # watch 모드 실행법
```

```sh
## 폴더/파일 별로 테스트 방법
$ node --test --require ts-node/register src/test/solution/{파일_path}.ts
$ node --test --require ts-node/register src/test/solution/{폴더명}*/**/*.ts

## watch 모드 실행법
$ node --watch --require ts-node/register src/test/solution/{파일_path}.ts
$ node --watch --require ts-node/register src/test/solution/{폴더명}*/**/*.ts
```

## 🔍 진행 방식

- package 구성

  ```
  src ┬ main ┬ problem  : 리팩토링이 필요한 코드가 예시가 있는 패키지 (수정대상 아님) 
      │      └ solution : problem에 있는 코드를 그대로 복사했으며, 리팩토링 대상 (수정 대상)
      └ test ─ solution : 코드에 대하여 리팩토링후 동작의 변화를 확인할 수 있는 테스트 코드 
  ```
- 리팩토링할 코드는 `src/main/solution`에 있음
  <br>
- 리팩토링후 `src/test/solution` 패키지로 이동 테스트 코드 실행

---

## 🚀 리팩토링 실습

1. `Extract Method`
   - **테스트 코드 작성하지 않음**
   - **IDE의 `Extract Method` 기능을 사용하지 않고, 직접 리팩토링 하기**
   - printOwing() 를 3개의 의미있는 메소드로 구성되도록 리팩토링 
     <br>
2. `Replace Temp With Query`
   1. 첫번째 문제
      - getPrice메소드에 대해 테스트 케이스 작성
      - Extract Method 를 이용하여 getPrice메소드를 2개의 의미 있는 메소드로 구성되도록 리팩토링
   2. 두번째 문제
      - getPrice메소드에 대해 테스트 케이스 작성
      - 재대입되는 변수 basePrice에 대하여 다른 임시변수(상수)로 선언
      - Extract Method 를 이용하여 getPrice메소드를 2개의 의미 있는 메소드로 구성되도록 리팩토링
   3. 세번째 문제
      - printOwing메소드에 대해 테스트 케이스 작성(이미 작성된 것 활용)
      - outstanding1 ~ 4 까지 변수의 최종값에 대한 질의함수 만들기
      - 2에서 만든 질의함수를 사용하여 임시변수(지역변수)를 제거
      - 표준출력문만 남겨보기
      - (선택) stream을 이용하여 질의함수를 더 간단하게 변경가능
   4. 네번째 문제
      - 이번 문제는 부수효과에 대한 문제를 확인하기 위한 것
      - 부수효과를 일으키는 부분을 별도의 함수로 분리해보기
      - 함수 분리만으로 문제 해결되었다고 볼 수 있음 
      - (선택) 함수 분리후 테스트 코드의 주석을 제거 후 실행  
      <br>
3. `Replace Method With Method`
   1. 첫번재 문제
      - gamma 메소드에 대한 테스트 코드 작성
      - 메소드의 이름을 따서 새로운 클래스(Gamma) 생성
      - gamma 메소드에 내에 새롭게 작성한 클래스의 메소드를 호출하도록 변경
   2. 두번재 문제
      - printOwing 메소드에 대한 테스트 코드 작성 (이미 작성된 것 활용)
      - 메소드의 이름을 따서 새로운 클래스 생성
      - printOwing 메소드내, 새로운 클래스의 메소드를 호출하도록 리팩터링
      <br>