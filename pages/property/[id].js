import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import millify from "millify";
import Image from "next/image";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import {
  A11y,
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" overflow="hidden" margin="auto" p="4">
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        A11y,
        EffectCreative,
      ]}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      grabCursor={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={{ delay: 3000 }}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <Image
            placeholder="blur"
            blurDataURL={photo.url}
            src={photo.url}
            width={1000}
            height={550}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="green.400">
          {isVerified && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          AED {price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size="sm" src={agency?.logo?.url}></Avatar>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop="2">
      <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight="2" color="gray.600">
        {description}
      </Text>
    </Box>
    <Flex
      flexWrap="wrap"
      textTransform="uppercase"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Type</Text>
        <Text fontWeight="bold">{type}</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
      >
        <Text>Purpose</Text>
        <Text fontWeight="bold">{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Furnishing Status</Text>
          <Text fontWeight="bold">{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities.length && (
        <Text fontSize="2xl" fontWeight="black" marginTop="5">
          Facilites:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="blue.400"
              fontSize="l"
              p="2"
              bg="gray.200"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
