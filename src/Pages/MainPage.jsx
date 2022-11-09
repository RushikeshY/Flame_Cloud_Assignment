import React, { useEffect, useState } from "react";
import Category from "../Components/MainCategory";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import ModalBox from "../Components/Modal";
// import { v4 as uuidv4 } from "uuid";

import axios from "axios";

import MemberModal from "../Components/MemberModel";
const PlanManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModel1, setShowModel1] = useState(false);
  const [data, setData] = useState([]);

  const AddPlan = (value) => {
    const obj = {
      Category: value,
      subCategories: [
        {
          id: 1,
          SubCategory: "Wordpress",
          Points: [],
        },
        {
          id: 2,
          SubCategory: "Google Drive",
          Points: [],
        },
      ],
    };

    axios.post("https://glacial-bayou-71261.herokuapp.com/Data", obj);
    setShowModal(false);
    GetData();
  };

  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios.get("https://glacial-bayou-71261.herokuapp.com/Data").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const AddMember = () => {};

  return (
    <Box p="6%">
      <Heading size="sm" align={"left"} fontWeight={"normal"}>
        SOP
      </Heading>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        marginBottom="28px"
      >
        <Text
          textAlign={"left"}
          fontSize="32px"
          fontWeight={"700"}
          fontStyle="normal"
          lineHeight={"44px"}
        >
          Action Plans
        </Text>
        <Box>
          <Button
            onClick={() => setShowModel1(true)}
            colorScheme="messenger"
            variant="outline"
            marginRight={"10px"}
          >
            <Icon as={BsPeople} w="5" h="5" mr={"5px"} /> Manage Access
          </Button>
          <Button colorScheme="messenger" onClick={() => setShowModal(true)}>
            <AddIcon fontSize="12px" mr={"5px"} /> New Plan
          </Button>
          <ModalBox
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            handleCreate={AddPlan}
            title="Plan Name"
            placeholder={"Name Your Plan"}
          />
        </Box>
        <MemberModal
          isOpen={showModel1}
          onClose={() => setShowModel1(false)}
          handleCreate={AddMember}
          data={data}
          title="SOP Access"
          placeholder={"select members"}
        />
      </Box>
      <Category key={data.id} data={data} setData={setData} />
    </Box>
  );
};

export default PlanManagement;
