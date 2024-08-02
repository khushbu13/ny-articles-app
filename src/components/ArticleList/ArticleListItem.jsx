import React from "react";
import PropTypes from 'prop-types';
import { Divider, ListItem, ListItemText } from "@mui/material";
import { useLinkClickHandler } from "react-router-dom";

const ArticlesListItem = ({ article: { id, title, abstract } }) => {
    const onClick = useLinkClickHandler(`/article/${id}`)
    return <>
        <ListItem sx={{ cursor: "pointer" }} onClick={onClick} alignItems="flex-start">
            <ListItemText
                primary={title}
                secondary={abstract}
            />
        </ListItem>
        <Divider component="li" />
    </>
}

ArticlesListItem.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
    })
}

export default ArticlesListItem;