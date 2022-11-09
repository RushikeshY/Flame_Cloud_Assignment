import React, { useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import ModalBox from "./Modal";
import { ViewIcon } from "@chakra-ui/icons";

const Pointer = ({ pointsData, data, setData }) => {
  const [Modal, setModal] = useState(false);
  const [Point, setPoint] = useState();

  const deletePointer = () => {
    const Del = pointsData.findIndex((pointer) => pointer.id === Point.id);
    delete pointsData[Del];
    setData([...data]);
    setModal(false);
    setPoint(null);
  };
  return (
    <Box ml="22px">
      {pointsData.map((item) => (
        <Box
          p="5px"
          borderRadius={"5px"}
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
          mb={"8px"}
          border={"1px solid #CBD5E1"}
          backgroundColor={"#F8FAFC"}
        >
          <Box display={"flex"}>
            <Image src="/dragIcon.svg" />
            <Box ml="4px">{item.PointName}</Box>
          </Box>
          <ViewIcon mr={-930} fontSize={"xl"} />
          <Menu>
            <MenuButton as={Button}>
              <Image src="/threeDot.svg" />
            </MenuButton>
            <MenuList>
              <MenuItem>Edit Pointer</MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "white",
                  color: "#DC2626",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
                onClick={() => {
                  setModal(true);
                  setPoint(item);
                }}
              >
                Delete
              </MenuItem>
              <ModalBox
                isOpen={Modal}
                onClose={() => setModal(false)}
                handleCreate={deletePointer}
                isDelete={true}
                title="Delete Pointer"
              />
            </MenuList>
          </Menu>
        </Box>
      ))}
    </Box>
  );
};

export default Pointer;
