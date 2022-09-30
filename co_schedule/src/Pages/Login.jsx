import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { useNavigate} from 'react-router-dom';
import { Box, Heading, Text } from "@chakra-ui/react";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const {loginUser , authState} = React.useContext(AppContext);
  const navigate  = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    fetch(`https://reqres.in/api/login`,{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({email,password})
    })
    .then(res => res.json())
    .then(res=>{
      console.log(res)
      if(res.token){
        loginUser(res.token)
        navigate("/")
      }
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
     <Box  mt='50px' mb='0px' textAlign={'center'}>
            <Heading fontSize={'50px'} textColor='blackAlpha.700'>Sign In My Marketing </Heading>
            <Text>Free for life. No credit card required.</Text>
        </Box>
    
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input
            value={email}
            onChange={e=>setEmail(e.target.value)} 
            data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
            value={password}
            onChange={e=>setPassword(e.target.value)} 
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button disabled={loading} data-testid="form-submit" type="submit">
            LOGIN
          </button>
        </div>
      </form>
      
    </div>
    </>
  );
}
export default Login;
