import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import MaitLayout from './layouts/MaitLayout';

import { authRoutes, publicRoutes } from './routes';
import { useUser } from './store/UserStore';

function App() {
  const isAuth = useUser((state) => state.isAuth);

  return (
    <BrowserRouter>
      <MaitLayout>
        <Routes>
          {publicRoutes.map((el, i) => (
            <Route key={i} path={el.path} Component={el.component} />
          ))}
          {isAuth && authRoutes.map((el, i) => <Route key={i} path={el.path} Component={el.component} />)}
        </Routes>
      </MaitLayout>
    </BrowserRouter>
  );
}

export default App;
