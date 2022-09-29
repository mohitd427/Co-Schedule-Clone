import { Box, 
    Text,
    Container, 
    Flex, 
    Heading, 
    AtSignIcon, 
    HStack, 
    Link, 
    Button, 
    Spacer} from "@chakra-ui/react";
import React from "react";

export default function Navbar(){
    return (
        <>
        <Flex py={"10px"} px="2px" width={"full"} bg={"blackAlpha.200"}>
            <Flex mr={'20px'}>
            
                <Heading size={"lg"}>CoSchedule</Heading>
            </Flex>
            <Flex  >
                <HStack fontWeights={100}>
                    <Link >Products</Link>
                    <Link>Why CoSchedule</Link>
                    <Link>Resources</Link>
                    <Link>Pricing</Link>

                </HStack>
            </Flex>
            <Spacer/>
            <Flex alignItems={'center'} gap={4}>
                <Link>Sign In</Link>
                <Link>Get A Demo</Link>
                <Button bg={'orange.500'} textColor='white'>Create My Calender</Button>
            </Flex>
        </Flex>
        
        </>
    )
}