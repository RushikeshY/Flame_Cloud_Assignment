import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const MemberModal = ({
  title,
  onClose,
  handleCreate,
  isDelete,
  isOpen,

  placeholder,
}) => {
  const [data, setData] = useState([]);
  const [Name, setName] = useState("");
  const [NameData, setNameData] = useState([
    { id: 1, Name: "Ankur" },
    { id: 2, Name: "Raja" },
  ]);

  console.log(NameData);
  console.log(Name);

  const AddValue = (e) => {
    setName(e.target.value);
    NameData.push({
      id: uuidv4(),
      Name: Name,
    });
  };
  console.log(data);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    axios
      .get("https://glacial-bayou-71261.herokuapp.com/TeamData")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  let FilterData;
  const DeleteMember = (id) => {
    FilterData = NameData.filter((elem) => elem.id !== id);
    setNameData(FilterData);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={"8px"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text  mt={3} mb="8px" fontSize={"18px"} fontWeight={700} color={"#2563EB"}>
              Sales
            </Text>
            <Select >
              {data.map((elem) => {
                return <option>{elem.Name}</option>;
              })}
            </Select>
            <Text mb="8px" mt={3} fontSize={"18px"} fontWeight={700} color={"#2563EB"}>
              Marketing
            </Text>
            <Select onChange={AddValue}>
              {data.map((elem) => {
                return <option>{elem.Name}</option>;
              })}
            </Select>
            <Box style={{ display: "flex", gap: "5px" }}>
              {NameData.map((elem) => {
                return (
                  <Box style={{ display: "flex" }}>
                    <option>{elem.Name}</option>
                    <Button
                      onClick={() => DeleteMember(elem.id)}
                      colorScheme={"red"}
                      mt={1}
                      ml={1}
                      h={"20px"}
                      w={"10px"}
                    >
                      X
                    </Button>
                  </Box>
                );
              })}
            </Box>
            <Text  mt={3} mb="8px" fontSize={"18px"} fontWeight={700} color={"#2563EB"}>
              Design
            </Text>
            <Select >
              {data.map((elem) => {
                return <option>{elem.Name}</option>;
              })}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MemberModal;
