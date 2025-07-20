import { Box } from '@mui/material';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Box>
  );
};

export default Index;
