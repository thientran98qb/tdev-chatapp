import { Avatar, Button, Flex, HStack, Text, Tooltip } from '@chakra-ui/react'

type Props = {}

const ProfileInfo = (props: Props) => {
  return (
    <Flex justifyContent="space-between" align="center" p={4}>
        <HStack>
            <Tooltip label='Oshigaki Kisame'>
                <Avatar name='Oshigaki Kisame' size="md" src='https://bit.ly/broken-link' />
            </Tooltip>
            <Text color="white">Oshigaki Kisame</Text>
        </HStack>
        <Button colorScheme='whiteAlpha' color="white" variant='outline'>Đăng xuất</Button>
    </Flex>
  )
}

export default ProfileInfo
