import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

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
    ],
  },
])

export function Routes() {
  return <RouterProvider router={router} />
}
