function Book(idBook, title, author, image, stars, section, price) {
    this.idBook = idBook || 0;
    this.title = title || '';
    this.author = author || '';
    this.image = image || '';
    this.stars = stars || 0;
    this.section = section || 'Must Read Titles';
    this.price = price || 0;
}