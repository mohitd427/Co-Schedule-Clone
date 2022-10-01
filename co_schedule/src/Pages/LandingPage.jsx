import { Box, 
    Button,
    Image, 
    Text, 
    Stack, 
    Grid,
    GridItem,
    Container, 
    UnorderedList,
    Icon,
    ListItem,
    ListIcon,
    Heading,
    SimpleGrid,
    Divider} from "@chakra-ui/react";
import React from "react";
import Headingsec from "./sections/Headingsec";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Imagesec from "./sections/Imagesec";
import Brand from "./sections/Brand";
import OurProducts from "./sections/OurProducts";
import News from "./sections/News";
import Organize from "./sections/Organize";

export default function LandingPage(){
    return (
        <>
        
        <Navbar/>
        <Headingsec/>
        <Imagesec/>
        <Brand/>
        <OurProducts/>
        <News/>
        <Organize/>
        <Footer/>
        
        </>
    )
}