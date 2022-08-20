import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FcAbout, FcHome } from "react-icons/fc";
import { FiKey, FiMenu } from "react-icons/fi";

const Navbar = () => (
  <Flex p={2} borderBottom={1} borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft={2}>
        Estator
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FiMenu size={30} />}
          variant="outlined"
          color="gray.600"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
