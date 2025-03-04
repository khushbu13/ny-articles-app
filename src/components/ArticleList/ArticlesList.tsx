import React from "react";
import {
  AppBar,
  Box,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ArticlesListItem from "./ArticleListItem.tsx";
import { setDays } from "../../redux/slices/daysSlice.ts";
import { useGetArticlesQuery } from "../../services/articles.ts";

const ArticlesList = () => {
  const days = useSelector((state: any) => state.days.days);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetArticlesQuery(Number(days));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              NY Times most popular articles
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Typography align="center" marginTop={"40px"}>
        <FormControl fullWidth={false}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Select the time period
          </InputLabel>
          <NativeSelect
            onChange={(event) =>
              dispatch(setDays(Number(event?.target?.value)))
            }
            defaultValue={days}
            inputProps={{
              name: "days",
              id: "uncontrolled-native",
            }}
          >
            <option value={1}>Yesterday</option>
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
          </NativeSelect>
        </FormControl>
      </Typography>
      <Box marginTop={5}>
        {isLoading && <div data-testid="loading">Loading...</div>}
        {error && <div data-testid="error">Some error occurred</div>}
        {data?.results && (
          <Grid
            container
            minHeight={"400px"}
            data-testid="article-list"
            key={"grid-container"}
          >
            {data?.results?.map((article) => (
              <Grid
                item
                key={`grid${article.id}`}
                xs={12}
                md={6}
                lg={4}
                padding={1}
                minHeight={"400px"}
              >
                <ArticlesListItem article={article} key={article.id} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default ArticlesList;
