import { useState } from 'react';

import Button from './button';
import Page from './page';
import Scanner from './scanner';
import BookCard from './book-card';

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
      <div className="flex flex-col justify-center items-center m-auto">
        {addedBook && (
          <>
            <h2 className="mt-0 text-emerald-600">Added Successfully!</h2>

            <BookCard book={addedBook} />
          </>
        )}

        {!showScanner && (
          <Button
            className={`${addedBook ? 'mt-8' : ''} justify-center`}
            onClick={() => {
              setShowScanner(true);
              setAddedBook(null);
            }}
          >
            {addedBook ? 'Add Another Book' : 'Add New Book'}
          </Button>
        )}
      </div>

      {showScanner && <Scanner onScan={handleScan} />}
    </Page>
  );
}

export default AddBook;
