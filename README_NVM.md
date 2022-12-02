## NVM 설치

### 1. 설치
```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
nvm 설치

### 2. 확인
```
$ nvm ls

-bash: nvm: command not found
```

### 3. 환경변수 설정
```
$ vi ~/.bash_profile
```
vi 에디터로

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
위 코드가 있는지 확인

### 4. 재시작
```
source ~/.bash_profile
```

### 5. 확인
```
$ nvm ls
```

```
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)
```