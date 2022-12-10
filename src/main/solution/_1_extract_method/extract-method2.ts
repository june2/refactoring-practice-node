export class ExtractMethod2 {
    
    public isPattern(path: string): boolean {
        let bracketOpened: boolean = false;

        for (let i = 0; i < path.length; i++) {
            bracketOpened = this.isBracketOpen(path[i], bracketOpened);
            if (this.containsAsteriskOrQuestionMark(path[i]) || this.isBracketClosed(path[i], bracketOpened)) {
                return true;
            }
        }
        return false;
    }

    private isBracketOpen(character: string, isBracketOpen: boolean) {
        if (character == '{') {
            return true;
        }
        return isBracketOpen;
    }

    private isBracketClosed(character: string, isBracketOpen: boolean) {
        return character == '}' && isBracketOpen;
    }

    private containsAsteriskOrQuestionMark(character: string,) {
        return ['*', '?'].includes(character);
    }
}