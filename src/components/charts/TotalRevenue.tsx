import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue: React.FC = () => {
  return (
    <Box
      bgcolor="#fcfcfc"
      id="chart"
      p={4}
      flex={1}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={20} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my="20px" direction="row" flexWrap="wrap" gap={4}>
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $ 225,000
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: '#475be8' }} />
          <Stack>
            <Typography fontSize={18} color="#475be8">
              10%
            </Typography>
            <Typography fontSize={18} fontWeight={500} color="#808191">
              Than last month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        // type="area"
        height={300}
      />
    </Box>
  );
};

export default TotalRevenue;
