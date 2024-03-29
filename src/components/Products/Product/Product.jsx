import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image && product.image.url} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant = "h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant = "h5" gutterBottom>
                    {product.price.formatted}
                </Typography>
                <Typography dangerouslySetInnerHTML= {{ __html: product.description }} variant = "body2" color="textSecondary" />
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>

                </CardActions>
            </div>
        </CardContent>

    </Card>
  )
}

export default Product