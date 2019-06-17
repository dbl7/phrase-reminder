import './phrase-reminder.css';
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

        const phrase = this.createPhraseContainer();
        const switchButtons = this.createButtons(phrase);

        phraseReminder.appendChild(phrase);
        phraseReminder.appendChild(switchButtons);

        this.view = phraseReminder;
    }

    private createPhraseContainer(): HTMLElement {
        const phrase = document.createElement('div');
        phrase.className = 'phrase'
        phrase.innerText = this.viewModel.getCurrentPhrase();

        return phrase;
    }

    private createButtons(phrase: HTMLElement): HTMLElement {
        const switchButtons = document.createElement('div');
        switchButtons.className = 'switch-buttons';
        switchButtons.addEventListener('touchstart', (event: Event) => {
            if ((<HTMLElement>event.target).classList.contains('switch-buttons')) {
                event.preventDefault();
            }
        });

        switchButtons.appendChild(this.createPrevButton(phrase));
        switchButtons.appendChild(this.createNextButton(phrase));

        return switchButtons;
    }

    private createPrevButton(phrase: HTMLElement): HTMLButtonElement {
        const prevPhrase = document.createElement('button');
        prevPhrase.classList.add('switch-phrase', 'prev-phrase');
        prevPhrase.addEventListener('click', (event: Event) => {
            event.preventDefault();
            phrase.innerText = this.viewModel.getPrevPhrase()
        });

        return prevPhrase;
    }

    private createNextButton(phrase: HTMLElement): HTMLButtonElement {
        const nextPhrase = document.createElement('button');
        nextPhrase.classList.add('switch-phrase', 'next-phrase');
        nextPhrase.addEventListener('click', (event: Event) => {
            event.preventDefault();
            phrase.innerText = this.viewModel.getNextPhrase();
        });

        return nextPhrase;
    }
}