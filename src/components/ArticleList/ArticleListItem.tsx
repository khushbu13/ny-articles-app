import React, { useCallback } from "react";
import PropTypes, { shape } from "prop-types";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

const ArticlesListItem = ({
  article: { published_date, title, abstract, media, url },
}) => {
  const media_metadata = media?.[0]?.["media-metadata"];
  const onClick = useCallback(() => window.open(url, "_blank")?.focus(), [url]);
  return (
    <>
      {/* <ListItem
        data-testid="article-item"
        sx={{ cursor: "pointer" }}
        onClick={onClick}
        alignItems="flex-start"
      >
        <ListItemText primary={title} secondary={abstract} />
      </ListItem> */}
      <Card data-testid="article-item">
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
