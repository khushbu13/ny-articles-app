export interface ArticlesListResponse {
  results: [ArticleType];
}

export interface ArticleType {
  title: string;
  abstract: string;
  id: string;
  url: string;
  section: string;
  byline: string;
}
