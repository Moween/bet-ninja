import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';
import Today from '../components/Today';
import Yesterday from '../components/Yesterday';
import Tomorrow from '../components/Tomorrow';

const AppleTabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const tabsStyles = appleTabsStylesHook.useTabs();
  const tabItemStyles = appleTabsStylesHook.useTabItem();

  return (
    <Box>
      <Tabs
        classes={tabsStyles}
        value={tabIndex}
        centered
        selectionFollowsFocus
        sx={{ 
          width: '100%',
          boxShadow: '3px 3px 2px 1px rgba(0, 0, 0, 0.2)',
          [`& .MuiTypography-root`]: {          
            textTransform: 'capitalize',       
            textDecoration: 'none',
          },
          [`& .MuiButtonBase-root`]: {
            color: "#ccc", 
          }
        }}
        onChange={(e, index) => setTabIndex(index)}
        aria-label="Tabs"
      >
        <Tab classes={tabItemStyles} disableRipple label="Yesterday" />
        <Tab classes={tabItemStyles} disableRipple label="Today" />
        <Tab classes={tabItemStyles} disableRipple label="Tomorrow"  />
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
  return (
    <>
      { value === index && (
        <Box>
          {children}
        </Box>
      )}
    </>
  );
}

export default AppleTabs;