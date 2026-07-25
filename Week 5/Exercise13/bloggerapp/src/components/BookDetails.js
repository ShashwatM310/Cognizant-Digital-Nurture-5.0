import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];

  return (
    <div style={styles.card}>
      <h3>Book Details</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { padding: '15px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f8ff' }
};

export default BookDetails;
