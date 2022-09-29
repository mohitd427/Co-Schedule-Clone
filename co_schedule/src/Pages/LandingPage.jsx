import { Box, 
    Button,
    Image, 
    Text, 
    Stack, 
    Grid,
    GridItem,
    Container } from "@chakra-ui/react";
import React from "react";

export default function LandingPage(){
    return (
        <>
        <Box  alignItems={'center'} textAlign='center' width={'full'} bg={"blackAlpha.50"} height={'350px'}>
            <Text pt={'10'}  textAlign='center' fontSize='5xl' color='blackAlpha.800' fontWeight={'100'} >
            Organize All Of Your Marketing In<br/> One Place. From Any Place.
            </Text>
            <Text mt='2' mb={'4'} textAlign={'center'} >Get more done in less time with the only work management software for marketers.</Text>
            <Button ml={''} mt='2' mb={'4'} colorScheme='orange' p={'30px'}>Get Started Free</Button>
            <Text pb={'10px'} textAlign={'center'}>Why not? It's free forever.</Text>
        </Box>


        <Box textAlign='center' bg={'gray.50'} width={'full'}  >
           <Image ml={'30px'} src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75' alt='Dan Abramov' />
        </Box>

    <Box mt={'50px'} textAlign={'center'}>
        <Text   fontSize={'3xl'}>30,000 marketers start their day with CoSchedule</Text>

        <Stack direction={'row'} gap={'6'} alignContent={'center'} mt='30px' mb={'10px'}>
        <Image ml='20'         
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75'
          alt='Forber' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75'
          alt='Yamaha' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75'
          alt='Unicef' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fvericast-logo2.webp&w=256&q=75'
          alt='Vericast' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75'
          alt='Walgreens' />
        </Stack>

        <Stack direction={'row'} gap={'6'} alignContent={'center'} mt='30px' mb={'10px'}>
        <Image ml='350px'         
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75'
          alt='dictionary' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75'
          alt='P and G' />
          <Image          
          src='https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75'
          alt='schwans' />
          
        </Stack>
    </Box>
    
   <Text>Our Products</Text>
   <Container bg={'gray.300'} maxW={'6xl'}>
    <Grid templateColumns='repeat(2, 1fr)' gap={'4'}>
       
      <GridItem bg='green.100' height='600px' width={'500px'}>
      <Image   height={'100'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100'
          alt='top image' />
          <Text fontSize={'30px'} color='blackAlpha.400'>Marketing Calender</Text>
      </GridItem>

      <GridItem bg='green.100' height='600px' width={'500px'}>
      <Image   height={'100'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100'
          alt='top image' />
          <Text fontSize={'30px'} color='blackAlpha.400'>Marketing Calender</Text>
      </GridItem>  
      <GridItem bg='green.100' height='600px' width={'500px'}>
      <Image   height={'100'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100'
          alt='top image' />
          <Text fontSize={'30px'} color='blackAlpha.400'>Marketing Calender</Text>
      </GridItem>

      <GridItem bg='green.100' height='600px' width={'500px'}>
      <Image   height={'100'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100'
          alt='top image' />
          <Text fontSize={'30px'} color='blackAlpha.400'>Marketing Calender</Text>
      </GridItem>  
    </Grid>
    </Container>

        
        </>
    )
}