import articles from "../fixtures/articles.json";

describe("template spec", () => {
  it("passes", async () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?*",
      },
      articles
    );
    cy.visit("http://localhost:3000");
    await cy.get('[data-testid="article-list"]').should("be.visible");
    cy.get('[data-testid="article-item"]').first().click();
  });
});
