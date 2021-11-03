import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
import Link from '@mui/material/Link';

const AppleTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();

  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      centered
      selectionFollowsFocus
      sx={{
        width: '100%',
        boxShadow: '3px 3px 2px 1px rgba(0, 0, 0, 0.2)',
        [`& .MuiTypography-root`]: {
          color: '#ccc',
          textTransform: 'capitalize',
          textDecoration: 'none',
        },
      }}
      onChange={(e, index) => setTabIndex(index)}
      aria-label="Tabs where selection follows "
    >
      <Tab
        classes={tabItemStyles}
        disableRipple
        label={<Link href="/yesterday">Yesterday</Link>}
      />
      <Tab
        classes={tabItemStyles}
        disableRipple
        label={<Link href="/">Today</Link>}
      />
      <Tab
        classes={tabItemStyles}
        disableRipple
        label={<Link href="/tomorrow">Tomorrow</Link>}
      />
    </Tabs>
  );
};

export default AppleTabs;
