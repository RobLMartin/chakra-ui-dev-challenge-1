import React from "react";
import { Flex, Box, VStack, Heading, Text } from "@chakra-ui/react";
export default function ChatRow() {
  return (
    <Flex
      py={4}
      px={8}
      w="full"
      alignItems="center"
      borderBottomColor="gray.100"
      borderBottomWidth={1}
      style={{ transition: "background 300ms" }}
      _hover={{ bg: "gray.50", cursor: "pointer" }}
    >
      <Box rounded="full" bg="gray.100" minW={14} minH={14} />
      <VStack
        overflow="hidden"
        flex={1}
        ml={3}
        spacing={0}
        alignItems="flex-start"
      >
        <Heading fontSize={12} w="full">
          Cody Rose
        </Heading>
        <Text
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          w="full"
          fontSize="xs"
          color="gray.500"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos accusamus blanditiis pariatur rerum?
        </Text>
      </VStack>
      <Text ml="3" fontSize="xs" color="gray.500">
        8:30
      </Text>
    </Flex>
  );
}
