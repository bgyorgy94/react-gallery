import './App.css';
import Images from './components/Images';
import Upload from './components/Upload';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Images />
  },
  {
    path: '/upload',
    element: <Upload />
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
