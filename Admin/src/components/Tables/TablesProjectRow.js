import React ,{ useState}from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import axios from "axios"


function DashboardTableRow(props) {
  const { logo, name, email ,vip, budget , _id , banned } = props;
  const textColorG = useColorModeValue("green.700", "white");
  const textColor = useColorModeValue("gray.700", "white");

  const bgStatus = useColorModeValue("green.400", "#1a202c");

  const [toggleban, setToggleban] = useState(banned);


 const toggle = ()=>{

  setToggleban(!toggleban)
 }

  const ban = (_id) =>{
    
    console.log(_id)
  
  axios.put(`http://localhost:5000/admin/banUser/${_id}`)
   .then(({data}) => console.log(data) ,
   toggle(),
   console.log(toggleban),
        
   )

        
      }

  const unban = (_id) =>{
      
      console.log(_id)
      
    axios.put(`http://localhost:5000/admin/unbanUser/${_id}`)
       .then(({data}) => console.log(data) ,
       toggle(),
   console.log(toggleban),
           
       )
    
       }
    
  

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {budget}
        </Text>
      </Td>
      <Td>
        { vip ? <Text fontSize="md" color={textColorG} fontWeight="bold" pb=".5rem">
          {vip}
        </Text> : <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {vip}
        </Text>  }
        
      </Td>
      
      <Td>
        {banned ? <Button p="0px" bg="transparent" variant="no-hover" onClick={ ()=>{unban(_id)}} >
          <Text
            fontSize="md"
            color="green.400"
            fontWeight="bold"
            cursor="pointer"
          >
            unban
          </Text>
        </Button> : <Button p="0px" bg="transparent" variant="no-hover" onClick={ ()=>{ban(_id)}} >
          <Text
            fontSize="md"
            color="red.400"
            fontWeight="bold"
            cursor="pointer"
          >
            ban
          </Text>
        </Button>}
      
      </Td>
    </Tr>
  );
  }


export default DashboardTableRow;
