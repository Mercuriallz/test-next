'use client';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import RegionList from './RegionList';
import ReportList from './ReportList';
import PostForm from './InsertPlaceholder';

export default function Covid() {
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
              aria-label="Tabs Japan"
              onChange={handleChangeTabs}
              textColor="primary"
              indicatorColor="secondary"
            >
              <Tab label="Iso Name" value="1" />
              <Tab label="Report" value="2" />
              <Tab label="Movie" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <RegionList />
          </TabPanel>
          <TabPanel value="2">
            <ReportList />
          </TabPanel>
          <TabPanel value="3">
            <PostForm />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
