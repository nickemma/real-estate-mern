import React, { useMemo } from 'react';
import { useTable } from '@pankod/refine-core';
import { Add } from '@mui/icons-material';
import {
  Typography,
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
} from '@pankod/refine-mui';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { PropertyCard, CustomButton } from '../components/Common/index';

const AllProperties: React.FC = () => {
  const navigate = useNavigate();
  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    sorter,
    setSorter,
    filters,
    setFilters,
    pageCount,
  } = useTable();
  // @ts-ignore
  const allProperties = data?.data?.data || [];
  const currentPrice = sorter?.find((item) => item.field === 'price')?.order;

  const togglePriceSort = (field: string) => {
    setSorter([{ field, order: currentPrice === 'asc' ? 'desc' : 'asc' }]);
  };

  const currentFiltersValue = useMemo(() => {
    const filter = filters.flatMap((item) => ('field' in item ? item : []));
    return {
      title: filter.find((item) => item.field === 'title')?.value || '',
      propertyType:
        filter.find((item) => item.field === 'propertyType')?.value || '',
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;
  return (
    <Box>
      <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allProperties.length ? 'No Properties Found' : 'All Properties'}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: '20px', sm: 0 }}
            >
              <CustomButton
                title={`sort price ${currentPrice === 'asc' ? '↑' : '↓'}`}
                handleClick={() => togglePriceSort('price')}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
              <TextField
                variant="outlined"
                label="Search"
                color="info"
                placeholder="Search by title"
                value={currentFiltersValue.title}
                onChange={(e) => {
                  setFilters([
                    {
                      field: 'title',
                      operator: 'contains',
                      value: e.target.value,
                    },
                  ]);
                }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue=""
                value={currentFiltersValue.propertyType}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: 'propertyType',
                        operator: 'eq',
                        value: e.target.value,
                      },
                    ],
                    'replace'
                  );
                }}
              >
                <MenuItem value="">All</MenuItem>
                {[
                  'Apartment',
                  'Stadium',
                  'Villa',
                  'Office',
                  'Duplex',
                  'Studio',
                ].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton
          title="Add Property"
          icon={<Add />}
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
        />
      </Stack>
      <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {allProperties.map((property: any) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
          />
        ))}
      </Box>
      {allProperties.length > 0 && (
        <Box display="flex" flexWrap="wrap" gap={2} my="10px">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === 1}
          />
          <Box
            display={{ xs: 'hidden', sm: 'flex' }}
            alignItems="center"
            gap={2}
          >
            {' '}
            <strong>
              Page {current} of {pageCount}
            </strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={10}
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 10)
            }
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <MenuItem key={pageSize} value={pageSize}>
                Show {pageSize}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default AllProperties;
