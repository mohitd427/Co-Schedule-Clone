import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Imagesec(){
    return <>
     <Box textAlign='center' bg={'gray.50'} width={'full'}  >
           <Image ml={'30px'} src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75' alt='Dan Abramov' />
        </Box>
    </>
}