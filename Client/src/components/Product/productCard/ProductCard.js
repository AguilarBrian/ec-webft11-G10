import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useStyles } from './styles'
import defaultImg from './default.png'
import { addToCart } from '../../../store/user/user.actions';
import { useDispatch } from "react-redux";

export default function ProductCard({ id, img, name, description, price }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  const product = { id, img, name, description, price }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/products/${id}`)}>
        <CardMedia
          component="img"
          alt="Food"
          height="140"
          image={!img ? defaultImg : img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {!name ? 'Some food' : name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {!description ? 'Food is great to eat, it makes you healthy! Sometimes...' : description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant='h5'>
          ${!price ? 150 : price}
        </Typography>
      </CardActions>
      <Button variant="contained"
        color="primary"
        onClick={() => dispatch(addToCart(product))}
      >
        ADD TO CART
      </Button>
    </Card>
  );
}