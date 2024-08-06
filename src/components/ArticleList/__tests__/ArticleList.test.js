import React from "react";
import { render, screen } from "@testing-library/react";
import ArticlesList from "../ArticlesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("../../../services/articles", () => ({
  useGetArticlesQuery: () => ({
    isLoading: false,
    error: false,
    data: {
      results: [{}],
    },
  }),
}));

const mockStore = configureStore();

jest.mock("../ArticleListItem", () => ({
  __esModule: true,
  default: () => <div data-testid="list-item"></div>,
}));

it("renders article list", () => {
  const store = mockStore({ days: 1 });
  render(
    <Provider store={store}>
      <ArticlesList />
    </Provider>
  );
  expect(screen.getByTestId("list-item")).toBeInTheDocument();
});
