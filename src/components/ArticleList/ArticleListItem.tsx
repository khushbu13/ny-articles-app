import React from "react";
import PropTypes, { shape } from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useLinkClickHandler } from "react-router-dom";

const ArticlesListItem = ({
  article: { id, published_date, title, abstract, media },
}) => {
  const media_metadata = media?.[0]?.["media-metadata"];
  const onClick = useLinkClickHandler(`/article/${id}`);
  return (
    <>
      <Card data-testid="article-item">
        <CardActionArea onClick={onClick}>
          <CardHeader title={title} subheader={published_date}></CardHeader>
          <CardContent>
            <Typography
              data-testid="abstract"
              variant="body2"
              color="text.secondary"
            >
              {abstract}
            </Typography>
            <CardMedia
              component="img"
              sx={{ maxWidth: "50%" }}
              image={media_metadata?.[1].url}
              alt="hero image"
            ></CardMedia>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* <Divider component="li" /> */}
    </>
  );
};

ArticlesListItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    byline: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    published_date: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(
      shape({
        media_metadata: PropTypes.arrayOf(
          shape({
            url: PropTypes.string,
          })
        ),
      })
    ).isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ArticlesListItem;
