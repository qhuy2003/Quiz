import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/LoginPage";
import UserPage from "../pages/User/UserPage";
import SignUp from "../pages/Signup/SignUpPage";

const publicRoutes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/login",
    page: Login,
  },
  {
    path: "/signup",
    page: SignUp,
  },
];

const privateRoutes = [
  {
    path: "/user",
    page: UserPage,
  },
];

export { publicRoutes, privateRoutes };
