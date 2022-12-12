import { Box, Container } from '@mui/material';

import { Meta } from '@/components/meta/Meta';
import { UserListResults } from '@/components/Users/Celebrity/List/List';
import { UserListToolbar } from '@/components/Users/Celebrity/Toolbar/ToolBar';
import { Main } from '@/templates/Main';

import { customers } from '../__mocks__/users';

// list, view, edit, add
const Celebrity = () => (
  <Main meta={<Meta title="User List" description="User List" />}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ mt: 3 }}>
          <UserListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </Main>
);

export default Celebrity;
