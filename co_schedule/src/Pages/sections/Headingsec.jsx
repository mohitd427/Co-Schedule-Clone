import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function Headingsec(){
    return <>
         <Box  alignItems={'center'} textAlign='center' width={'full'} bg={"blackAlpha.50"} height={'350px'}>
            <Text pt={'10'}  textAlign='center' fontSize='5xl' color='blackAlpha.800' fontWeight={'100'} >
            Organize All Of Your Marketing In<br/> One Place. From Any Place.
            </Text>
            <Text mt='2' mb={'4'} textAlign={'center'} >Get more done in less time with the only work management software for marketers.</Text>
            <Button ml={''} mt='2' mb={'4'} colorScheme='orange' p={'30px'}><Link to={'/signup'}>Get Started Free</Link> </Button>
            <Text pb={'10px'} textAlign={'center'}>Why not? It's free forever.</Text>
        </Box>

    </>
}