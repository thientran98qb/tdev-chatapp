import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

type Props = {}

const ChatInputText = (props: Props) => {
  return (
    <InputGroup size='md' mt={2}>
        <Input
          pr='4.5rem'
          placeholder='Nói gì đê bạn êiiii !'
          size="md"
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' colorScheme="blue" size='md'>
            Gửi
          </Button>
        </InputRightElement>
    </InputGroup>
  )
}

export default ChatInputText
