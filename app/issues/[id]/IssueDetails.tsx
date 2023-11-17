import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';

const IssueDetails = ({ issueDetail }: { issueDetail: Issue }) => {
  return (
    <>
      <Heading className='capitalize'>{issueDetail.title}</Heading>
      <Flex gap='3' my={'2'}>
        <IssueStatusBadge status={issueDetail.status} />
        <Text>{issueDetail.created_at.toDateString()}</Text>
      </Flex>
      <Card className='prose max-w-full' mt='4'>
        <ReactMarkdown>{issueDetail.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
