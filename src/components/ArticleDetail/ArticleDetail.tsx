import React, { useCallback, useMemo } from "react";
import { useMatch, useLinkClickHandler } from "react-router-dom";
import { useGetArticlesQuery } from "../../services/articles.ts";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const ArticleDetail = () => {
  const match = useMatch("/article/:articleId");
  const days = useSelector((state: any) => state.days.days);
  const { data, error, isLoading } = useGetArticlesQuery(days);
  const backToList = useLinkClickHandler(`/articles`);
  const article = useMemo(
    () =>
      data?.results?.filter(
        (article) => article.id == match?.params.articleId
      )?.[0],
    [data, match?.params.articleId]
  );
  const onClick = useCallback(
    () => window.open(article?.url, "_blank")?.focus(),
    [article?.url]
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button onClick={backToList}>
          Back to List
        </Button>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {article?.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {isLoading && <>Loading...</>}
      {error && <>Some error occurred</>}
      {article && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            paddingTop: "50px",
          }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography
                data-testid="section"
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {article.section}
              </Typography>
              <Typography data-testid="title" gutterBottom variant="h5">
                {article.title}
              </Typography>
              <Typography
                data-testid="abstract"
                variant="body2"
                color="text.secondary"
              >
                {article.abstract}
              </Typography>
              <Typography
                data-testid="byline"
                variant="body2"
                color="text.secondary"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {article.byline}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                sx={{
                  cursor: "pointer",
                }}
                onClick={onClick}
              >
                View Full Article
              </Link>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default ArticleDetail;
