class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
	this.name = name;
	this.releaseDate = releaseDate;
	this.pagesCount = pagesCount;
	this.state = 100;
	this.type = null;
    }

	fix() {
		this.state *= 1.5;
	}

	set state(value) {
		if (value < 0) { 
			this._state = 0;			
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount);		
		this.type = "book";
		this.author = author;
	}	
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);		
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);		
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount);		
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {		
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {	
	const book = this.books.find(item => item[type] === value);
	return book || null;
	}

	giveBookByName(bookName) {		
		const bookIdx = this.books.findIndex(item => item.name === bookName);		
		if (bookIdx === -1) {
			return null;
		} 
			return this.books.splice(bookIdx, 1)[0];		
	}
}



const library1 = new Library("Домашняя библиотека");
const stories = new NovelBook(
    "Стефан Цвейг",
    "Сборник новел",
    1919,
    320
  );

library1.addBook(stories);

library1.addBook(
  new FantasticBook(
    "Джон Френч",
    "Ариман",
    2017,
    928
  )
);


library1.addBook(
	new Magazine(
		"Наука и Жизнь", 
		1967,
		144
		)
);

console.log(library1.findBookBy("releaseDate", 1919).name);
library1.giveBookByName("Сборник новел");
stories.state = 30;
console.log(stories.state);
stories.fix();
console.log(stories.state);
library1.addBook(stories);
console.log(library1);

