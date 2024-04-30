import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddCardPage } from './pages/AddCardPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Definiera olika rutter med tillhörande komponenter och fallback för felaktiga rutter.
const router = createBrowserRouter([
  // Definiera huvudsidan ("/") med komponenten HomePage och fallback till NotFoundPage vid felaktig rutt.
  { path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },
  {
    // Definiera sidan för att lägga till ett kort ("/addCardPage") med komponenten AddCardPage och fallback till NotFoundPage vid felaktig rutt.
    path: '/addCardPage',
    element: <AddCardPage />,
    errorElement: <NotFoundPage />,
  },
]);
// Definiera huvudkomponenten App som renderar RouterProvider med angiven router.
function App() {
  return <RouterProvider router={router} />;
}

export default App;
