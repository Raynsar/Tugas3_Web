// services/bookingService.js
class BookingService {
  constructor({ bookingRepository, fieldRepository }) {
    this.bookingRepository = bookingRepository;
    this.fieldRepository = fieldRepository;
  }

  async getAllFields() {
    return await this.fieldRepository.findAll();
  }

  async createBooking({ userId, field, date, time }) {
    if (!userId || !field || !date || !time) {
      const error = new Error('Data booking belum lengkap.');
      error.statusCode = 400;
      throw error;
    }

    const existingBooking = await this.bookingRepository.findBySchedule({
      field,
      date,
      time
    });

    if (existingBooking) {
      const error = new Error('Lapangan sudah dibooking pada tanggal dan jam tersebut.');
      error.statusCode = 409;
      throw error;
    }

    const bookingData = {
      user: userId,
      field,
      date,
      time
    };

    return await this.bookingRepository.create(bookingData);
  }
}

module.exports = BookingService;