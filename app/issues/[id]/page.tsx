import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import prisma from '@/prisma/client';
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

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
    <Grid columns={{ initial: '1', md: '2' }} gap='5'>
      <Box>
        <Heading className='capitalize'>{issueDetail.title}</Heading>
        <Flex gap='3' my={'2'}>
          <IssueStatusBadge status={issueDetail.status} />
          <Text>{issueDetail.created_at.toDateString()}</Text>
        </Flex>
        <Card className='prose' mt='4'>
          <ReactMarkdown>{issueDetail.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issueDetail.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
