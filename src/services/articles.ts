import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_KEY, BASE_URL } from "../constants.ts";
import { ArticlesListResponse } from "./article.type";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesListResponse, number>({
      query: (days) => `viewed/${days}.json?api-key=${APP_KEY}`,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
