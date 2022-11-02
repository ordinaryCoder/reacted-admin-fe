import { Container } from '@mui/material';

import { Meta } from '@/components/meta/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Reacted Admin Front end"
          description="Reacted Admin Front end"
        />
      }
    >
      <Container>
        {/* Dashboard - Stats, Recent Celebrity/Creator, Recent Orders, Total(all mentioned before) */}
        <h1>Boilerplate code for your Nextjs project with Tailwind CSS</h1>
      </Container>
    </Main>
  );
};

export default Index;
