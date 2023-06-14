import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MaitLayout from './layouts/MaitLayout';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <MaitLayout>
        <Routes>
          {publicRoutes.map((el) => (
            <Route path={el.path} Component={el.component} />
          ))}
        </Routes>
      </MaitLayout>
    </BrowserRouter>
  );
}

export default App;
