import { Box, Stack, Typography } from '@pankod/refine-mui';
import React from 'react';
import { propertyReferralsInfo } from '../../constants/index';

interface IProgressBarsProps {
  title: string;
  percentage: number;
  color: string;
}

const progressBars = ({ title, percentage, color }: IProgressBarsProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#808191">
        {title}
      </Typography>
      <Typography fontSize={14} fontWeight={500} color="#808191">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      height="10px"
      borderRadius={1}
      mt={2}
      width="100%"
      position="relative"
      bgcolor="#e4e8ef"
    >
      <Box
        height="100%"
        position="absolute"
        width={`${percentage}%`}
        bgcolor={color}
        borderRadius={1}
      />
    </Box>
  </Box>
);

const PropertyReferral: React.FC = () => {
  return (
    <Box
      bgcolor="#fcfcfc"
      id="chart"
      p={4}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      minWidth={490}
    >
      <Typography fontSize={20} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>
      <Stack my="20px" gap={4} direction="column">
        {propertyReferralsInfo.map((item) =>
          progressBars({
            title: item.title,
            percentage: item.percentage,
            color: item.color,
          })
        )}
      </Stack>
    </Box>
  );
};

export default PropertyReferral;
