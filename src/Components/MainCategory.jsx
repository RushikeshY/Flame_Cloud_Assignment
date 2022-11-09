import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Menu,
} from "@chakra-ui/react";
import SubCategory from "./SubCategory";
import ModalBox from "./Modal";
import { useState } from "react";
// import axios from "axios";

const Category = ({ data, setData }) => {

  const [catModal, setCatModal] = useState(false);


  const DelCategory = () => {

    setData([...data]);
    setCatModal(false);



  };
  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        {data.map((item) => {
          return (
            <AccordionItem key={item.id} backgroundColor={"#F1F5F9"}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    display={"flex"}
                    alignItems="center"
                  >
                    <Image src="/dragIcon.svg" />
                    <Box ml="4px" fontWeight={"700"} fontSize={"16px"}> {item.Category}</Box>
                  </Box>

                  <Menu>
                    <MenuButton as={Button}>
                      <Image src="/threeDot.svg" />
                    </MenuButton>

                    <MenuList>
                      <MenuItem>Edit Category</MenuItem>
                      <MenuItem>Manage Access</MenuItem>
                      <MenuItem
                        style={{
                          backgroundColor: "white",
                          color: "#DC2626",
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                        onClick={() => {
                          setCatModal(true);
                          // setCurrCat(item);
                        }}
                      >
                        Delete
                      </MenuItem>

                      <ModalBox
                        isOpen={catModal}
                        onClose={() => setCatModal(false)}
                        handleCreate={DelCategory}
                        isDelete={true}
                        title="Delete Category"
                      />
                    </MenuList>
                  </Menu>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={5} backgroundColor="#FFFFFF">
                <SubCategory
                  key={item.id}
                  subCategories={item.subCategories}
                  data={data}
                  setData={setData}
                />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Category;
