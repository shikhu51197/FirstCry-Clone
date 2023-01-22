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
  } from '@chakra-ui/react';
  import {BsFillCartFill} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {FaUserAlt}from "react-icons/fa"
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  const Catbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [mds] = useMediaQuery('(min-width: 1194px)')
    return (
      <Box>
      <Flex
        bg={useColorModeValue('rgb(254,221,0)', 'rgb(254,221,0)')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
      
        borderBottom={0}
        borderStyle={'solid'}
        w="100%"
        // border={"2px solid "}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={mds?"none":"flex"}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={"start"}>
         
          <Flex display={mds?"flex":"none"} >
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
    )
  }
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}   marginLeft={100}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  bg={popoverContentBgColor}
                  p={4}>
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
  
  const DesktopSubNav = ({ label, href, subLabel,Img }) => {
    return (
      <Link
        href={href}
        role={'group'}
        _hover={{ bg: useColorModeValue('yellow.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'yellow.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
            <Image src={Img}/>
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
            <Icon  className="IC" fontSize="20px">
<BsFillCartFill/>
            </Icon>
            </Box>  
            <Box ml={3}>
                
            <Icon  className="IC" fontSize="20px">
<BiSearch/>
            </Icon>
            </Box>
            <Box  ml={3}>
            <Icon  className="IC" fontSize="20px">
<FaUserAlt/>
            </Icon>
            </Box>
            </Box> 
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
       >
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
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
         
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
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
        label: 'ALL CATEGORIES',
        children: [
            {
                label: 'BOY FASHION',
               
     href: '#',
            },
            {
                label: 'GRILS FASTION',
        
                href: '#',
            },
            {
                label: 'FOOTWEAR',
        
                href: '#',
            },
            {
                label: 'DIAPERING',
        
                href: '#',
            },
            {
                label: 'GEAR',
        
                href: '#',
            },
            {
                label: ' FOOTWEAR',
        
                href: '#',
            },
                {
                label: 'TOYS',
        
                href: '#',
            },
                {
                label: 'DIAPERING',
        
                href: '#',
            },
                {
                label: 'GEAR',
        
                href: '#',
            },
                {
                label: 'FEEDING',
        
                href: '#',
            },
                {
                label: 'BATH',
        
                href: '#',
            },
                {
                label: 'BOUTIQUES',
        
                href: '#',
            },
                {
                label: 'NURSERY',
        
                href: '#',
            },
                {
                label: 'HEALTH & SAFETY ',
        
                href: '#',
            },

        ],
    },
    {
        label: 'GIRLS FASHION',
        children: [
            {
             
                Img:"https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_girl_sio_060123.jpg",
                label: 'Sweaters NEW',
           href: '#',
            },
            {
                label: 'Thermals NEW',
          
                href: '#',
            },
            {
                label: 'Ethnic Wear',
          
                href: '#',
            },
            {
                label: 'Party Wear NEW',
          
                href: '#',
            },
            {
                label: ' Onesies & Rompers',
          
                href: '#',
            },
            {
                label: ' Pajamas & Leggings',
          
                href: '#',
            },
            {
                label: ' Nightwear ',
          
                href: '#',
            },
            {
                label: 'Jumpsuits & Dungarees ',
          
                href: '#',
            },
            {
                label: 'Athleisure & Sportswear ',
          
                href: '#',
            },
            {
                label: 'Shorts & Skirts ',
          
                href: '#',
            },

        ],
    },


    {
        label: ' BOYS FASHION',
        children: [
            {
                
                Img:"https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_boy_sio_060123.jpg",
                label: 'Sweaters NEW',
           href: '#',
            },
            {
                label: 'Sets & Suits',
          
                href: '#',
            },
            {
                label: 'T-shirt',
          
                href: '#',
            },
            {
                label: 'Party Wear NEW',
          
                href: '#',
            },
            {
                label: ' Shirts',
          
                href: '#',
            },
            {
                label: ' jeans & Trousers',
          
                href: '#',
            },
            {
                label: ' Jackets ',
          
                href: '#',
            },
            {
                label: 'Ethnic Wear ',
          
                href: '#',
            },
            {
                label: 'Athleisure & Sportswear ',
          
                href: '#',
            },
            {
                label: 'Pajamas & Joggers',
          
                href: '#',
            },

        ],
    },


    {
        label: 'FOOTWEAR',
        children: [
            {
                Img:"https://cdn.fcglcdn.com/brainbees/images/n/desktop_drop_down_footwear_mom_070123.jpg",
                label: 'Sweaters NEW',
           href: '#',
            },
            {
                label: 'Casual Shoes',
          
                href: '#',
            },
            {
                label: 'Sandals',
          
                href: '#',
            },
            {
                label: 'Bellies & Peep To',
          
                href: '#',
            },
            {
                label: ' Flip Flops',
          
                href: '#',
            },
            {
                label: ' Mojaris/Ethnic Footwear',
          
                href: '#',
            },
            {
                label: ' School Shoes ',
          
                href: '#',
            },
            {
                label: 'Winter Boots ',
          
                href: '#',
            },
            {
                label: 'Athleisure & Sportswear ',
          
                href: '#',
            },
            {
                label: 'Sports shoes ',
          
                href: '#',
            },

        ],
    },



    {
        label: 'TOYS',
        children: [
            {
                Img:"https://cdn.fcglcdn.com/brainbees/images/n/desk_menu_toy_07012021.jpg",
                label: 'Sweaters NEW',
           href: '#',
            },
            {
                label: 'Musical Toys',
          
                href: '#',
            },
            {
                label: 'Learning & Educational Toys',
          
                href: '#',
            },
            {
                label: 'Soft Toys',
          
                href: '#',
            },
            {
                label: 'Backyard Play',
          
                href: '#',
            },
            {
                label: 'Play Gyms & Playmats',
          
                href: '#',
            },
            {
                label: 'Sports & Games ',
          
                href: '#',
            },
            {
                label: 'Kids Puzzles ',
          
                href: '#',
            },
            {
                label: 'Toys Cars Trains & Vehicles ',
          
                href: '#',
            },
            {
                label: 'Kids Musical Instruments ',
          
                href: '#',
            },

        ],
    },
    {
        label: 'DIAPRING',
        children: [
            {
                label: 'Diaper Pants',
           href: '#',
            },
            {
                label: 'Taped Diapers',
          
                href: '#',
            },
            {
                label: 'Diaper Rash Cream',
          
                href: '#',
            },
            {
                label: 'Baby Wipes',
          
                href: '#',
            },
            {
                label: 'Cloth Diaper Training Pants & Inserts',
          
                href: '#',
            },
            {
                label: 'Cloth Nappies & Accessories ',
          
                href: '#',
            },
            {
                label: '  Bed Protectors',
          
                href: '#',
            },
            {
                label: 'Diaper Bags & Backpacks',
          
                href: '#',
            },
            {
                label: 'Diaper Bins & Disposable Bags ',
          
                href: '#',
            },
            {
                label: ' Waterproof Nappies',
          
                href: '#',
            },

        ],
    },{
        label: 'FEEDING',
        children: [
            {
                label: 'Baby Food & Infant Formula',
           href: '#',
            },
            {
                label: 'Feeding Bottles & Teats',
          
                href: '#',
            },
            {
                label: 'Breast Feeding',
          
                href: '#',
            },
            {
                label: 'Sippers & Cups',
          
                href: '#',
            },
            {
                label: 'Bibs & Hankies ',
          
                href: '#',
            },
            {
                label: 'Kids Foods & Supplements ',
          
                href: '#',
            },
            {
                label: 'Teethers & Pacifiers ',
          
                href: '#',
            },
            {
                label: 'Sterilizers & Warmers ',
          
                href: '#',
            },
          

        ],
    },
    {
        label: 'BATH',
        children: [
            {
                label: 'Lotions, Oils & Powders',
           href: '#',
            },
            {
                label: 'Soaps & Body Wash',
          
                href: '#',
            },
            {
                label: 'Shampoos & Conditioners',
          
                href: '#',
            },
            {
                label: 'Baby Creams & Ointments',
          
                href: '#',
            },
            {
                label: 'Bath Tubs & Bathers',
          
                href: '#',
            },
            {
                label: 'Bathing Accessories',
          
                href: '#',
            },
            {
                label: ' Grooming Essentials ',
          
                href: '#',
            },
            {
                label: 'Bath Towels & Robes',
          
                href: '#',
            },
         

        ],
    },

    {
        label: 'NURSERY',
        children: [
            {
                label: 'Blankets, Quilts & Wrappers',
           href: '#',
            },
            {
                label: 'Cots, Cradles & Playpens',
          
                href: '#',
            },
            {
                label: 'Wardrobes & Storage',
          
                href: '#',
            },
            {
                label: 'Mosquito Nets',
          
                href: '#',
            },
            {
                label: 'Baby Bedding Sets & Pillows',
          
                href: '#',
            },]
    },
    {
        label: 'MOMS',
        children: [
            {
                label: 'Nursing/Sleep Wear',
           href: '#',
            },
            {
                label: 'Maternity Dresses & Skirts',
          
                href: '#',
            },
            {
                label: 'Maternity Lingerie',
          
                href: '#',
            },
            {
                label: 'Maternity Bottom wear',
          
                href: '#',
            },
            {
                label: 'Maternity Ethnic Wear ',
          
                href: '#',
            },
            {
                label: ' Maternity Tops',
          
                href: '#',
            },
            {
                label: ' Maternity Tops ',
          
                href: '#',
            },]
    },
    {
        label: 'HEALTH',
        children: [
            {
                label: 'Cleansers & Detergents',
           href: '#',
            },
            {
                label: 'Oral Care',
          
                href: '#',
            },
            {
                label: 'Childproofing & Safety',
          
                href: '#',
            },
            {
                label: 'Mosquito Repellents & Care',
          
                href: '#',
            },
            {
                label: 'Medical Care ',
          
                href: '#',
            },
            {
                label: 'Protection Face Masks & Gear',
          
                href: '#',
            },
          
          

        ],
      
    },
    {
        label: 'BOUTIQUES',
        children: [
            {
                label: 'New Today',
           href: '#',
            },
            {
                label: 'Bestsellers',
          
                href: '#',
            },
            {
                label: 'Last Day',
          
                href: '#',
            },]
    },
   
];
  export default Catbar