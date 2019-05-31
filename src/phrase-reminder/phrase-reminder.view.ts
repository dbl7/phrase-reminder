import { PhraseReminderViewModel } from "./phrase-reminder.viewmodel";

export class PhraseReminderView {
    private view: HTMLElement;

    constructor(private viewModel: PhraseReminderViewModel) {
        this.initView();
    }

    public getView(): HTMLElement {
        return this.view;
    }

    private initView(): void {
        const phraseReminder = document.createElement('div');
        phraseReminder.className = 'phrase-reminder'

        const phrase = document.createElement('div');
        phrase.className = 'phrase'
        phrase.innerText = this.viewModel.getCurrentPhrase();

        const switchButtons = document.createElement('div');
        switchButtons.className = 'switch-buttons';

        const prevPhrase = document.createElement('button');
        prevPhrase.classList.add('switch-phrase', 'prev-phrase');
        prevPhrase.addEventListener('click', () => phrase.innerText = this.viewModel.getPrevPhrase());
        
        const nextPhrase = document.createElement('button');
        nextPhrase.classList.add('switch-phrase', 'next-phrase');
        nextPhrase.addEventListener('click', () => phrase.innerText = this.viewModel.getNextPhrase());

        switchButtons.appendChild(prevPhrase);
        switchButtons.appendChild(nextPhrase);
        phraseReminder.appendChild(phrase);
        phraseReminder.appendChild(switchButtons);

        this.view = phraseReminder;
    }
}