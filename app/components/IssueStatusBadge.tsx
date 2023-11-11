import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';
import React, { FC } from 'react';

interface IssueStatusBadgeProps {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: 'red' |'violet'|'green' }> = {
  OPEN: { label: 'Open', color: 'red' },
  CLOSED: { label: 'Closed', color: 'violet' },
  IN_PROGRESS: { label: 'In Progress', color: 'green' },
};

const IssueStatusBadge: FC<IssueStatusBadgeProps> = ({ status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
