// import express from "express"
// import BookingController from './booking.controller';
const express = require('express');
// const BookingController = require('./booking.controller');
const axios = require('axios');

const router = express.Router()

router.get('/', function (req, res, next) {
  const url='https://www.supersaas.com/api/range/589722.json?api_key=supbt7jVhyI2foDBaU1BQQ';
      
  axios.get(url)
    .then(function(response) {
      var data = response.data.bookings
      res.json({data})
    })
})



// export default router
module.exports = router