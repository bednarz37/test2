import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: (props: any) => props.styles.background
  },
  root: {
    flexGrow: 0,
    marginRight: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    order: (props: any) => props.styles.order.title
  },
  menu: {
    order: (props: any) => props.styles.order.menu
  },
  linkButton: {
    order: (props: any) => props.styles.order.linkButton
  }
}));

const Navbar = ({
  title,
  link,
  menu,
  styles = {
    order: { title: 1, menu: 2, linkButton: 3 },
    background: 'green'
  }
}: any) => {
  const classes = useStyles({ styles: styles });
  const { push } = useHistory();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="regular">
        <Typography variant="h2" component="h1" className={classes.title}>
          {title}
        </Typography>
        <Container maxWidth="md" className={classes.menu}>
          <ButtonGroup
            color="inherit"
            aria-label="outlined secondary button group"
          >
            {menu.map((item: any) => (
              <Button onClick={() => push(item.path)}>{item.name}</Button>
            ))}
          </ButtonGroup>
        </Container>
        <Button
          className={classes.linkButton}
          variant="contained"
          color="secondary"
          onClick={() =>
            push(link.path, { slideAnimation: 'withSlideAnimation' })
          }
        >
          {link.name}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
