import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
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
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input'
const Form1 = ({ passingValue }) => {

    const [formData, setFormData] = useState({
        fullname: '',
        gender: '',
        phoneNumber: '',
        birthDate: null,
        address: '',
        profilePicture: '',
        programStudy: '',
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };


    useEffect(() => {
        const handleSubmit = () => {

            // passingValue(fullname);
            // console.log(fullname);
            passingValue(formData);
            console.log(formData);
        }
        handleSubmit();
    }, [formData])

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handleDateChange = (date) => {
        setFormData({ ...formData, ['birthDate']: date });
        // handleChange('birthDate', date);
    };

    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Student Data
            </Heading>
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
                        value={formData.fullname}
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
                        value={formData.gender}
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
                            value={formData.phoneNumber}
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
                        value={formData.programStudy}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    >
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi-publik">Administrasi Publik</option>
                        <option value="Administrasi-bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan-internasional">Hubungan Internasional</option>
                        <option value="Teknik-sipil">Teknik Sipil</option>
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
                        type="text"
                        id="input-profile-picture"
                        data-testid="profilePicture"
                        name="profilePicture"
                        placeholder="Profile Picture"
                        value={formData.profilePicture}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                </FormControl>

                {/* <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                            Birth Date
                        </FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            name="birthDate"
                            value={formData.birthDate} 
                            onChange={handleChange} 
                        />
                    </FormControl> */}

                <FormControl mt='2%'>
                    <FormLabel htmlFor="birthDate" fontWeight={'normal'}>
                        Birth Date
                    </FormLabel>
                    <DatePicker
                        // type="date"
                        id="input-date"
                        data-testid="date"
                        name="birthDate"
                        placeholder='Date'
                        defaultValue={formData.birthDate}
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
                    type="text"
                    id="input-address"
                    data-testid="address"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
                {/* <Input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                /> */}
                <FormHelperText>We'll never share your Data.</FormHelperText>
            </FormControl>

            {/* <FormControl>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl> */}
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                User Details
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Country / Region
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option>Indonesia</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    City
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    State / Province
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                About You
            </Heading>
            <SimpleGrid columns={1} spacing={5}>
                <FormControl as={GridItem} colSpan={[3, 3]}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Linkedin
                    </FormLabel>
                    <InputGroup size="sm">
                        <InputLeftAddon
                            bg="gray.50"
                            _dark={{
                                bg: 'gray.800',
                            }}
                            color="gray.500"
                            rounded="md">
                            http://
                        </InputLeftAddon>
                        <Input
                            type="tel"
                            placeholder="www.linkedin.com/in/example"
                            focusBorderColor="brand.400"
                            rounded="md"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl as={GridItem} colSpan={[3, 3]} mt={1}>
                    <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        About
                    </FormLabel>
                    <Textarea
                        placeholder="Describe Yourself"
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                    />
                </FormControl>
            </SimpleGrid>
        </>
    );
};

const AddStudent = () => {

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    const toast = useToast();
    const [isRefresh, setIsRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [lastId, setLastId] = useState(0);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        birthDate: "",
        gender: "Male",
        programStudy: "Ekonomi",
        profilePicture: "",
        address: "",
        phoneNumber: "",
    });
    useEffect(() => {
        fetchData();
    }, [isRefresh]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/student`);
            const jsonData = await response.json();
            const lastStudent = jsonData[jsonData.length - 1];
            const lastId = lastStudent ? lastStudent.id : 0;
            setLastId(lastId);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const passingValue = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        console.log(formData.programStudy);
        console.log(formData.address);
        console.log(formData.profilePicture);
        console.log(formData.phoneNumber);
        console.log(formData.birthDate);
        console.log(formData.fullname);
        console.log(formData.gender);
    };
    
    const handleAddData = async (e) => {
        e.preventDefault();
        setIsLoading(!isLoading)
        const newId = lastId + 1;

        const faculties = {
            "Ekonomi": "Fakultas Ekonomi",
            "Manajemen": "Fakultas Ekonomi",
            "Akuntansi": "Fakultas Ekonomi",
            "Administrasi-publik": "Fakultas Ilmu Sosial dan Politik",
            "Administrasi-bisnis": "Fakultas Ilmu Sosial dan Politik",
            "Hubungan-internasional": "Fakultas Ilmu Sosial dan Politik",
            "Teknik-sipil": "Fakultas Teknik",
            "Arsitektur": "Fakultas Teknik",
            "Matematika": "Fakultas Teknologi Informasi dan Sains",
            "Fisika": "Fakultas Teknologi Informasi dan Sains",
            "Informatika": "Fakultas Teknologi Informasi dan Sains"
        };

        const newStudent = {
            ...formData,
            faculty: faculties[formData.programStudy],
            id: newId,
        };

        try {
            
            const response = await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newStudent),
            });
            const jsonData = await response.json();
            toast({
                title: 'Success',
                description: "Data Saved Successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setFormData({
                fullname: "",
                birthDate: "",
                gender: "Male",
                programStudy: "Ekonomi",
                profilePicture: "",
                address: "",
                phoneNumber: "",
            });
            setIsRefresh(!isRefresh)
            setIsLoading(!isLoading)
            navigate("/student");
        } catch (error) {
            console.error("Error adding student data:", error);
        }
    };

    return (
        <>
            <NavBar screenName={'add'} />
            {isLoading
            ?
            <p>Loading ...</p>
            :
            <Box h='86vh'>
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
                        <Progress
                            hasStripe
                            value={progress}
                            mb="5%"
                            mx="5%"
                            isAnimated></Progress>
                        {step === 1 ? <Form1 passingValue={passingValue} /> : step === 2 ? <Form2 /> : <Form3 handleAddData={handleAddData} />}
                        <ButtonGroup mt="5%" w="100%">
                            <Box  data-testid="add-btn" id="add-btn"></Box>
                            <Flex w="100%" justifyContent="space-between">
                                <Flex>
                                    <Button
                                        onClick={() => {
                                            setStep(step - 1);
                                            setProgress(progress - 33.33);
                                        }}
                                        isDisabled={step === 1}
                                        colorScheme="red"
                                        variant="outline"
                                        w="7rem"
                                        mr="5%">
                                        Back
                                    </Button>
                                    <Button
                                        // type="submit"
                                        w="7rem"
                                        isDisabled={step === 3}
                                        onClick={() => {
                                            setStep(step + 1);
                                            if (step === 3) {
                                                setProgress(100);
                                            } else {
                                                setProgress(progress + 33.33);
                                            }
                                        }}
                                        colorScheme="green"
                                        variant="solid">
                                        Next
                                    </Button>
                                </Flex>
                                {step === 3 ? (
                                    <Button
                                        w="7rem"
                                        colorScheme="cyan"
                                        variant="solid"
                                        data-testid="add-btn"
                                        id="add-btn"
                                        // onClick={() => {
                                        //     // handleAddData()
                                        // }}>
                                        onClick={handleAddData}>
                                        Submit
                                    </Button>
                                ) : null}
                            </Flex>
                        </ButtonGroup>
                    </Box>
                </Flex>
            </Box>
            }

            <Footer />
        </>
    );
};

export default AddStudent;
