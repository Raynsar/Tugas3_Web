// repositories/bookingRepository.js
const Booking = require('../models/Booking');

class BookingRepository {
  async create(bookingData) {
    return await Booking.create(bookingData);
  }

  async findBySchedule({ field, date, time }) {
    return await Booking.findOne({
      field,
      date,
      time
    });
  }
}

module.exports = new BookingRepository();