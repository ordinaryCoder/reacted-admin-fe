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
// import { formatDistanceToNow, subHours } from 'date-fns';
// import { v4 as uuid } from 'uuid';

// Temp function
const uuid = (num: number): number => num;

const products = [
  {
    id: uuid(1),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(2),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    // updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(3),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    // updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(4),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    // updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(5),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    // updatedAt: subHours(Date.now(), 9),
  },
];

export const RecentUsers = (props: any) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            // secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
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
