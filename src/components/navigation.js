import { VStack, IconButton, Tooltip } from "@chakra-ui/react";
import { MdDashboard, MdMail, MdSettings } from "react-icons/md";
import { HiLightningBolt, HiBell, HiTag, HiSearch } from "react-icons/hi";

import Logo from "./logo";

export default function navigation() {
  return (
    <VStack p={6} justifyContent="space-between" alignItems="center" w="full">
      <VStack>
        <Logo />
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            color="gray.500"
            icon={<MdDashboard />}
            aria-label="Dashboard"
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiLightningBolt />}
            aria-label="Actions"
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiSearch />}
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            color="gray.500"
            icon={<HiBell />}
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton color="gray.500" icon={<HiTag />} aria-label="Tags" />
        </Tooltip>
        <Tooltip label="Mail" placement="right">
          <IconButton color="gray.500" icon={<MdMail />} aria-label="Mail" />
        </Tooltip>
      </VStack>
      <Tooltip label="Settings" placement="right">
        <IconButton
          color="gray.500"
          icon={<MdSettings />}
          aria-label="Settings"
        />
      </Tooltip>
    </VStack>
  );
}
