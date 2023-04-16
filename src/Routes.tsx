import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/carrinho',
        element: <Cart />,
      },
      {
        path: '/pedido-confirmado',
        element: <ConfirmedOrder />,
      },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
