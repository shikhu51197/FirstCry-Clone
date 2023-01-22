import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
const Catbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [mds] = useMediaQuery("(min-width: 1194px)");
  return (
    <Box>
      <Flex
        bg={useColorModeValue("rgb(254,221,0)", "rgb(254,221,0)")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        borderBottom={0}
        borderStyle={"solid"}
        w="100%"
        // border={"2px solid "}
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} display={mds ? "none" : "flex"}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={"start"}>
          <Flex display={mds ? "flex" : "none"}>
            <DesktopNav />
          </Flex>
        </Flex>
        {/* <Box  border="2px solid red" ml={"-10px"}>
        <Flex alignItems={"center"}>
        <Image src='https://cdn.fcglcdn.com/brainbees/images/n/club_logo.png'  h="20px"/>
        <Image src='https://cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.webp' />
        </Flex>
        </Box> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} marginLeft={100}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "/product"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent bg={popoverContentBgColor} p={4}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, Img }) => {
  return (
    <Link
      href={href}
      role={"group"}
      _hover={{ bg: useColorModeValue("yellow.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "yellow.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
          <Image src={Img} />
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Box>
      <Box display="flex" ml={9} marginTop={5}>
        <Box>
          <Icon className="IC" fontSize="20px">
            <BsFillCartFill />
          </Icon>
        </Box>
        <Box ml={3}>
          <Icon className="IC" fontSize="20px">
            <BiSearch />
          </Icon>
        </Box>
        <Box ml={3}>
          <Icon className="IC" fontSize="20px">
            <FaUserAlt />
          </Icon>
        </Box>
      </Box>
      <Stack bg={useColorModeValue("white", "gray.800")} p={4}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "/product"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // All CATEGORYIES
  {
    label: "ALL CATEGORIES",
    children: [
      {
        label: "BOY FASHION",

        href: "/product",
      },
      {
        label: "GRILS FASTION",

        href: "/product",
      },
      {
        label: "FOOTWEAR",

        href: "/product",
      },
      {
        label: "DIAPERING",

        href: "/product",
      },
      {
        label: "GEAR",

        href: "/product",
      },
      {
        label: " FOOTWEAR",

        href: "/product",
      },
      {
        label: "TOYS",

        href: "/product",
      },
      {
        label: "DIAPERING",

        href: "/product",
      },
      {
        label: "GEAR",

        href: "/product",
      },
      {
        label: "FEEDING",

        href: "/product",
      },
      {
        label: "BATH",

        href: "/product",
      },
      {
        label: "BOUTIQUES",

        href: "/product",
      },
      {
        label: "NURSERY",

        href: "/product",
      },
      {
        label: "HEALTH & SAFETY ",

        href: "/product",
      },
    ],
  },
  {
    label: "GIRLS FASHION",
    children: [
      {
        Img: "https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_girl_sio_060123.jpg",
        label: "Sweaters NEW",
        href: "/product",
      },
      {
        label: "Thermals NEW",

        href: "/product",
      },
      {
        label: "Ethnic Wear",

        href: "/product",
      },
      {
        label: "Party Wear NEW",

        href: "/product",
      },
      {
        label: " Onesies & Rompers",

        href: "/product",
      },
      {
        label: " Pajamas & Leggings",

        href: "/product",
      },
      {
        label: " Nightwear ",

        href: "/product",
      },
      {
        label: "Jumpsuits & Dungarees ",

        href: "/product",
      },
      {
        label: "Athleisure & Sportswear ",

        href: "/product",
      },
      {
        label: "Shorts & Skirts ",

        href: "/product",
      },
    ],
  },

  {
    label: " BOYS FASHION",
    children: [
      {
        Img: "https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_boy_sio_060123.jpg",
        label: "Sweaters NEW",
        href: "/product",
      },
      {
        label: "Sets & Suits",

        href: "/product",
      },
      {
        label: "T-shirt",

        href: "/product",
      },
      {
        label: "Party Wear NEW",

        href: "/product",
      },
      {
        label: " Shirts",

        href: "/product",
      },
      {
        label: " jeans & Trousers",

        href: "/product",
      },
      {
        label: " Jackets ",

        href: "/product",
      },
      {
        label: "Ethnic Wear ",

        href: "/product",
      },
      {
        label: "Athleisure & Sportswear ",

        href: "/product",
      },
      {
        label: "Pajamas & Joggers",

        href: "/product",
      },
    ],
  },

  {
    label: "FOOTWEAR",
    children: [
      {
        Img: "https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_footwear_mom_070123.jpg",
        label: "Sweaters NEW",
        href: "/product",
      },
      {
        label: "Casual Shoes",

        href: "/product",
      },
      {
        label: "Sandals",

        href: "/product",
      },
      {
        label: "Bellies & Peep To",

        href: "/product",
      },
      {
        label: " Flip Flops",

        href: "/product",
      },
      {
        label: " Mojaris/Ethnic Footwear",

        href: "/product",
      },
      {
        label: " School Shoes ",

        href: "/product",
      },
      {
        label: "Winter Boots ",

        href: "/product",
      },
      {
        label: "Athleisure & Sportswear ",

        href: "/product",
      },
      {
        label: "Sports shoes ",

        href: "/product",
      },
    ],
  },

  {
    label: "TOYS",
    children: [
      {
        Img: "https://cdn.fcglcdn.com/brainbees/images/n/desk_menu_toy_07012021.jpg",
        label: "Sweaters NEW",
        href: "/product",
      },
      {
        label: "Musical Toys",

        href: "/product",
      },
      {
        label: "Learning & Educational Toys",

        href: "/product",
      },
      {
        label: "Soft Toys",

        href: "/product",
      },
      {
        label: "Backyard Play",

        href: "/product",
      },
      {
        label: "Play Gyms & Playmats",

        href: "/product",
      },
      {
        label: "Sports & Games ",

        href: "/product",
      },
      {
        label: "Kids Puzzles ",

        href: "/product",
      },
      {
        label: "Toys Cars Trains & Vehicles ",

        href: "/product",
      },
      {
        label: "Kids Musical Instruments ",

        href: "/product",
      },
    ],
  },
  {
    label: "DIAPRING",
    children: [
      {
        label: "Diaper Pants",
        href: "/product",
      },
      {
        label: "Taped Diapers",

        href: "/product",
      },
      {
        label: "Diaper Rash Cream",

        href: "/product",
      },
      {
        label: "Baby Wipes",

        href: "/product",
      },
      {
        label: "Cloth Diaper Training Pants & Inserts",

        href: "/product",
      },
      {
        label: "Cloth Nappies & Accessories ",

        href: "/product",
      },
      {
        label: "  Bed Protectors",

        href: "/product",
      },
      {
        label: "Diaper Bags & Backpacks",

        href: "/product",
      },
      {
        label: "Diaper Bins & Disposable Bags ",

        href: "/product",
      },
      {
        label: " Waterproof Nappies",

        href: "/product",
      },
    ],
  },
  {
    label: "FEEDING",
    children: [
      {
        label: "Baby Food & Infant Formula",
        href: "/product",
      },
      {
        label: "Feeding Bottles & Teats",

        href: "/product",
      },
      {
        label: "Breast Feeding",

        href: "/product",
      },
      {
        label: "Sippers & Cups",

        href: "/product",
      },
      {
        label: "Bibs & Hankies ",

        href: "/product",
      },
      {
        label: "Kids Foods & Supplements ",

        href: "/product",
      },
      {
        label: "Teethers & Pacifiers ",

        href: "/product",
      },
      {
        label: "Sterilizers & Warmers ",

        href: "/product",
      },
    ],
  },
  {
    label: "BATH",
    children: [
      {
        label: "Lotions, Oils & Powders",
        href: "/product",
      },
      {
        label: "Soaps & Body Wash",

        href: "/product",
      },
      {
        label: "Shampoos & Conditioners",

        href: "/product",
      },
      {
        label: "Baby Creams & Ointments",

        href: "/product",
      },
      {
        label: "Bath Tubs & Bathers",

        href: "/product",
      },
      {
        label: "Bathing Accessories",

        href: "/product",
      },
      {
        label: " Grooming Essentials ",

        href: "/product",
      },
      {
        label: "Bath Towels & Robes",

        href: "/product",
      },
    ],
  },

  {
    label: "NURSERY",
    children: [
      {
        label: "Blankets, Quilts & Wrappers",
        href: "/product",
      },
      {
        label: "Cots, Cradles & Playpens",

        href: "/product",
      },
      {
        label: "Wardrobes & Storage",

        href: "/product",
      },
      {
        label: "Mosquito Nets",

        href: "/product",
      },
      {
        label: "Baby Bedding Sets & Pillows",

        href: "/product",
      },
    ],
  },
  {
    label: "MOMS",
    children: [
      {
        label: "Nursing/Sleep Wear",
        href: "/product",
      },
      {
        label: "Maternity Dresses & Skirts",

        href: "/product",
      },
      {
        label: "Maternity Lingerie",

        href: "/product",
      },
      {
        label: "Maternity Bottom wear",

        href: "/product",
      },
      {
        label: "Maternity Ethnic Wear ",

        href: "/product",
      },
      {
        label: " Maternity Tops",

        href: "/product",
      },
      {
        label: " Maternity Tops ",

        href: "/product",
      },
    ],
  },
  {
    label: "HEALTH",
    children: [
      {
        label: "Cleansers & Detergents",
        href: "/product",
      },
      {
        label: "Oral Care",

        href: "/product",
      },
      {
        label: "Childproofing & Safety",

        href: "/product",
      },
      {
        label: "Mosquito Repellents & Care",

        href: "/product",
      },
      {
        label: "Medical Care ",

        href: "/product",
      },
      {
        label: "Protection Face Masks & Gear",

        href: "/product",
      },
    ],
  },
  {
    label: "BOUTIQUES",
    children: [
      {
        label: "New Today",
        href: "/product",
      },
      {
        label: "Bestsellers",

        href: "/product",
      },
      {
        label: "Last Day",

        href: "/product",
      },
    ],
  },
];
export default Catbar;
