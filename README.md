### Repactoring Practice Node
- Node 18v 버전 설치가 필요합니다.

---
### Node 설치 방법
- Node 공식홈페이지 다운로드 설치
    - https://nodejs.org
- NVM활용 Node 설치
  - `NVM(Node Version Manager)`은 node버전 관리 도구를 말합니다.
```sh
## mac
$ brew install nvm # nvm 설치
$ mkdir ~/.nvm # 환경변수 설정
$ vi ~/.bash_profile 
$ export NVM_DIR="$HOME/.nvm"
$ [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh" 
$ [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  
$ source ~/.bash_profile
$ nvm install 18.12.1 # node 설치 
$ node -v 

## ubuntu
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
$ export NVM_DIR="$HOME/.nvm"
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
$ nvm install 18.12.1 # node 설치 
$ node -v 
```

---
### test 코드 실행 법
```sh
$ yarn test
$ yarn test:watch # watch 모드 실행법
```
