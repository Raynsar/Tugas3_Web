// routes/booking.js
const express = require('express');
const Field = require('../models/Field');
const Booking = require('../models/Booking');
const router = express.Router();

// Menampilkan daftar lapangan dan jadwal
router.get('/', async (req, res) => {
  const fields = await Field.find();
  res.render('booking', { fields });
});

// Proses booking
router.post('/', async (req, res) => {
  const { userId, field, date, time } = req.body;
  const newBooking = new Booking({ user: userId, field, date, time });
  await newBooking.save();
  res.redirect('/booking');
});

module.exports = router;