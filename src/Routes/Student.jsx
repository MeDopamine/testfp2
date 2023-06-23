import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Center, Select, Table, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Student = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefresh, setIsRefresh] = useState(false);
    const [filter, setFilter] = useState("All");
    const toast = useToast();

    useEffect(() => {
        fetchData();
    }, [isRefresh]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/student`);
            const jsonData = await response.json();
            setData(jsonData);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("Error fetching data:", error);
        }
    };

    const handleDeleteData = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setIsRefresh(!isRefresh);
            toast({
                title: `Deleted student data with id ${id}`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredData =
        filter !== "All"
            ? data?.filter((student) => student.faculty === filter)
            : data;

    return (
        <>
            <NavBar screenName={'home'}/>
            <Box p={4} mt={3} mb={20}>
                <Select
                    data-testid="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    mb={3}
                    maxW="100%"
                >
                    <option value="All">All</option>
                    <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                    <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                    <option value="Fakultas Teknik">Fakultas Teknik</option>
                    <option value="Fakultas Teknologi Informasi dan Sains">
                        Fakultas Teknologi Informasi dan Sains
                    </option>
                </Select>

                {isLoading ? (
                    <Center>Loading ...</Center>
                ) : (
                    <Box className="test-table-container">
                        <Table variant="striped" colorScheme="gray" rounded="md" borderRadius='md' size='sm' className="test-table">
                            <Thead bg="blue.300" >
                                <Tr fontWeight='bold'>
                                    <Td>No</Td>
                                    <Td>Full Name</Td>
                                    <Td>Faculty</Td>
                                    <Td>Program Study</Td>
                                    <Td>Option</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredData?.map((student, index) => (
                                    <Tr className="student-data-row" key={student.id}>
                                        <Td>{index + 1}</Td>
                                        <Td data-testid="name">
                                            <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                        </Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td>
                                            <Button
                                                size="sm"
                                                colorScheme="red"
                                                variant="outline"
                                                data-testid={`delete-${student.id}`}
                                                onClick={() => handleDeleteData(student.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                )}
            </Box>
            <Footer />
        </>
    );
};

export default Student;
