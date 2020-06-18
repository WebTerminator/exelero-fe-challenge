import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    width: "100%",
    marginBottom: "3rem",
  },
  media: {
    height: 120,
  },
});

export default function MediaCard({ imageTitle, imageUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom component="p">
            {imageTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
