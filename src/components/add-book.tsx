import { useState } from 'react';

import Button from './button';
import Page from './page';
import Scanner from './scanner';
import BookSummary from './book-summary';

import { VolumeInfo } from '../types/google-books';

function AddBook() {
  const [showScanner, setShowScanner] = useState(false);
  const [addedBook, setAddedBook] = useState<VolumeInfo | null>();

  async function fetchBook(isbn: string): Promise<VolumeInfo> {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const { items } = await response.json();

    return items[0]?.volumeInfo;
  }

  async function handleScan(isbn: string) {
    setShowScanner(false);

    const book = await fetchBook(isbn);

    setAddedBook(book);
  }

  return (
    <Page>
      {addedBook && <BookSummary book={addedBook} />}

      {!showScanner && (
        <Button
          onClick={() => {
            setShowScanner(true);
            setAddedBook(null);
          }}
        >
          {addedBook ? 'Add Another Book' : 'Add New Book'}
        </Button>
      )}

      {showScanner && <Scanner onScan={handleScan} />}
    </Page>
  );
}

export default AddBook;
