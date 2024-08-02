import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from '../ArticlesList';

jest.mock("../../../services/articles", () => ({
    useGetArticlesQuery: () => ({
        isLoading: false,
        error: true
    })
}))

it('renders error', () => {
    render(<ArticlesList />);
    expect(screen.getByTestId('error')).toBeInTheDocument();
});