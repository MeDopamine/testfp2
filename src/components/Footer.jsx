import {
    Box,
    Image,
    chakra,
    Container,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import LogoRG from '../assets/Ruangguru-Logo.png'

const Logo = () =>{
    return(
        <Image src={LogoRG} alt="Logo" boxSize={8} width={14}/>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box
            className="footer"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            position="fixed"
            bottom={0}
            left={0}
            width="100%"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Flex>
                <Text>© 2023</Text>
                <p className="studentName" style={{ margin: '0 10px' }}>Ramadhan Wahyu</p>
                <p className="studentId" style={{ margin: '0 10px' }}>FE4799827</p>
                </Flex>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;