import { CustomSkeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';
import React from 'react';

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-w-xl'>
      <CustomSkeleton />
      <CustomSkeleton height={'20rem'} />
    </Box>
  );
};

export default LoadingNewIssuePage;
