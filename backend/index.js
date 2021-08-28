const express = require('express');
const cors = require('cors');
const bookings = require('./api/booking.route');

const app = express()

app.use("/api/booking", bookings)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))

app.use(cors())
app.use(express.json())

// app.use("/api/v1/restaurants", restaurants)
// app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }))
// dotenv.config()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
})