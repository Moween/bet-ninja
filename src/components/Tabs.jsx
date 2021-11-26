import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SortIcon from '@material-ui/icons/Sort';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
import Today from '../components/Today';
import Yesterday from '../components/Yesterday';
import Tomorrow from '../components/Tomorrow';

const AppleTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();

  return (
    <Box sx={{ m: '1rem' }}>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        selectionFollowsFocus
        sx={{
          width: '100%',
          padding: 0,
          backgroundColor: '#0099FA',
          borderRadius: 0,
          [`& .MuiTypography-root`]: {
            textDecoration: 'none',
          },
          [`& .MuiButtonBase-root`]: {
            textTransform: 'capitalize',
            padding: '0.1rem',
            fontWeight: 'bold',
            color: '#031626',
          },
          [`& .MuiTabs-indicator`]: {
            color: '#FFF',
            backgroundColor: '#FFF',
          },
          [`& .MuiTab-root.Mui-selected`]: {
            color: '#FFF',
          },
          [`& .MuiTab-labelIcon`]: {
            marginLeft: 'auto',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          },
          [`& .MuiSvgIcon-root`]: {
            color: 'inherit'
          }
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
