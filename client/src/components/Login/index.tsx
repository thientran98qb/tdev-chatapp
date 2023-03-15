import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'

type Props = {}

const Login = (props: Props) => {
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
                    <FormControl>
                        <FormLabel id='email'>Email</FormLabel>
                        <Input type={"email"} placeholder='Nhập email vào đây'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel id='password'>Password</FormLabel>
                        <Input type={"password"} placeholder='Nhập password vào đây'/>
                    </FormControl>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Đăng nhập
                    </Button>
                </Stack>
            </Box>
        </Stack>
    </Flex>
  )
}

export default Login
