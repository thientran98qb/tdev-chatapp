import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, List, ListItem } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'

type Props = {}

const RoomLists = (props: Props) => {
  return (
    <Box p={4} color="white">
        <Accordion allowToggle defaultIndex={[0]}>
            <AccordionItem border="none">
                <AccordionButton>
                    <AccordionIcon />
                    <Box as="span" ml={2}>
                        Danh sách phòng
                    </Box>
                </AccordionButton>
                <AccordionPanel>
                    <List spacing={2} ml="30px">
                        <ListItem>Phòng 1</ListItem>
                        <ListItem>Phòng 2</ListItem>
                        <ListItem>Phòng 3</ListItem>
                    </List>
                    <ButtonGroup size='sm' isAttached variant='outline' ml="30px" mt="10px">
                        <Button rightIcon={<MdAdd />}>Thêm phòng</Button>
                    </ButtonGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        
    </Box>
  )
}

export default RoomLists
