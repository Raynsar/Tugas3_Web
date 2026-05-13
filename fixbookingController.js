// controllers/bookingController.js
class BookingController {
  constructor(bookingService) {
    this.bookingService = bookingService;
  }

  showBookingPage = async (req, res, next) => {
    try {
      const fields = await this.bookingService.getAllFields();
      res.render('booking', { fields });
    } catch (error) {
      next(error);
    }
  };

  createBooking = async (req, res, next) => {
    try {
      await this.bookingService.createBooking(req.body);
      res.redirect('/booking');
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BookingController;