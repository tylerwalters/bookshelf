import { VolumeInfo } from '../types/google-books';

interface BookSummaryProps {
  book: VolumeInfo;
}

function BookSummary(props: BookSummaryProps) {
  const { book } = props;

  return (
    <div>
      <h2>{book.title} Added Successfully</h2>

      <img src={book.imageLinks?.thumbnail} alt={book.title} />
    </div>
  );
}

export default BookSummary;
