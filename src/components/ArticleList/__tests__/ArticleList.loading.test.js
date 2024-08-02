import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from '../../ArticleList/ArticlesList';

jest.mock("../../../services/articles", () => ({
    useGetArticlesQuery: () => ({
        isLoading: true
    })
}))

it('renders loading', () => {
    render(<ArticlesList />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
});