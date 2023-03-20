import { Box, Flex } from '@chakra-ui/react'
import ChatInputText from './ChatInputText'
import ChatMessageItem from './ChatMessageItem'

interface MessageType {
  id: number,
  message: string
}
type Props = {
  messages: MessageType[],
  onSubmitMessage: (message: string) => void
}

const ChatMessages = ({messages, onSubmitMessage}: Props) => {
  return (
    <Box h="calc(100vh - 80px)">
      <Flex
        h="100%"
        p={4}
        direction="column"
        justifyContent="flex-end"
      >
        <Box sx={{maxHeight: "100%", overflow: "auto"}}>
          {messages.map(message => <ChatMessageItem key={message.id} message={message.message}/>)}
        </Box>
        <ChatInputText onSubmitMessage={onSubmitMessage}/>
      </Flex>
    </Box>
  )
}

export default ChatMessages
