import { useState } from 'react';

import Home from './components/home';
import AddBook from './components/add-book';
import Footer from './components/footer';

const VIEWS = {
  HOME: 'HOME',
  ADD_BOOK: 'ADD_BOOK',
};

function App() {
  const [view, setView] = useState(VIEWS.HOME);

  return (
    <div className="flex flex-col h-screen w-screen">
      {view === VIEWS.HOME && <Home />}

      {view === VIEWS.ADD_BOOK && <AddBook />}

      <Footer onAddClick={() => setView(VIEWS.ADD_BOOK)} onHomeClick={() => setView(VIEWS.HOME)} />
    </div>
  );
}

export default App;
