import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: (p) => (p.isLarge ? "100%" : 240),
    width: "100%",
    marginBottom: "3rem",
  },
  media: {
    height: (p) => (p.isLarge ? 180 : 120),
  },
}));

const MediaCard = ({
  imageTitle,
  imageUrl,
  onClick,
  strGlass,
  strIngredient1,
  strIngredient2,
  strIngredient3,
}) => {
  const isLarge =
    (strGlass && strIngredient1 && strIngredient2 && strIngredient3) || false;
  const classes = useStyles({ isLarge });

  return (
    <Card onClick={onClick} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent>
          <Typography component="p" variant="h6">
            {imageTitle}
          </Typography>
          {isLarge && (
            <>
              <div>
                <Typography component="p">Glass type: {strGlass}</Typography>
              </div>
              <div>
                <Typography component="p">
                  Ingredients: {strIngredient1}, {strIngredient2},
                  {strIngredient3}
                </Typography>
              </div>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MediaCard.propTypes = {
  imageTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  strGlass: PropTypes.string,
  ingredient1: PropTypes.string,
  ingredient2: PropTypes.string,
  ingredient3: PropTypes.string,
};

export default MediaCard;
