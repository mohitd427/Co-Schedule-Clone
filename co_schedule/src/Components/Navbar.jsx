import { Box, Container, Flex, Heading, AtSignIcon, HStack, Link } from "@chakra-ui/react";
import React from "react";

export default function Navbar(){
    return (
        <Flex py={"20px"} px="2px" width={"full"} bg={"blackAlpha.200"}>
            <Flex mr={'20px'}>
            
                <Heading size={"lg"}>CoSchedule</Heading>
            </Flex>
            <Flex >
                <HStack >
                    <Link >Products</Link>
                    <Link>Why CoSchedule</Link>
                    <Link>Resources</Link>
                    <Link>Pricing</Link>

                </HStack>
            </Flex>

        </Flex>
    )
}