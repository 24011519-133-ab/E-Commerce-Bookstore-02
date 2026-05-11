import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const allBooks = [
  { id: 1, image: '/images/1984.jpeg', title: '1984', author: 'George Orwell', price: 12.99, category: 'Fiction' },
  { id: 2, image: '/images/alchemist.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', price: 14.99, category: 'Fiction' },
  { id: 3, image: '/images/mockingbird.jpeg', title: 'Mockingbird', author: 'Harper Lee', price: 11.99, category: 'Classics' },
  { id: 4, image: '/images/dune.jpeg', title: 'Dune', author: 'Frank Herbert', price: 15.99, category: 'Fantasy' },
  { id: 5, image: '/images/pride.jpeg', title: 'Pride & Prejudice', author: 'Jane Austen', price: 10.99, category: 'Classics' },
  { id: 6, image: '/images/thetrial.jpeg', title: 'The Trial', author: 'Franz Kafka', price: 13.99, category: 'Classics' },
  { id: 7, image: '/images/hamlet.jpeg', title: 'Hamlet', author: 'William Shakespeare', price: 9.99, category: 'Classics' },
  { id: 8, image: '/images/matilda.jpeg', title: 'Matilda', author: 'Roald Dahl', price: 11.99, category: 'Fiction' },
  { id: 9, image: '/images/belljar.jpeg', title: 'The Bell Jar', author: 'Sylvia Plath', price: 12.99, category: 'Fiction' },
  { id: 10, image: '/images/restless.jpeg', title: 'Restless', author: 'William Boyd', price: 13.99, category: 'Fiction' },
  { id: 11, image: '/images/tkiterunner.webp', title: 'The Kite Runner', author: 'Khaled Hosseini', price: 14.99, category: 'Fiction' },
  { id: 12, image: '/images/tbooktheif.jpeg', title: 'The Book Thief', author: 'Markus Zusak', price: 14.99, category: 'Fiction' }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('default');
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  // Get min and max from selected price range
  const getPriceRange = (range: string) => {
    switch(range) {
      case 'Under $10': return { min: 0, max: 9.99 };
      case '$10 - $13': return { min: 10, max: 12.99 };
      case '$13 - $15': return { min: 13, max: 14.99 };
      case 'Over $15': return { min: 15, max: 999 };
      default: return { min: null, max: null };
    }
  };

  useEffect(() => {
    let filtered = allBooks.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || book.category === selectedCategory;
      
      // Price range filter
      const { min, max } = getPriceRange(selectedPriceRange);
      const matchesPrice = min === null || (book.price >= min && book.price <= max);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title-az') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop Books</h1>
      </div>

      <div className="filter-bar">
        {/* Search input */}
        <input
          type="text"
          className="filter-input"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category dropdown */}
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Classics</option>
          <option>Fantasy</option>
          <option>Mystery</option>
        </select>

        {/* Price Range dropdown - NEW & CLEAN */}
        <select
          className="filter-select"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option>All Prices</option>
          <option>Under $10</option>
          <option>$10 - $13</option>
          <option>$13 - $15</option>
          <option>Over $15</option>
        </select>

        {/* Sort By dropdown */}
        <select
          className="filter-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="title-az">Title: A to Z</option>
        </select>
      </div>

      <p className="results-count">Showing {filteredBooks.length} of {allBooks.length} books</p>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-img">
              <img src={book.image} alt={book.title} />
            </div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <span className="book-price">${book.price.toFixed(2)}</span>
            <button className="btn" type="button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="no-results">No books found. Try a different search.</p>
      )}
    </div>
  );
};

export default Shop;