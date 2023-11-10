import { Text } from '@radix-ui/themes';
import React, { FC, PropsWithChildren } from 'react';

const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  if (!children) return null;

  return (
    <Text color='red' as='p'>
      {children}
    </Text>
  );
};

export default ErrorMessage;
