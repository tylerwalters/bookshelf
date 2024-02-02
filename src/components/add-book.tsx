import { useState } from 'react';

import Button from './button';
import Page from './page';
import Scanner from './scanner';

function AddBook() {
  const [showScanner, setShowScanner] = useState(false);

  function handleScan(isbn: string) {
    console.log('handleScan: ', isbn);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`).then((res) => {
      alert(`res: ${res}`);
    });
  }

  return (
    <Page>
      {!showScanner && (
        <>
          <Button onClick={() => setShowScanner(true)}>Add New Book</Button>
        </>
      )}
      {showScanner && <Scanner onScan={handleScan} />}
    </Page>
  );
}

export default AddBook;
