import React, { FC } from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage: FC<IssueDetailPageProps> = async ({
  params: { id },
}) => {
  const issueDetail = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueDetail) {
    notFound();
  }

  return (
    <div>
      <Heading className='capitalize'>{issueDetail.title}</Heading>
      <Flex gap='3' my={'2'}>
        <IssueStatusBadge status={issueDetail.status} />
        <Text>{issueDetail.created_at.toDateString()}</Text>
      </Flex>
      <Card>{issueDetail.description}</Card>
    </div>
  );
};

export default IssueDetailPage;
