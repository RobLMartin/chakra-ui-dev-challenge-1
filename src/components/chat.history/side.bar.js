import {
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  IconButton,
  Box,
  Divider,
  Text,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import UserAvatar from "./user.avatar";
import ChatRow from "./chat.row";

const onlineFriends = [
  "Cody Rose",
  "Amanda Hartman",
  "Jake Cummings",
  "Ryan Watts",
  "Matt McD",
  "Mere Daniels",
  "Bobby Cornn",
  "Martin Kroger",
];

export default function SideBar() {
  return (
    <VStack h="full" alignItems="center" w="full" spacing={6}>
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Avatar name="Robert Martin" size="2xl">
          <AvatarBadge bg="green.400" boxSize={8} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size="md" mt={{ base: 0, lg: 3 }}>
            Robert Martin
          </Heading>
          <HStack px={8} justifyContent="center" spacing={3} mt={6}>
            <IconButton
              icon={<RiDribbbleLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Dribbble Account"
            />
            <IconButton
              icon={<RiInstagramLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Instagram Account"
            />
            <IconButton
              icon={<RiTwitterFill />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Twitter Account"
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} width="full">
        <Divider color="gray.100" />
      </Box>
      <HStack px={8} w="full" justifyContent="space-between">
        <Heading size="xs">Friends online</Heading>
        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
          23
        </Text>
      </HStack>
      <HStack
        overflowX="auto"
        minH={24}
        px={8}
        w="full"
        justifyContent="space-between"
        spacing={3}
      >
        {onlineFriends.map((friend) => (
          <UserAvatar friend={friend} key={friend} />
        ))}
      </HStack>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <Box px={8} w="full">
        <Heading size="xs" w="full">
          Chats
        </Heading>
        <Input
          variant="filled"
          mt={2}
          minH={10}
          rounded="full"
          placeholder="Search chat"
        />
      </Box>
      <Box w="full" overflowY="auto">
        <List w="full" spacing={0}>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
}
