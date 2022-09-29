import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function LandingPage(){
    return (
        <>
        <Box width={'full'} bg={"blackAlpha.200"} >
            <Text  textAlign='center' fontSize='50px' color='tomato' >
            Organize All Of Your Marketing In<br/> One Place. From Any Place.
            </Text>
            <Text textAlign={'center'}>Get more done in less time with the only work management software for marketers.</Text>
        </Box>
        </>
    )
}