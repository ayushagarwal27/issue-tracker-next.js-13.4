import { CustomSkeleton } from '@/app/components';
import { Flex, Card, Box } from '@radix-ui/themes';
import React from 'react';

const LoadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <CustomSkeleton />
      <Flex gap='3' my={'2'}>
        <CustomSkeleton width='5rem' />
        <CustomSkeleton width='8rem' />
      </Flex>
      <Card className='prose' mt='4'>
        <CustomSkeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
