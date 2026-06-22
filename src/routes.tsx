import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ErrorPage from "@/pages/Error";
import BlogPage from "@/pages/Blogs/Blog";
import BlogDetailsPage from "@/pages/Blogs/BlogDetails";
import BlogRootLayout from "@/pages/Blogs/BlogRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      {
        path: "blogs", Component: BlogRootLayout, children: [
          { index: true, Component: BlogPage },
          { path: ":postId", Component: BlogDetailsPage }
        ]
      },
    ]
  },
]);