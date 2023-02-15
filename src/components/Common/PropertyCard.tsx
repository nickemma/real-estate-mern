import { Place } from '@mui/icons-material';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Stack,
  CardContent,
} from '@pankod/refine-mui';
import { Link } from '@pankod/refine-react-router-v6';
import { PropertyCardProps } from 'interfaces/property';

const PropertyCard = ({
  id,
  title,
  location,
  price,
  photo,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth: '330',
        padding: '10px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)',
        },
        cursor: 'pointer',
        elevation: 0,
        textDecoration: 'none',
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="property image"
        sx={{ borderRadius: '10px' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          paddingX: '5px',
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={600} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{ fontSize: '18', marginTop: '0.5', color: '#11142d' }}
            />
            <Typography fontSize={15} color="#808191">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#dadefa"
          height="fit-content"
        >
          <Typography fontSize={15} fontWeight={600} color="#475be8">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
