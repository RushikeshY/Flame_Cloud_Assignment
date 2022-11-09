import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Image,
  Flex,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Pointer from "./Points";
import ModalBox from "./Modal";
import { v4 as uuidv4 } from "uuid";
import CreatePointeModal from "./CreatePointModal";
// import axios from "axios";

const SubCategory = ({ subCategories, data, setData }) => {
  const [SubCat, setSubCategory] = useState();
  const [showModal1, setShowModal1] = useState(false);
  console.log(showModal1);

  const [Modal, setModal] = useState(false);
  const [CurrSubCat, SetSubCat] = useState();

  const AddPoints = (value) => {
    // console.log(SubCat);
    SubCat.Points.push({ id: uuidv4(), PointName: value });
    setData([...data]);
    setShowModal1(false);
    setSubCategory(null);
  };

  const Delete = () => {
    const deleteIndex = subCategories.findIndex(
      (pointer) => pointer.id === CurrSubCat.id
    );
    delete subCategories[deleteIndex];
    setData([...data]);
    setModal(false);
    SetSubCat(null);
  };
  uuidv4();

  return (
    <Box>
      <Accordion allowMultiple>
        {subCategories.map((item) => (
          <AccordionItem key={item.id} backgroundColor="#FFFFFF">
            {({ isExpanded }) => (
              <>
                <Box
                  border={"1px solid #CBD5E1"}
                  backgroundColor={"#F8FAFC"}
                  alignItems="center"
                  p="5px"
                  borderRadius={"5px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  mb={"8px"}
                >
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                      <Box
                        flex="1"
                        textAlign="left"
                        marginLeft={"15px"}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <Image src="/dragIcon.svg" />
                        <Box ml="4px" fontWeight={"400"} fontSize={"14px"}>
                          {" "}
                          {item.SubCategory}
                        </Box>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <Menu>
                    <MenuButton as={Button}>
                      <Image src="/threeDot.svg" />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit Subcategory</MenuItem>
                      <MenuItem
                        style={{
                          backgroundColor: "white",
                          color: "#DC2626",
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                        onClick={() => {
                          setModal(true);
                          SetSubCat(item);
                        }}
                      >
                        Delete
                      </MenuItem>
                      <ModalBox
                        isOpen={Modal}
                        onClose={() => setModal(false)}
                        handleCreate={Delete}
                        isDelete={true}
                        title="Delete SubCategory"
                      />
                    </MenuList>
                  </Menu>
                </Box>
                <AccordionPanel pb={4}>
                  <Pointer
                    key={item.id}
                    pointsData={item.Points}
                    data={data}
                    setData={setData}
                  />

                  <Flex>
                    <Button
                      colorScheme="messenger"
                      variant="outline"
                      margin={"0 10px"}
                      onClick={() => {
                        setSubCategory(item);
                        setShowModal1(true);
                      }}
                    >
                      <AddIcon fontSize="12px" mr={"5px"} />
                      Add Pointer
                    </Button>

                    <Button
                      colorScheme="messenger"
                      variant="outline"
                      margin={"0 10px"}
                    >
                      <AddIcon fontSize="12px" mr={"5px"} />
                      On Hover**
                    </Button>
                  </Flex>

                  <CreatePointeModal
                    isOpen={showModal1}
                    onClose={() => setShowModal1(false)}
                    handleCreate1={AddPoints}
                    title="Pointer Name"
                    placeholder={"Name Pointer"}
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default SubCategory;
