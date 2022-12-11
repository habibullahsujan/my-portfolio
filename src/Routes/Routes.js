import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blog /> },
      {
        path: "/project-details/:id",
        element: <ProjectDetails />,
        loader: ({ params }) => fetch(`https://portfolio-server-kappa.vercel.app/project-details/${params.id}`),
      },
    ],
  },
]);
