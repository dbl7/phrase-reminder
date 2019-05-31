import './assets/style.css';

import { PhraseReminderViewModel, PhraseReminderView } from './phrase-reminder';

const viewModel = new PhraseReminderViewModel(['first phrase', 'second phrase']);
const view = new PhraseReminderView(viewModel);

window.addEventListener('load', () => {
    document.querySelector('main').appendChild(view.getView());
});