import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Brand(){
    return <>
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
    </>
}