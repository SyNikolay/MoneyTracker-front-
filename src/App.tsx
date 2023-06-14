import React from 'react';

import MainPage from './pages/main-page/MainPage';
import MaitLayout from './layouts/MaitLayout';

function App() {
  return (
    <>
      <MaitLayout>
        <MainPage />
      </MaitLayout>
    </>
  );
}

export default App;
