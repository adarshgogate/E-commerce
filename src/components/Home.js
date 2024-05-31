import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import shopifyImage from '../components/Shopify Home.jpg';
import Samsung from '../components/Samsung.jpg';
import Laptop from '../components/Laptop.jpg';
import Nothing from '../components/Nothing.jpg';

function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Samsung Galaxy S24 Ultra 5G AI",
      description: "This is a great product with excellent features and benefits.",
      price: "₹999",
      brand: "Brand A",
      image: Samsung
    },
    {
      id: 2,
      title: "HP Pavilion 15",
      description: "This is another great product that offers amazing value.",
      price: "₹1499",
      brand: "Brand B",
      image: Laptop
    },
    {
      id: 3,
      title: "Nothing",
      description: "A top-notch product with high-quality materials and performance.",
      price: "₹1999",
      brand: "Brand C",
      image: Nothing
    },
  ];

  return (
    <Container sx={{ padding: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          textAlign: 'center',
          mb: 4,
          backgroundImage: `url(${shopifyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          padding: 4,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 2,
          }}
        ></Box>
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'white' }}>
            Welcome to Our E-commerce Store
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mt: 2, color: 'white' }}>
            Discover amazing products and great deals!
          </Typography>
        </Box>
      </Box>

      {/* Promotional Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Big Summer Sale!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Save up to 50% on selected items.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Section */}
      <Box>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.brand}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Sections */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Why Shop With Us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We offer the best products at the best prices. Enjoy fast shipping and excellent customer service.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
