import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import { Stack, Avatar } from '@mui/system';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CategoryIcon from '@mui/icons-material/Category';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/create-music-creator',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Add Music Creators'
  },
  {
    href: '/music-creators',
    icon: (<UsersIcon fontSize="small" />),
    title: 'View Music Creators'
  },
  {
    href: '/create-celebrity',
    icon: (<SupervisedUserCircleIcon fontSize="small" />),
    title: 'Add Celebrity'
  },
  {
    href: '/celebrities',
    icon: (<SupervisedUserCircleIcon fontSize="small" />),
    title: 'View All Celebrities'
  },
  {
    href: '/categories',
    icon: (<CategoryIcon fontSize="small" />),
    title: 'Categories'
  },
  {
    href: '/social-media-platforms',
    icon: (<Diversity2Icon fontSize="small" />),
    title: 'Social Media Platforms'
  },
  {
    href: '/orders',
    icon: (<FeaturedPlayListIcon fontSize="small" />),
    title: 'Orders'
  },
  {
    href: '/customer-support',
    icon: (<CogIcon fontSize="small" />),
    title: 'Customer Support'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'My Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
        
          <Box sx={{ p: 1, 
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          textAlign: 'center' 
          }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
          
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <>
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              sx={{py: 1}}
            />
            </>
          ))}
        </Box>
        
        
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
