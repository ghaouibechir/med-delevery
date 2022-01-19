import React ,{ useState, useEffect } from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesProjectData, tablesTableData } from "variables/general";
import axios from "axios"
import moment from "moment"
import online from "./online.jpg"

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/admin/getPharmacies')
    .then(({data}) =>{
     
      setTableData(data)
     
    }
    ) 
  },[])
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Pharmacies Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                 Pharmacy
                </Th>
                <Th color="gray.400">Address</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Joined At</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
             
              {
              tableData.map((row) => {
                return (
                  <TablesTableRow
                    name={row.username}
                    // logo={row.logo}
                     email={row.email}
                    
                    domain={row.location}
                    status={row.connected}
                    date={moment(row.createdAt).format("MMM Do YY")}
                    
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      
    </Flex>
  );
}

export default Tables;
