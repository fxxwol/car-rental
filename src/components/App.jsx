import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPgae = lazy(() => import('../pages/CatalogPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={<CatalogPage />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPgae />
            }
          />
          <Route path="*" element={<HomePage/>} />
        </Route>
      </Routes>

    </>
  );
}

export default App;