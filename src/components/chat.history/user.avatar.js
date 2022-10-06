import { Avatar, Tooltip, AvatarBadge } from "@chakra-ui/react";

export default function UserComponent({ friend }) {
  return (
    <Tooltip label={friend}>
      <Avatar name={friend}>
        <AvatarBadge boxSize={4} bg="green.500" />
      </Avatar>
    </Tooltip>
  );
}
