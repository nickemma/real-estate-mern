import React from 'react';
import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import {
  TopAgent,
  PieChart,
  PropertyReferral,
  PropertyCard,
  TotalRevenue,
} from 'components/index';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#c4e8ef']}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#6978eb', '#c4e8ef']}
        />
        <PieChart
          title="Top Customers"
          value={5684}
          series={[75, 25]}
          colors={['#97a1ec', '#c4e8ef']}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[70, 45]}
          colors={['#275be8', '#c4e8ef']}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: 'column', lg: 'row' }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferral />
      </Stack>
    </Box>
  );
};

export default Home;
