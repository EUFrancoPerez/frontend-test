import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@mui/material';

import {
  HomeContainer,
  BodyContainer,
  UserSearchContainer,
} from './index.styled';

const Home = () => {
  const [userName, setUserName] = useState<string | undefined>();

  const handleUserNameTextField = (event: any) => {
    setUserName(event?.target?.value);
  };

  return (
    <HomeContainer>
      <BodyContainer>
        <FormControl fullWidth sx={{ m: 1 }}>
          <UserSearchContainer>
            <TextField
              id="user-name"
              label="Search by the name of the user"
              variant="outlined"
              fullWidth
              sx={{ marginRight: '40px' }}
              onChange={handleUserNameTextField}
            />
            <Button disabled={!userName} size="medium" variant="contained">
              Search
            </Button>
          </UserSearchContainer>
        </FormControl>
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
