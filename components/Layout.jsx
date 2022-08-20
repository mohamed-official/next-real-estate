import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box maxW={1280} m="auto">
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default Layout;
