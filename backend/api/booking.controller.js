
export default class BookingController {
  static async apiGetBookings(req, res, next) {
    const url='https://www.supersaas.com/api/range/589722.json?api_key=supbt7jVhyI2foDBaU1BQQ';
        
    axios.get(url)
      .then(function(response) {
        // console.log(response.data.bookings);
        var output = []
        for (let i = 0; i < response.data.bookings.length; i++) {
          output.push(response.data.bookings[i])
        }
        console.log(output)
        return output
      })
  }

}