import React, { FC } from 'react';
import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface CustomLinkProps {
  href: string;
  children: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default CustomLink;
