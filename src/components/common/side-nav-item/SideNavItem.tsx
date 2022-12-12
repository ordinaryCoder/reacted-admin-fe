import { Box, Button, ListItem } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const SideNavItem = (props: any) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? router.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <NextLink href={href} passHref>
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            ...(active
              ? {
                  backgroundColor: 'rgba(255,255,255, 0.08)',
                  fontWeight: 'fontWeightBold',
                  color: 'secondary.main',
                }
              : { color: 'neutral.300' }),
            borderRadius: 1,
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              ...(active
                ? { color: 'secondary.main' }
                : { color: 'neutral.400' }),
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)',
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

SideNavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
