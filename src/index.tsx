import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ArticlesList from "./components/ArticleList/ArticlesList.tsx";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail.tsx";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/articles" replace />,
  },
  {
    path: "articles",
    element: <ArticlesList />,
  },
  {
    path: "article/:articleId",
    element: <ArticleDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
