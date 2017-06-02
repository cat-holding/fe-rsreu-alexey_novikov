function Notification(idBook, date) {
    this.idBook = idBook || 0;
    this.date = date ? date : new Date();
}