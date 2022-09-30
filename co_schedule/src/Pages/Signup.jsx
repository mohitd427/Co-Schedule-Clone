import { Box, Button, Container, FormControl, 
    FormLabel, 
    Heading, 
    Input, 
    Text, 
    VStack} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const initState={
    name:"",
    email:"",
    password:"",
}

export default function Signup(){
    const [formData, setFormData] = useState(initState);

    const handleChange =(e)=>{
        const { name,value } = e.target;        
        
        setFormData({...formData, [name]: value});

    }
    const handleClick=()=>{
        axios({
            method:"POST",
            url:"http://localhost:3004/users",
            data:formData,
        }).then((res)=>{ console.log(res)
            return setFormData(initState)
        })
        
       

    }
    <Navigate to="/"/>
    console.log(formData)

 const {name,email,password} = formData;
    return (
        <>
        <Box  mt='50px' mb='50px' textAlign={'center'}>
            <Heading fontSize={'50px'} textColor='blackAlpha.700'>Create My Marketing Calendar</Heading>
            <Text>Free for life. No credit card required.</Text>
        </Box>

        
        <Container border='1px solid lightGray' p={'50px'} maxWidth={'xl'}>
        <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input 
            placeholder='Full Name'
            type={'text'}
            name={'name'}
            value={name}
            onChange={handleChange}
             />
            
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
            placeholder='Email'
            type={'email'}
            name={'email'}
            value={email}
            onChange={handleChange}
             />
            
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
            placeholder='Password'
            type={'password'}
            name={'password'}
            value={password}
            onChange={handleChange}
             />
            
        </FormControl>
        <FormControl>
            <Button w={'full'} mt={'20px'} variant='outline' bg={'orange.400'} textColor='white' onClick={handleClick}>
                Get Started Now
            </Button>
        </FormControl>
        <Text m={'20px'} textAlign={'center'}>OR</Text>
        

        <Button ml='80px' w={'300px'} textColor='blackAlpha.500' variant='outline'>Sign Up with Google</Button><br/>

        <Button  ml='80px' w={'300px'} textColor='blackAlpha.500' variant='outline' > Sign Up with Facebook</Button><br/>
        <Button  ml='80px' w={'300px'} variant='outline' textColor='blackAlpha.500'>Sign Up with Apple </Button>

        </Container>

        </>
    )
} 