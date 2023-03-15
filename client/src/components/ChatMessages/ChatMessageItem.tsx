import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type Props = {}

const ChatMessageItem = (props: Props) => {
  return (
    <Box mb={2}>
        <Flex alignItems="center" gap={1}>
            <Avatar size="sm" mr={1} src='https://bit.ly/broken-link' />
            <Text fontSize="md" fontWeight="bold">Thien Tran</Text>
            <Text fontSize="10px" ml={1} as="span">Today at 11:04 AM</Text>
        </Flex>
        <Text ml="40px">Lam gi do ban?</Text>
    </Box>
  )
}

export default ChatMessageItem
