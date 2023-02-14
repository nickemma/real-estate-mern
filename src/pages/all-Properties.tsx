import React from 'react';
import { useList } from '@pankod/refine-core';
import { Add } from '@mui/icons-material';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { PropertyCard, CustomButton } from '../components/Common/index';

const AllProperties: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          icon={<Add />}
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
        />
      </Stack>
    </Box>
  );
};

export default AllProperties;
