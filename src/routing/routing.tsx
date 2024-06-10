import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Error } from '@/pages/Error';
import { Gallery } from '@/pages/Gallery';
import { Root } from '@/pages/Root';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path='/' element={<Gallery />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);
