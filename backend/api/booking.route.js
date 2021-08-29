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
      var name ="Fiona"
      var user_bookings = { "booking": []};
      console.log(data)
      for (booking of data){
        if (booking.full_name == name){
            user_bookings.booking.push({
                    "start": booking.start,
                    "end": booking.finish,
                    "service": booking.field_1_r,
                })
            }
        }
      console.log(user_bookings)
      res.json({data})

    })
})

// export default router
module.exports = router