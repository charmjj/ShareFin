import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ShareFin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    "header": "Eikon",
    "description": "Refinitiv Eikon is an open-technology solution for financial markets professionals, providing access to industry-leading data, insights, and exclusive and trusted news.",
    "image": "data:image/png;base64,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"
  }, {
    "header": "Koyfin",
    "description": "Koyfin is a financial data and analytics platform for researching stocks and understanding market trends. Our data coverage includes stocks, ETFs, mutual funds, FX, bonds, economics, news, and Twitter so you can have a god-like view of the markets.",
    "image": "https://thumb.tildacdn.com/tild6135-3464-4534-b638-646166346262/-/resize/560x/-/format/webp/download.png"
  }, {
    "header": "Factset",
    "description": "FactSet creates data and software solutions for tens of thousands of investment professionals around the world, providing instant access to financial data and analytics that investors use to make crucial investment decisions.",
    "image": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F141184%2Ffactset-companysource.png&w=700&op=resize"
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Leverage on the market's standard
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Gain access to financial data tools at an affordable price that has fully equipped information for your own fundamental and technical analysis.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.header}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="white" style={{backgroundColor:"lightgreen"}} component="a" href="/pricing">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        ShareFin
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Professional Investment at Fractional Cost
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
