import prisma from '@/prisma/client';
import IssueChart from './IssueChart';
import { Flex, Grid } from '@radix-ui/themes';
import IssueSummary from './IssueSummary';
import LatesIssues from './LatesIssues';

export default async function Home() {
  const openCount = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgressCount = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closedIssuesCount = await prisma.issue.count({
    where: { status: 'CLOSED' },
  });

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap={'5'}>
      <Flex direction={'column'} gap='5'>
        <IssueSummary
          open={openCount}
          inProgress={inProgressCount}
          closed={closedIssuesCount}
        />
        <IssueChart
          open={openCount}
          inProgress={inProgressCount}
          closed={closedIssuesCount}
        />
      </Flex>
      <LatesIssues />
    </Grid>
  );
}
