import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import EnterOTP from "../pages/Auth/EnterOTP";
import AuthLayout from "../layout/AuthLayout";
import SignIn from "../pages/Auth/SignIn";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import CreateNewPassword from "../pages/Auth/CreateNewPassword";
import ResetOTP from "../pages/Auth/ResetOTP";
import { Match } from "../pages/Match/Match";
import PrivateLayout from "../layout/PrivateLayout";
import Soul from "../pages/Soul/Soul";
import BlogList from "./../pages/BlogList/BlogList";
import BlogContent from "../pages/BlogContent/BlogContent";
import Chat from "../pages/Chat/Chat";
import Tutorial from "../pages/Tutorial/Tutorial";
import Profile from "../pages/Profile/Profile";
import Premium from "../pages/Premium/Premium";
import LimeLightPrice from "../pages/LimeLightPrice/LimeLightPrice";
import Reward from "../pages/Reward/Reward";
import OnBordingLayout from "../layout/OnBordingLayout";
import AllPages from "../pages/AllPages/AllPages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog-content",
        element: <BlogContent />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "enter-OTP",
        element: <EnterOTP />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "create-new-password",
        element: <CreateNewPassword />,
      },

      {
        path: "reset-otp",
        element: <ResetOTP />,
      },
    ],
  },

  {
    path: "/auth/on-boarding",
    element: <OnBordingLayout />,
  },

  {
    
    path: "/all-pages",
    element: <AllPages />,
  
  },

  {
    path: "/user",
    element: <PrivateLayout />,
    children: [
      {
        path: "/user/match",
        element: <Match />,
      },
      {
        path: "/user/find-your-soul",
        element: <Soul />,
      },
      {
        path: "/user/chat",
        element: <Chat />,
      },
      {
        path: "/user/tutorial",
        element: <Tutorial />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/premium",
        element: <Premium />,
      },
      {
        path: "/user/lime-light-price",
        element: <LimeLightPrice />,
      },
      {
        path: "/user/Reward",
        element: <Reward />,
      },
    ],
  },
]);

export default router;
