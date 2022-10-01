import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Organize(){
    return <>
       <Box textAlign={'center'} mt={'150px'} height={'300px'} bgGradient='linear(to-l, orange.200, orange.400)'>
        <Text textColor={'white'} fontWeight={'20px'} pt={'80px'} fontSize={'4xl'}>Organize all of your marketing in one place</Text>
        <Button ml={''} mt='2' mb={'4'} colorScheme='orange' p={'30px'}><Link to={'/signup'}> Get Started Free</Link> </Button>

    </Box>
    </>
}