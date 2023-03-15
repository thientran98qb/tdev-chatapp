import { Box, Divider, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import ChatMessages from '../ChatMessages/ChatMessages'
import ProfileInfo from '../ProfileInfo'
import RoomInfo from '../RoomInfo'
import RoomLists from '../RoomLists'

type Props = {}

const ChatRoom = (props: Props) => {
  return (
    <Box height="100vh">
        <Grid
            h="100vh"
            templateColumns="repeat(3, 1fr)"
        >
            <GridItem colSpan={1} bg="purple.400">
                <Box>
                    <ProfileInfo />
                    <Divider/>
                    <RoomLists />
                </Box>
            </GridItem>
            <GridItem colSpan={2}>
                <RoomInfo />
                <Divider/>
                <ChatMessages />
            </GridItem>
        </Grid>
    </Box>
  )
}

export default ChatRoom
