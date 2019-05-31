import './assets/style.css';

import { PhraseRemider } from './phrase-reminder';

const phraseReminder = new PhraseRemider();

window.addEventListener('load', () => {
    document.body.appendChild(phraseReminder.view);
});