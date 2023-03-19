import { Box, Divider, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ChatMessages from '../ChatMessages/ChatMessages'
import ProfileInfo from '../ProfileInfo'
import RoomInfo from '../RoomInfo'
import RoomLists from '../RoomLists'
import { MessageApi } from '../../api'

type Props = {}
interface MessagesType {
    id: number,
    message: string
}
const ChatRoom = (props: Props) => {
    const [messages, setMessages] = React.useState<MessagesType[] | []>([])
    useEffect(() => {
        const getMess = async () => {
            const data = await MessageApi.getMessages()
            setMessages(data.data)
        }
        getMess()
    }, [])
    const onSubmitMessage = async (message: string) => {
        const messageApi = await MessageApi.sendMessage(message)
        const messageResponse = messageApi.data.message
        setMessages((prevState) => [...prevState, messageResponse])
    }
  return (
    <Box height="100vh">
        <Grid
            h="100vh"
            templateColumns="repeat(4, 1fr)"
        >
            <GridItem colSpan={1} bg="purple.400">
                <Box>
                    <ProfileInfo />
                    <Divider/>
                    <RoomLists />
                </Box>
            </GridItem>
            <GridItem colSpan={3}>
                <RoomInfo />
                <Divider/>
                <ChatMessages messages={messages} onSubmitMessage={onSubmitMessage}/>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default ChatRoom
