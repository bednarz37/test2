import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

type ProductsCardPropsType = {
  info: {
    name: string;
    products: Array<Object>;
  };
};

const useStyles = makeStyles({
  cardsWrapper: {
    display: 'flex'
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ProductsCard = ({ info }: ProductsCardPropsType) => {
  const classes = useStyles();
  return (
    <div className={classes.cardsWrapper}>
      {info.products.map((item: any) => (
        <Container maxWidth="md">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/150"
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default ProductsCard;
