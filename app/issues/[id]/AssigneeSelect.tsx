'use client';

import { CustomSkeleton } from '@/app/components';
import { Issue, User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();

  function assignIssue(userId: string) {
    axios
      .patch('/api/issues/' + issue.id, {
        assignedToUserId: userId || null,
      })
      .catch(error => {
        toast.error('Changes could not be saved');
      });
  }

  if (isLoading) {
    return <CustomSkeleton />;
  }

  if (error) return null;


  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ''}
        onValueChange={assignIssue}
      >
        <Select.Trigger placeholder='Assign...' />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value=''>Unassigned</Select.Item>
            {users?.map(user => (
              <Select.Item value={user.id} key={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => {
      return axios.get('/api/users').then(res => res.data);
    },
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

export default AssigneeSelect;
