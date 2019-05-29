export class PhraseRemider {
    public view: HTMLElement;
    private phrases: string[];

    constructor() {
        this.phrases = this.getPhrases();
        this.view = this.createView();
    }

    private getPhrases(): string[] {
        return ['first phrase', 'second phrase'];
    }

    private createView(): HTMLElement {
        const container: HTMLDivElement = document.createElement('div');
        container.innerText = this.phrases[0];

        return container;
    }
}