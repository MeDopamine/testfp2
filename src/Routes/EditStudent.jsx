import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    useToast,
    Center,
    useColorModeValue,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const PhotoProfile = ({image}) => {
    const IMAGE = image;
    return( 
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 3,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(25px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
            </Box>
        </Center>
    );
}

const Form1 = ({ id, passingValue }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchStudent = async (id) => {
            try {
                const response = await fetch(`http://localhost:3001/student/${id}`);
                const data = await response.json();
                setStudent((prevState) => ({
                    ...prevState,
                    fullname: data.fullname,
                    birthDate: data.birthDate,
                    gender: data.gender,
                    programStudy: data.programStudy,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    profilePicture: data.profilePicture,
                }));
                setIsLoading(!isLoading)
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudent(id);
    }, [id]);

    const [ student, setStudent] = useState({
        fullname: '',
        gender: '',
        phoneNumber: '',
        birthDate: '',
        address: '',
        profilePicture: '',
        programStudy: '',
    });

    useEffect(() => {
        passingValue(student)
    }, [student])

    const handleChange = (name, value) => {
        setStudent({ ...student, [name]: value });
    };

    const handleDateChange = (date) => {
        setStudent({ ...student, ['birthDate']: date });
    };

    return (
        <>
            {isLoading?
            <p>Loading ...</p>
            :
            <>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Edit Data
                </Heading>
                <PhotoProfile image={student.profilePicture}/>
                <Flex>
                    <FormControl mt='2%' mr="5%">
                        <FormLabel htmlFor="fullname" fontWeight={'normal'}>
                            Fullname
                        </FormLabel>
                        <Input
                            id="input-name"
                            type="text"
                            data-testid="name"
                            name="fullname"
                            placeholder="Full Name"
                            value={student.fullname}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="gender" fontWeight={'normal'}>
                            Gender
                        </FormLabel>
                        <Select
                            id="input-gender"
                            data-testid="gender"
                            name="gender"
                            placeholder='Select'
                            value={student.gender}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        >
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </Select>
                    </FormControl>
                </Flex>

                <Flex>
                    <FormControl mt='2%' mr="5%">
                        <FormLabel htmlFor="phoneNumber" fontWeight={'normal'}>
                            Phone Number
                        </FormLabel>
                        <InputGroup>
                            <InputLeftAddon children='+62' />
                            <Input
                                type="text"
                                id="input-phone"
                                data-testid="phoneNumber"
                                name="phoneNumber"
                                placeholder='Number'
                                value={student.phoneNumber}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="programStudy" fontWeight={'normal'}>
                            Program Study
                        </FormLabel>
                        <Select
                            id="input-prody"
                            data-testid="prody"
                            name="programStudy"
                            placeholder='Select'
                            defaultValue={student.programStudy}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        >
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </Select>
                    </FormControl>
                </Flex>

                <Flex>
                    <FormControl mt='2%' mr="5%">
                        <FormLabel htmlFor="profilPicture" fontWeight={'normal'}>
                            Profil Picture
                        </FormLabel>
                        <Input
                            disabled
                            type="text"
                            name="profilePicture"
                            placeholder="Profile Picture"
                            defaultValue={student.profilePicture}
                        />
                    </FormControl>
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="birthDate" fontWeight={'normal'}>
                            Birth Date
                        </FormLabel>
                        <DatePicker
                            // type="date"
                            id="input-date"
                            data-testid="date"
                            name="birthDate"
                            placeholder='Date picker placeholder'
                            defaultValue={student.birthDate}
                            onChange={handleDateChange}
                        />
                    </FormControl>
                </Flex>

                <FormControl mt="2%">
                    <FormLabel htmlFor="address" fontWeight={'normal'}>
                        Address
                    </FormLabel>
                    <Textarea
                        rows={4}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                        name="address"
                        type="text"
                        id="input-address"
                        data-testid="address"
                        placeholder="Address"
                        value={student.address}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                    <FormHelperText>We'll never share your Data.</FormHelperText>
                </FormControl>
            </>
            }
        </>
    );
};

const EditStudent = () => {
    const { id } = useParams();
    // const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [dataStudent, setDataStudent] = useState({
        fullname: "",
        birthDate: "",
        gender: "",
        programStudy: "",
        address: "",
        phoneNumber: "",
        profilePicture: "",
    });
    let navigate = useNavigate();

    const passingValue = (data) => {
        setDataStudent((prevData) => ({ ...prevData, ...data }));
    };

    const handleEditData = async (e) => {
        setIsLoading(!isLoading)
        e.preventDefault();

        const faculties = {
            "Ekonomi": "Fakultas Ekonomi",
            "Manajemen": "Fakultas Ekonomi",
            "Akuntansi": "Fakultas Ekonomi",
            "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
            "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
            "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
            "Teknik Sipil": "Fakultas Teknik",
            "Arsitektur": "Fakultas Teknik",
            "Matematika": "Fakultas Teknologi Informasi dan Sains",
            "Fisika": "Fakultas Teknologi Informasi dan Sains",
            "Informatika": "Fakultas Teknologi Informasi dan Sains"
        };
        const dataStudentUpdate = {
            ...dataStudent,
            faculty: faculties[dataStudent.programStudy],
        }
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataStudentUpdate),
            });
            setIsLoading(!isLoading)
            navigate("/student");
        } catch (error) {
            console.log(error);
        }
    };
    // if (isLoading) {
    //     return <p>Loading ...</p>;
    // }

    return (
        <>
            <NavBar screenName={'edit'}/>
            {isLoading ?
                <p>Loading ...</p>
                :
                <>

                    {/* <img src={student.profilePicture} alt="Profile Picture" /> */}
                    <Box h='auto' my={5}>
                        <Flex height="100%" alignItems="center" justifyContent="center">
                            <Box
                                borderWidth="1px"
                                rounded="lg"
                                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                                width='80%'
                                maxWidth={800}
                                h='93%'
                                p={7}
                                as="form">

                                <Form1 isLoading={isLoading} id={id} passingValue={passingValue} />

                                <ButtonGroup mt="5%" w="100%">
                                    <Flex w="100%" justifyContent="space-between">


                                        <Button
                                            w="7rem"
                                            colorScheme="cyan"
                                            variant="solid"
                                            id="add-btn"
                                            data-testid="edit-btn"
                                            onClick={handleEditData}>
                                            Submit
                                        </Button>

                                    </Flex>
                                </ButtonGroup>
                            </Box>
                        </Flex>
                    </Box>
                </>
            }
            <Footer />
        </>
    );
};

export default EditStudent;
