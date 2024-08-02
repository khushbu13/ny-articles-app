import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from '../../components/ArticleList/ArticlesList';

jest.mock("../../services/articles", () => ({
    useGetArticlesQuery: () => ({
        isLoading: false,
        error: false,
        data: {
            results: [{}]
        }
    })
}))

jest.mock("../../components/ArticleList/ArticleListItem", () => ({
    __esModule: true,
    default: () => (<div  data-testid="list-item"></div>)
}))

it('renders article list', () => {
    render(<ArticlesList />);
    expect(screen.getByTestId('list-item')).toBeInTheDocument();
});