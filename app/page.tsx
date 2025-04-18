// app/page.tsx
import { Box, Heading, Text, Flex } from "@radix-ui/themes";
import React from "react";
import SocialLinks from "./components/SocialLinks";
export default function Home() {
  return (
    <Box position="relative" width="100%" height="100vh">
      <Flex direction="column" align="center" justify="center" height="100vh" gap="4">
        <Heading size="9" as="h1">
          Welcome to my <Text color="blue">Portfolio</Text>
        </Heading>

        <Text size="5" color="gold">
          I&apos;m a software developer with a passion for building innovative and user-friendly applications.
        </Text>

        <SocialLinks />

      </Flex>
    </Box>
  );
}
