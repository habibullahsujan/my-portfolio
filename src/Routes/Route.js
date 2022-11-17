import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Resume from "../Components/Resume/Resume";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/contact", element: <Contact /> },
      { path: "/", element: <Home /> },
      {path:'/about', element:<About/>},
      {path:'/resume', element:<Resume/>}
    ],
  },
]);
