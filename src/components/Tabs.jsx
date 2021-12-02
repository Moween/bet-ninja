import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SortIcon from '@material-ui/icons/Sort';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
import { useSelector } from 'react-redux';

import Today from '../components/Today';
import Yesterday from '../components/Yesterday';
import Tomorrow from '../components/Tomorrow';

const AppleTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const mobile = useSelector((state) => state.mediaQuery.mobile);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();

  return (
    <Box sx={{ m: '1rem' }}>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        selectionFollowsFocus
        sx={{
          padding: 0,
          backgroundColor: mobile ? '#ccc' : '#0099FA',
          ml: mobile ? 'calc(50% - 50vw)' : '0',
          mr: mobile ? 'calc(50% - 50vw)' : '0',
          borderRadius: 0,
          [`& .MuiTypography-root`]: {
            textDecoration: 'none',
          },
          [`& .MuiButtonBase-root`]: {
            textTransform: 'capitalize',
            fontSize: mobile ? '0.6875rem' : '0.875rem',
            padding: '0.1rem',
            fontWeight: 'bold',
            color: '#031626',
          },
          [`& .MuiTabs-indicator`]: {
            color: '#ccc',
            backgroundColor: mobile ? '#0099FA' : '#ccc',
          },
          [`& .MuiTab-root.Mui-selected`]: {
            color: mobile ? '#0099FA' : '#ccc',
          },
          [`& .MuiTab-labelIcon`]: {
            marginLeft: 'auto',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          },
          [`& .MuiSvgIcon-root`]: {
            color: 'inherit',
          },
        }}
        onChange={(e, index) => setTabIndex(index)}
        aria-label="Tabs"
      >
        <Tab classes={tabItemStyles} disableRipple label="Yesterday" />
        <Tab classes={tabItemStyles} disableRipple label="Today" />
        <Tab classes={tabItemStyles} disableRipple label="Tomorrow" />
        <Tab
          classes={tabItemStyles}
          icon={<SortIcon />}
          disableRipple
          aria-label="sort"
          label="Sort"
        />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Yesterday />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Today />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <Tomorrow />
      </TabPanel>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <Box>{children}</Box>}</>;
};

export default AppleTabs;
