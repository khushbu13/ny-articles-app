import React from "react";
import { render, screen } from "@testing-library/react";
import ArticlesList from "../../ArticleList/ArticlesList";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

jest.mock("../../../services/articles", () => ({
  useGetArticlesQuery: () => ({
    isLoading: true,
  }),
}));

const mockStore = configureStore();

it("renders loading", async () => {
  const store = mockStore({ days: 1 });
  render(
    <Provider store={store}>
      <ArticlesList />
    </Provider>
  );
  expect(screen.getByTestId("loading")).toBeInTheDocument();
});
