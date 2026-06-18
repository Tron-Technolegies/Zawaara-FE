import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import LoginScreenPage from "./pages/LoginScreenPage";
import HomePage from "./pages/HomePage";
import NewArrivalPage from "./pages/NewArrivalPage";
import BridalPage from "./pages/BridalPage";
import MyAccountPage from "./pages/MyAccountPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductPage from "./pages/ProductPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LoginScreenPage />,
      },
      {
        path: "/home",
        element:<HomePage/>
      },
      {
        path: "/new-arrivals",
        element:<NewArrivalPage/>
      },
      {
        path:"/bridal",
        element:<BridalPage/>
      },
      {
        path:"/myaccount",
        element:<MyAccountPage/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path:"/wishlist",
        element:<WishlistPage/>
      },
      {
        path:"/product",
        element:<ProductPage/>
      }
  

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;