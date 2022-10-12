import axios from 'axios';

const QUESTIONS_URL = 'https://api.jsonbin.io/v3/b/634325480e6a79321e22ca04';

export const getQuestions = axios
  .get(QUESTIONS_URL)
  .then(function (response) {
    return response.data.record.questions;
  })
  .catch(function (error) {
    console.log(error);
  });
