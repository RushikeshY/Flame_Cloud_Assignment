import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

const CreatePointeModal = ({
  isOpen,
  onClose,
  handleCreate1,
  isDelete,
  title,
  placeholder,
}) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={"8px"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            auctor. Sit amet, consectetur adipiscing consectetur adipiscing
            elit.
            {!isDelete && (
              <Input
                mt={"5px"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
              />
            )}
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
            <Button
              colorScheme="messenger"
              onClick={() => {
                isDelete ? handleCreate1() : handleCreate1(value);
                setValue("");
              }}
            >
              {isDelete ? "Delete" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePointeModal;
