import React, { FC } from 'react';
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';

interface IssueDetailPageProps {
  params: { id: string };
}

const IssueDetailPage: FC<IssueDetailPageProps> = async ({
  params: { id },
}) => {
  if (typeof id !== 'number') {
    notFound();
  }

  const issueDetail = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issueDetail) {
    notFound();
  }

  return (
    <div>
      <p>{issueDetail.title}</p>
      <p>{issueDetail.description}</p>
      <p>{issueDetail.status}</p>
      <p>{issueDetail.created_at.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
