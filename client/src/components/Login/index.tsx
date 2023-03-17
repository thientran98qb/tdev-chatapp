import { Alert, Box, Button, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { AuthApi } from '../../api';
import InputText from '../InputText';

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
}).required();

const Login = () => {
    const [errorServers, setErrorServers] = useState([])
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })
    const handleLoginForm = async (data: any) => {
        try {
            await AuthApi.login(data)
        } catch (error: any) {
            if (error.status === 500) {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                setErrorServers(error)
            }            
        }
    }
    
  return (
    <Flex
        minH="100vh"
        align={"center"}
        justify={"center"}
        bg={"gray.50"}
    >
        <Stack>
            <Stack align={"center"} py={2}>
                <Heading textAlign={"center"}>Login vào để chattalk nào ae !!!</Heading>
                <Text>
                    Hãy enjoy cái moment này 🤪
                </Text>
            </Stack>
            <Box
                rounded={"lg"}
                bg={"white"}
                boxShadow={"lg"}
                p={8}
            >
                <Stack spacing={4}>
                    {errorServers && Object.keys(errorServers).length > 0 ?
                        <Alert status='error'>
                            <UnorderedList>
                                {Object.values(errorServers).map((error, index) => (
                                    <ListItem key={index}>{error[0]}</ListItem>
                                ))}
                            </UnorderedList>
                        </Alert> : null
                    }
                    <InputText name="email" label='Email' type='email' control={control} />
                    <InputText name="password" label='Password' type='password' control={control}/>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit(handleLoginForm)}
                    >
                        Đăng nhập
                    </Button>
                </Stack>
            </Box>
        </Stack>
    </Flex>
  )
}

export default Login
