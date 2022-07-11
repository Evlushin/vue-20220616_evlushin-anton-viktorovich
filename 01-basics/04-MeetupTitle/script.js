import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const vm = createApp({
  data() {
    return {
      meetup: null,
      meetupId: 0,
      meetupTitle: '',
    };
  },

  watch: {
    meetupId(meetupId) {
      fetchMeetupById(meetupId).then((metup) => {
        this.meetupTitle = metup.title;
      });
    },
  },
}).mount('#app');

// Требуется создать Vue приложение
