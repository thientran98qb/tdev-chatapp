import { Box, Flex } from '@chakra-ui/react'
import ChatInputText from './ChatInputText'
import ChatMessageItem from './ChatMessageItem'

type Props = {}

const ChatMessages = (props: Props) => {
  return (
    <Box h="calc(100vh - 80px)">
      <Flex
        h="100%"
        p={4}
        direction="column"
        justifyContent="flex-end"
      >
        <ChatMessageItem/>
        <ChatMessageItem/>
        <ChatMessageItem/>
        <ChatInputText />
      </Flex>
    </Box>
  )
}

export default ChatMessages
