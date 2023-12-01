import prisma from '@/prisma/client';
// import IssueSummary from './IssueSummary';
import IssueChart from './IssueChart';

export default async function Home() {
  const openCount = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgressCount = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } });
  const closedIssuesCount = await prisma.issue.count({ where: { status: 'CLOSED' } });

  return <IssueChart open={openCount} inProgress={inProgressCount} closed={closedIssuesCount} />;
}
