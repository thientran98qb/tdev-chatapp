import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { MessageApi } from '../../api'

type Props = {
  onSubmitMessage: (message: string) => void
}

const ChatInputText = ({onSubmitMessage}: Props) => {
  const [message, setMessage] = useState<string>('')
  const sendMessage = () => {
    if (!onSubmitMessage) return 
    
    onSubmitMessage(message)
    setMessage('')
  }
  return (
    <InputGroup size='md' mt={2}>
        <Input
          pr='4.5rem'
          placeholder='Nói gì đê bạn êiiii !'
          size="md"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' colorScheme="blue" size='md' disabled={Boolean(message)} onClick={sendMessage}>
            Gửi
          </Button>
        </InputRightElement>
    </InputGroup>
  )
}

export default ChatInputText
