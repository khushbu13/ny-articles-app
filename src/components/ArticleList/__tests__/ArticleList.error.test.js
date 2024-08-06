import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ArticlesList from "../ArticlesList";
import { Provider } from "react-redux";

jest.mock("../../../services/articles", () => ({
  useGetArticlesQuery: () => ({
    isLoading: false,
    error: true,
  }),
}));

const mockStore = configureStore();

it("renders error", () => {
  const store = mockStore({ days: 1 });
  render(
    <Provider store={store}>
      <ArticlesList />
    </Provider>
  );
  expect(screen.getByTestId("error")).toBeInTheDocument();
});
