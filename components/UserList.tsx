import React, { useEffect, useState, } from 'react';
import { getUsers } from 'services/users';
import { List, ListItem, ListItemText, Typography, Skeleton, Card } from '@mui/material';
import { useUserStore } from 'store';

type TUserItem = {
  id: number;
  name: string;
};

function UserList() {
  const { userList, addUserList } = useUserStore();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (userList.length === 0) {
      getUsers().then(users => {
        setIsLoading(false);
        addUserList(users);
      }).catch(error => {
        console.error('Erro ao obter usuários:', error);
        setIsLoading(false);
      });
    }
  }, [userList]);

  return (
    <Card>
      <Typography variant="h6">Lista de Usuários</Typography>
      <List>
        {userList.map((user: TUserItem) => (
          <ListItem key={user.id}>
            {isLoading ?
            (<ListItemText primary={user.name} />)
            :
            (<Skeleton variant="rectangular" width={200} height={40} />)
            }
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default UserList;
