'use client';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';

import { SalesChart } from './SalesChart';
import { useState } from 'react';

export default function SalesComponent() {
  const [selectedTab, setSelectedTab] = useState('1');

  function handleChangeTabs(event: React.SyntheticEvent, newTabs: string) {
    setSelectedTab(newTabs);
  }

  return (
    <>
      <Box>
        <Typography fontWeight="bold" sx={{ textAlign: 'center' }}>
          Sales Database
        </Typography>
        <TabContext value={selectedTab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              aria-label="Tabs Sales"
              onChange={handleChangeTabs}
              textColor="primary"
              indicatorColor="secondary"
            >
              <Tab label="Penjualan" value="1" />
              <Tab label="Pembelian" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SalesChart />
          </TabPanel>
          <TabPanel value="2">
            <Typography>Chart Pembelian</Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
