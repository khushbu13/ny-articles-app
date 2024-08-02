import articles from '../fixtures/articles.json'

describe('template spec', () => {
  it('passes', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?*',
      },
      articles
    )
    cy.visit('http://localhost:3000');
  })
})