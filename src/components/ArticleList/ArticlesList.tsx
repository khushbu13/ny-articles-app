import React from "react"
import { Box, List } from "@mui/material";
import ArticlesListItem from "./ArticleListItem.tsx";
import { useGetArticlesQuery } from "../../services/articles.ts";

const ArticlesList = () => {
    const { data, error, isLoading } = useGetArticlesQuery()
    return <>
        { isLoading && <div data-testid="loading">Loading...</div>}
        { error && <div data-testid="error">Some error occurred</div> }
        { data?.results && <Box 
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <List sx={{ width: '100%', bgcolor: 'background.paper' }} data-testid="article-list">
                    {data?.results?.map((article) => (
                        <ArticlesListItem article={article} key={article.id} />
                    ))}
                </List>
            </Box> 
        }
    </>
}

export default ArticlesList;