const express = require('express');
const router = express.Router();
const request = require('request');
const path = './public/images/dog.jpg';
const {download} = require('../download');



router.get('/', (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const result = JSON.parse(body);
  console.log(result);
  download(result.message, path, () => {
    console.log('Done >>>>');
  })
  const fotoDog = `<img src="${result.message}">`;

 
  const fotoDogStr = JSON.stringify(result);
  
  res.render('cabinet', {fotoDog: fotoDog});
  });
  
});

module.exports = router;