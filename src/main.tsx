import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShippingPackageData from './pages/ShippingPackageData';
import Home from './pages/Home';
import DestinationData from './pages/DestinationData';
import FreightCalculation from './pages/FreightCalculation';
import TrackingCode from './pages/TrackingCode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/destino',
    element: <DestinationData />,
  },
  {
    path: '/pacote',
    element: <ShippingPackageData />,
  },
  {
    path: '/pacoteEnvio',
    element: <FreightCalculation />,
  },
  {
    path: '/rastreio',
    element: <TrackingCode />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
