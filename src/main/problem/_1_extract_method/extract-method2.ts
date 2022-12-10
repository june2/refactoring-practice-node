export class ExtractMethod2 {

    //TODO: 아래의 isPattern을 Extract Method를 이용하여 의미있는 메소드로 만들고, 전체 길이를 줄여보세요.
    //소스출처 : https://github.com/spring-projects/spring-framework/blob/main/spring-core/src/main/java/org/springframework/util/AntPathMatcher.java
    //메소드설명 : 빌드툴 Ant 코드 중 경로패턴에 맞는지 체크하는 메소드
    public isPattern(path: string): boolean {
        let uriVar: boolean = false;

        for (let i = 0; i < path.length; i++) {
            let c = path.charAt(i);
            if (c == '*' || c == '?') {
                return true;
            }
            if (c == '{') {
                uriVar = true;
                continue;
            }
            if (c == '}' && uriVar) {
                return true;
            }
        }

        return false;
    }
}