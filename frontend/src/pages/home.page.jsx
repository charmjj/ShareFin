import React from 'react';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Header from './Header';

const mainFeaturedPost = {
  title: 'Professional investment at a fractional cost',
  description:
    "Rather than purchasing a full subscription, pay a minimal subscription fee to gain access to financial data tools for a capped number of hours each week.",
  image: 'https://source.unsplash.com/featured/?trading',
  imgText: 'main image description',
  
};

const featuredPosts = [
  {
    title: 'How it works',
    date: 'Aug 29',
    description:
      'We purchase subscriptions of financial market tools in bulk, and sell “slots” to you – this allows you to pay only for what you need!',
    image: 'https://source.unsplash.com/featured/?finance',
    imageText: 'Image Text',
  },
  {
    title: 'Products',
    date: 'Aug 28',
    description:
      'We offer professional financial market tools such as Koyfin, Eikon, Factset. Users can place trades and monitor real-time financial market data.',
    image: 'https://source.unsplash.com/featured/?money',
    imageText: 'Image Text',
  },
];



function HomePage() {

  return (
    <React.Fragment>
      <Container maxWidth="lg" margin="5px">
      <Header />
        <main>
          
        <Container></Container>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer title="ShareFin" description="Professional Investment at Fractional Cost" />
    </React.Fragment>
    
  )
}

export default HomePage;