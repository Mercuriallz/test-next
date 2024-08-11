'use client';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import ClassicArts from './Classic-Art';

export default function Art() {
  const [selectedTab, setSelectedTab] = useState('1');

  function handleChangeTabs(event: React.SyntheticEvent, newTabs: string) {
    setSelectedTab(newTabs);
  }

  return (
    <>
      <Box>
        <TabContext value={selectedTab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              aria-label="Tabs Art"
              onChange={handleChangeTabs}
              textColor="primary"
              indicatorColor="secondary"
            >
              <Tab label="Classic Art" value="1" />
              <Tab label="Modern Art" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ClassicArts />
          </TabPanel>
          <TabPanel value="2">Tabs For Modern Art</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
