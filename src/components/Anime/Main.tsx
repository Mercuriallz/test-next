'use client';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import React, { useState } from 'react';
import AnimeList from './AnimeList';

export default function Japan() {
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
              <Tab label="Anime" value="1" />
              <Tab label="Industry Anime" value="2" />
              <Tab label="Movie" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AnimeList />
          </TabPanel>
          <TabPanel value="2">
            <Typography>Panel Waifu</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>Panel Movie</Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
