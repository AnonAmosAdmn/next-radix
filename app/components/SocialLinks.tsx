// components/SocialLinks.tsx
'use client'
import React from "react";
import { Flex, Link as RadixLink, IconButton } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function SocialLinks() {
    return (
        
        <Flex gap="4" mt="6">
            <RadixLink href="https://github.com/your-username" target="_blank">
            <IconButton variant="outline" size="3">
                <GitHubLogoIcon />
            </IconButton>
            </RadixLink>

            <RadixLink href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">
            <IconButton variant="outline" size="3">
                <LinkedInLogoIcon />
            </IconButton>
            </RadixLink>

            <RadixLink href="https://www.twitter.com/your-twitter-profile/" target="_blank">
            <IconButton variant="outline" size="3">
                <TwitterLogoIcon />
            </IconButton>
            </RadixLink>
        </Flex>
    );
}
