import { VolumeInfo } from '../types/google-books';

interface BookSummaryProps {
  book: VolumeInfo;
}

function BookCard(props: BookSummaryProps) {
  const { book } = props;

  return (
    <div className="flex flex-row items-center bg-white border border-gray-200 rounded-md shadow w-full">
      <img
        className="object-cover h-auto rounded-l-md not-prose"
        src={book.imageLinks?.smallThumbnail}
        alt={book.title}
      />

      <div className="flex flex-col justify-between leading-normal pl-6 pr-4">
        <h4 className="text-lg mt-0 mb-2">{book.title}</h4>
        <p className="font-normal text-gray-700 mb-0">by {book.authors[0]}</p>
      </div>
    </div>
  );
}

export default BookCard;
