// routes/booking.js
const express = require('express');
const BookingController = require('../controllers/bookingController');
const BookingService = require('../services/bookingService');
const bookingRepository = require('../repositories/bookingRepository');
const fieldRepository = require('../repositories/fieldRepository');

const router = express.Router();

const bookingService = new BookingService({
  bookingRepository,
  fieldRepository
});

const bookingController = new BookingController(bookingService);

// Menampilkan daftar lapangan dan jadwal
router.get('/', bookingController.showBookingPage);

// Proses booking
router.post('/', bookingController.createBooking);

module.exports = router;