import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { AuthContext } from '../../context/AuthContext';
import InputText from '../InputText';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
}).required();

const Login = () => {
    const authContext = useContext(AuthContext)
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })
    const handleLoginForm = (data: any) => {
        authContext.login(data)
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
                    <InputText name="email" label='Email' type='email' control={control} />
                    <InputText name="password" label='Password' type='password' control={control}/>
                    
                    <Button
                        isLoading={authContext.loading}
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
