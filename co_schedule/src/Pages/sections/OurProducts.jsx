import { Box, Button, Divider, Grid, GridItem, Heading, Image, ListIcon, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function OurProducts(){
    return <>

    <Box m={'60px'}>  
   <Text m={'20px'} textAlign={'center'} fontSize={'5xl'}>Our Products</Text>
  
    <Grid  templateColumns='repeat(2, 1fr)' gap={'8'}>
       
      <GridItem borderRadius={'10px'} boxShadow='2xl' rounded='md' bg='white' height='580px' width={'500px'}>
      <Image borderRadius={'10px'} height={'150'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100'
          alt='top image' />
          <Image pos={'relative'} top='-35' left={'45'} src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75
        "/>
          <Text m={'5px'} ml='30' fontSize={'30px'} >Marketing Calender</Text>
          <Text m={'30px'}>A calendar that helps you see, schedule, and share your marketing.</Text>
          <UnorderedList ml={'60px'}>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             See everything together in one place</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Share your progress with higher-ups</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Show what your marketing is doing</ListItem>
             
          </UnorderedList>
          <Button m={'30px'}  bg={'orange.50'} textColor={'orange.500'}>Explore More</Button>

      </GridItem>

      <GridItem boxShadow='2xl' rounded='md' bg='white' borderRadius={'10px'} height='580px' width={'500px'}>
        
      <Image borderRadius={'10px'} height={'150'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100'
          alt='top image' />
          <Image pos={'relative'} top='-35' left={'45'} 
          src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75
        "/>
          <Text m={'5px'} ml={'30px'} fontSize={'30px'} >Marketing Suite</Text>
          <Text m={'30px'}>A calendar that helps you see, schedule, and share your marketing.</Text>
          <UnorderedList ml={'60px'}>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             See everything together in one place</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Share your progress with higher-ups</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Show what your marketing is doing</ListItem>
             
          </UnorderedList>
          <Button m={'30px'}  bg={'orange.50'} textColor={'orange.500'}>Explore More</Button>

      </GridItem>

      <GridItem boxShadow='2xl' rounded='md' bg='white' borderRadius={'10px'} height='580px' width={'500px'}>
      <Image borderRadius={'10px'} height={'150'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100'
          alt='top image' />
          <Image pos={'relative'} top='-35' left={'45'} width={'80px'}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwqdHewamYX1BfEo_tsXnW3aLHQDQQRgT2rEp6GtiWA&s"/>
          <Text m={'5px'} ml={'30px'} fontSize={'30px'} >Headline Studio</Text>
          <Text m={'30px'}>A calendar that helps you see, schedule, and share your marketing.</Text>
          <UnorderedList ml={'60px'}>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             See everything together in one place</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Share your progress with higher-ups</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Show what your marketing is doing</ListItem>
             
          </UnorderedList>
          <Button m={'30px'}  bg={'blue.50'} textColor={'blue.500'}>Explore More</Button>

      </GridItem>


      <GridItem boxShadow='2xl' rounded='md' bg='white' borderRadius={'10px'} height='580px' width={'500px'}>
      <Image borderRadius={'10px'}  height={'150'} width={"full"}      
          src='https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100'
          alt='top image' />
          <Image pos={'relative'} top='-35' left={'45'} width={'80px'} 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX///+CVue0mvBsR7+BVOd+UOZ+T+Z5R+Z6SeZqRrx3ROWyl/Cvk+98TOazmfC3nvGOebx/VOLt6PtyS8qMZen08f3q5Pv7+v53T9OKYeiHXehvScR5UNfXyve3ofCbe+vPwfWRbOrCrvOmiu3l3fqhg+y7p/Hc0viVcerMvfT49v7GtfPUx/bIuPTaz/fFsfPX0ei7r9ibiMOmjOGqm8yFbbfPx+ONb9jd1/BdMLifiNSIbcpsQ8eUfcWhh9x2VcPKv+e9sOECBLDQAAAJUUlEQVR4nO2daXvaOBSFMcgLtsGBsCQhgUAgELK0nWm6zGSm6f//U2MbMF4kWRfr2vE8Op8CTYoOr67WK7nRUFJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSkqDxuOoSIGp9P5tfGWSwmT5tqy4LgpaubRk6IRohumHZs5eqCyRZy42ta3Hp5mBddaFkyrWJlhax7/43ITm87GT8BTK0ftVFk6M+0akGfYzWsurCydBQz9bQyKI5qrp4xTW+YhEMLRrDqgtYWCuDY9BvUzdVF7CobmyuQU2zHqsuYkFp7CDcy6z3+ObZyjOoGV7VhSwkkotQI506Q3zIR6hpnfuqi1lAV/kIfZn1Hb0JIaw1RDGEfrdfV4iCCGsMURBh0JzWE6IwwtpCFEZY10i8FUfoQ1xUXdwTBEBYT4gghLWEeAlBWEeITzCENYQIisIQol4viGCEPsRPVRcaJGAUhhCNqgsN0ZMJsNarI0QIwt7BISFVF1tckCgkF9GPnfosuw0gCI8O6xOJN5AoPO8df64NRBDCSewF0aouuphACCfX8Vc1gQhC2E68rEdzCkN4nnxdC4hzEMLr5Bt1iMQXAEIyaaXfsp6rNpArWBSep9/6+BAhCLVJu5d578NDhEVhppJ+fIhrUBS2LyhvWw9Vm+AKFoWUSuob71VtgicIQm3SmlC/jw8NERKF121qJf3YkQiLwha1kn5siDCErQnjn8hV1UZYAkZhesRWPcR+XoLWhpfflUXYZv5jBZG4HT0tnJXd5HoEImxlRmwxiLclGQs1XD9PXddxvDkxLIfjEYqQWUlLjMTx6Gbh+Oa6TV/dIAXPsF2WRyhCyojtqDIgDpcPIbrmXt5m11AaFsMjECGvkqJD9NF9itBFinoC3b6jZC+v85IQ4/IR8iqphglx+PnLH3+6KXMBwlUMkW5mPUIRciupD/ESxd63r2evr2f/ZOwFDpPbZT7HZP4yKAp9f/xKqiFB/PZ6FugvisHmXRqRbq7iHr/DhjPMEVskFIhfQoNnNIMeZVqk26so1f7Hz0lekY8KEOZUUl/Wk3yHP16ZCF1qlOnmbO/xb38QRp8pZBVGYf4vo0D8GiKkhOGhq8h6tEOPP376hW4LYgwI5lZSXyYCxK0P8R8awi67odTNzTJAGJab3wPsFCJkTSviwonEV3oUznjtiO/xrd3aWczHSMLfE6rRGJHYoCP08kpNeucHjzkYyXfRSooE8fO/NIMrga7g4DG7yJsodKfxS7CS+jJvECzeOxSHYskxEUcOxs6i8f5TLF59kQGCw76bdZjp7XM8sjGGuV0tztw3JRSIzxmIHmD55cDxmv4nYWrX+8+8EVsklEgcZyA6/LNZVI90jPv0vF+ClVRDgviSgsjs7ZkeL0KOlOZyn+z8Lp6MQuYIDhtealADT+DSLlptCsYowxKQ1ocCcZmop94MMPGLeWy3M91/lK8OyK5FaU4bizjEvN6e7bGVWraPJclWDXEYhyjcVVA9xjHGjhwADirgROLtsbGhTQxBHo8YrViKLAQixu0L425UT+kTQ4DHCGPi1EjlENeHegrp7ZkeQ4zESBykzD89GwkFYmO6h8iZGAI8BhhTB38qh7gfnvInhuK6vs4co4RARLkj5NEp1FVkpKfPblUOcRtATCwDFxSZpg40CxyCPggH4o0jPDEUk2F7iQ2PyiEGw9MCvT3Vo9WNezwX//psFIhLt1hvT/VoxzYgf78Jz6KQbs9YuKCJoaDH2Obcm+gKK1YkDi8RHAaLyO5+4+r3m/BCOVIk9u9MuYF48HjYnAMslONEYuDRxvG422T1IeYtP0Z/gXaPTd81kepqsDn3lrv8GMnGu1Kq79pYHvvvbwKryPtfx7yMaOhYSB5nopsBGlZzGnns4tRVctwMyG1x9BmmQ9+jh8MxtuGR13EgRuJOW2yP7ZwWp4RrwbZTqyN7HJf0yG9xzBJu6Nved+hXIMryyMWIHYkHjxaqR26Lgx6JO40XKMOco0d2i1MORB8j/Kw9yKOPkRXtZUSiL4xJ1VGhR1aLUw7EIR7CUAHHNmuLtZRIxEUY6rzdbp9TW5wyIA4hSYgnK9ico7Y4JUQibM+7kEdax4EPsRyEgXoXVIzokdgtCWGoC0qLo69wDZaH8OAx03EgQ2yWiXDvMVVVcSNxCEnIl+Yx1eKgQiwf4c5jAiNmJGIPZ9i6jmO08a4596pBGCpmEQ/iWDNwpvhQod1Vf9t0B5xL8ssTFsRtsGd6NxDiqGPNkndCisRdHpEnwlFfrXA2daL/H8NglHjqufM8jma/MZrhbOrsPwADYjwVzJ1zOep3wR+MEDnuPkGuxonEWr5He78FOkLanIt9hETdplOH2R5jXzDWBiQCxGz6d9NzNnSPiSDp3+Fs6piyIT5RzmEwPKYbOpwNSNkQxzSDDI/ZzmroImzqSI5EKsKDx2TfQe2rhl3pHOVCZCHceexu4jlqjK5q2+xI9ih1YHPDcxhwnEV1lT3cGHq21JG7VIjZ0+tpj83ZniPvm91OpW7O2fKeFbWkHPdieMwZMQabc9I4SnzewCO/kh48ejOi5wbH+N6Q5VHiaRPa4WeGR4FB/3ghy6O0ajoUqKR78W53iXvUpXi0ZGXxi4ThTl3hC6s/EQkepd1UvxYKw0AuYJzxWJyj0ZTkMKc3jCGEfaePPauYR6NbtkMIwlDPpJBHaQ7Tp0qZCE+4Nv7hqoBHabV0KegQjDDU7ekejakkh7QT7DSEp7ZsT5fmaR4tWacvuTOLogh3HgcneZQ3RaRdtJCRU6hzujnBo8QLwYSamgIIdx8yh3qU1pTuj3mhIgy1nsMW5mRmnmSvkpCOMNR6A1hElnrKJH/sfXJDmtI6/RB2tuQeMkmvB2cRSptvLwU3PGRnLKSvkkgblHkvgJBHYkt+BC2/nkpoZhIarXI92tJPePMmiY6s0dNReRtXNsJjIpYuq6I6U4wHinE3rmyUp7SNHHpz42I9iYq5qUNsjOtAGsHyCgWj46JcebBT36VwJNZA/ubhQUvPdVL+HnGfqh1wJEl/Ou7zIZb3ruM43UCO4zoP8padWepPLbOjE6IRQoyOffmA/hTB8fJ2MfWa3v3zC15lSWq5mM2vDDLYOA9lfWQVGtfrCZBKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSpL0HxKjuCgbHPIaAAAAAElFTkSuQmCC"/>
          <Text m={'5px'} ml={'30px'} fontSize={'30px'} >Actionable Marketing Institute</Text>
          <Text m={'30px'}>A calendar that helps you see, schedule, and share your marketing.</Text>
          <UnorderedList ml={'60px'}>
             <ListItem icon='none' m='10px'>
             <ListIcon color='orange.500' />
             <ion-icon name="checkmark-outline"></ion-icon>
             See everything together in one place</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Share your progress with higher-ups</ListItem>
             <ListItem m='10px'>
             <ListIcon color='orange.500' />
             Show what your marketing is doing</ListItem>
             
          </UnorderedList>
          <Button m={'30px'}  bg={'blue.50'} textColor={'blue.500'}>Explore More</Button>

      </GridItem>

    </Grid>
    
    </Box>
    
    </>
}