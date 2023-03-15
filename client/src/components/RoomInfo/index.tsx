import { Avatar, AvatarGroup, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'

type Props = {}

const RoomInfo = (props: Props) => {
  return (
    <Box p={4}>
        <Flex justifyContent="space-between" alignItems="center">
            <VStack
                align="flex-start"
            >
                <Text fontSize="md">Bis mat 😈😈😈</Text>
                <Text fontSize="sm" sx={{
                    marginTop: "0 !important"
                }}>Day la phong bi mat 👹👹👹</Text>
            </VStack>
            <Flex alignItems="center" gap={2}>
                <Button variant="outline">
                    Moi
                </Button>
                <AvatarGroup size='md' max={3}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
            </Flex>
        </Flex>
    </Box>
  )
}

export default RoomInfo
