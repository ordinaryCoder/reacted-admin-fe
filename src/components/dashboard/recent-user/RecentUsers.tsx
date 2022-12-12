import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
// import { formatDistanceToNow, subHours } from 'date-fns';
// import { v4 as uuid } from 'uuid';

// Temp function
const uuid = (num: number): number => num;

const products = [
  {
    id: uuid(1),
    name: 'Raymond Bryce',
    role: 'celebrity',
    imageUrl: '/public/assets/images/favicon-32x32.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(2),
    name: 'Medium Corporation',
    role: 'Creator',
    imageUrl: '/public/assets/images/favicon-32x32.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(3),
    name: 'Tommy Hanks',
    role: 'Celebrity',
    imageUrl: '/public/assets/images/favicon-32x32.png',
    // updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(4),
    name: 'Ranbeer Kapeer',
    role: 'Celebrity',
    imageUrl: '/public/assets/images/favicon-32x32.png',
    // updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(5),
    name: 'Moses Brasixka',
    role: 'Creator',
    imageUrl: '/public/assets/images/favicon-32x32.png',
    // updatedAt: subHours(Date.now(), 9),
  },
];

export const RecentUsers = (props: any) => {
  const router = useRouter();
  return (
    <Card {...props}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Recent Users"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img
                alt={product.name}
                src={`${router.basePath}/favicon-16x16.png`}
                style={{
                  height: 48,
                  width: 48,
                }}
              />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={product.role} />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};
