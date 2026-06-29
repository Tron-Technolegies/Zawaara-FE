import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
// import LoginScreenPage from "./pages/LoginScreenPage";
import HomePage from "./pages/HomePage";
import NewArrivalPage from "./pages/NewArrivalPage";
import BridalPage from "./pages/BridalPage";
import MyAccountPage from "./pages/MyAccountPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./components/login/ForgotPassword";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingAndReturns from "./pages/ShippingAndReturns";
import FAQ from "./pages/FAQ";
import SizeGuide from "./pages/SizeGuide";
import ResetPassword from "./components/login/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckOutPage";
import FeaturedPage from "./pages/FeaturedPage";
import ContactPage from "./pages/ContactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: "/home",
      //   element:<HomePage/>
      // },
      {
        path: "/new-arrivals",
        element: <NewArrivalPage />
      },
      {
        path: "/category/:categoryId",
        element: <NewArrivalPage />
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
        path:"/product/:id",
        element:<ProductPage/>
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },

      {
        path:"/forgot",
        element:<ForgotPassword/>
      },

      {
        path:"/termsofservice",
        element:<TermsOfService/>
      },

      {
        path:"/privacypolicy",
        element:<PrivacyPolicy/>
      },

      {
        path:"/shippingandreturns",
        element:<ShippingAndReturns/>
      },

      {
        path:"/faq",
        element:<FAQ/>
      },
      {
        path:"/sizeguide",
        element:<SizeGuide/>
      },
      {
        path:"/resetpassword/:uid/:token",
        element:<ResetPassword/>
      },
      {
        path:"/checkout",
        element:<CheckoutPage/>
      },
      {
        path:"/featured",
        element:<FeaturedPage/>
      },
      {
        path:"/contactus",
        element:<ContactPage/>
      }
  

    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
  
}

export default App;