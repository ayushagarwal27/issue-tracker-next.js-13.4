import { CustomSkeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';
import React from 'react';

const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
      <CustomSkeleton height={'2rem'}/>
      <CustomSkeleton height={'20rem'} />
    </Box>
  );
};

export default IssueFormSkeleton;
