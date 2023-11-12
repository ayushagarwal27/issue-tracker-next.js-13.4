import React, { FC } from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import ReactMarkdown from 'react-markdown';

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
      <Card className='prose' mt='4'>
        <ReactMarkdown>{issueDetail.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
