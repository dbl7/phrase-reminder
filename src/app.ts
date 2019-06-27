import './assets/style.css';
import { PhraseReminderViewModel, PhraseReminderView } from './phrase-reminder';

const phrases = require('./assets/phrases.txt').default.split('\n');

const viewModel = new PhraseReminderViewModel(phrases);
const view = new PhraseReminderView(viewModel);

window.addEventListener('load', () => {
    document.querySelector('main').appendChild(view.getView());
});

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
          console.log('ServiceWorker registration failed: ', error);
      });
}