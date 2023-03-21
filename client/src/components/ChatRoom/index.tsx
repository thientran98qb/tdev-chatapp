import { Box, Divider, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import ChatMessages from '../ChatMessages/ChatMessages'
import ProfileInfo from '../ProfileInfo'
import RoomInfo from '../RoomInfo'
import RoomLists from '../RoomLists'
import { MessageApi } from '../../api'
import Echo from 'laravel-echo'
type Props = {}
interface MessagesType {
    id: number,
    message: string
}


const ChatRoom = (props: Props) => {    
    const [messages, setMessages] = React.useState<MessagesType[] | []>([])
    
    const echo = useMemo(() =>{
        return new Echo({
            broadcaster: 'socket.io',
            host: `${window.location.protocol}//${window.location.hostname}:6001`,
            auth: {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
            },
          });
    }, [])
    const channel = useMemo(() => {
        return echo.channel('chatroom')
    }, [echo])
    useEffect(() => {
        channel.listen('MessageSented', (data: any) => {
                setMessages((prevState ) => {
                    console.log(prevState);
                    return [...prevState, data.message]
                })
            })
        return () => {
            channel.stopListening('chatroom')
        }
    }, [channel]);
    useEffect(() => {
        const getMess = async () => {
            const data = await MessageApi.getMessages()
            setMessages(data.data)
        }
        getMess()
    }, [])
    const onSubmitMessage = async (message: string) => {
        await MessageApi.sendMessage(message)
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
