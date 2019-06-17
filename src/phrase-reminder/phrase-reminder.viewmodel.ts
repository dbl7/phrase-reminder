export class PhraseReminderViewModel {
    private currentIndex: number = 0;
    private length: number;

    constructor(private phrases: string[]) {
        this.length = this.phrases.length;
        this.shafle(this.phrases);
    }

    public getCurrentPhrase(): string {
        return this.phrases[this.currentIndex];
    }

    public getPrevPhrase(): string {
        this.currentIndex = (this.currentIndex === 0 ? this.length : this.currentIndex) - 1;
        return this.getCurrentPhrase();
    }

    public getNextPhrase(): string {
        this.currentIndex = (this.currentIndex === this.length - 1 ? -1 : this.currentIndex) + 1;
        return this.getCurrentPhrase();
    }

    private shafle(phrases: string[]): void {
        let length = phrases.length;

        while(length) {
            const i = Math.floor(Math.random() * length--);
            const temp = phrases[length];
            phrases[length] = phrases[i];
            phrases[i] = temp;
        }
    }
}