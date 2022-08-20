import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box maxW={1280} m="auto">
      <header>Navbar</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Box>
  );
};

export default Layout;
