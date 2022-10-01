import { Box, Divider, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function News(){
    return <>
    <Box mt={'150px'} textAlign={'center'}>
        <Text fontSize={'5xl'}>The fastest growing marketing work management software</Text>
        <Text fontSize={'30px'}>CoSchedule is trusted by 30,000 marketers in 100+ countries</Text>

    </Box>
    <SimpleGrid mt={'100px'} textAlign={'center'} columns={[2, null, 3]} spacing='40px' >
         <Box bg={'blue.50'} height='250px'>
            <Heading mt='20px'>Gartner </Heading>
            <Text as='b'>Magic Quadrant</Text>
            <Divider m={'20px'}/>
            <Text m={'20px'}>The Gartner Magic Quadrant<br/>for content marketing<br/>Platform 2012</Text>
         </Box>

         <Box bg={'blue.50'} height='250px'>
            <Heading mt='10px' fontSize={'60px'}>Inc. </Heading>
            <Text as='b' fontSize={'60px'}>5000</Text>
            <Divider m={'0px'}/>
            <Text >One of the fastest growing<br/>Marketing platforms 3-year<br/>In a row</Text>
         </Box>

         <Box bg={'blue.50'} height='250px' >
            <Image ml='180px' width={'90px'} src='https://media.coschedule.com/uploads/2022/03/ContentDistribution_HighPerformer_Small-Business_HighPerformer-231x300.png' />
            
            <Divider />
            <Text m={'20px'}>Awarded High performance in 7<br/>Product Categories</Text>
         </Box>
         </SimpleGrid>
    
    </>
}