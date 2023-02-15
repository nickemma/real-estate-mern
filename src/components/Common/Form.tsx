import {
  Box,
  Stack,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  TextareaAutosize,
  Select,
  Button,
  MenuItem,
} from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({
  type,
  formLoading,
  register,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          onSubmit={handleSubmit(onFinishHandler)}
          style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: '500',
                color: '#11142d',
                margin: '10px',
                fontSize: '18px',
              }}
            >
              Enter Property Name
            </FormHelperText>
            <TextField
              fullWidth
              required
              variant="outlined"
              id="outlined-basic"
              color="info"
              {...register('title', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: '500',
                color: '#11142d',
                margin: '10px',
                fontSize: '17px',
              }}
            >
              Enter Description
            </FormHelperText>
            <TextareaAutosize
              minLength={5}
              required
              placeholder="Enter Description"
              id="outlined-basic"
              color="info"
              style={{
                width: '100%',
                fontSize: '17px',
                background: 'transparent',
                borderColor: 'rgba(0, 0, 0, 0.23)',
                borderRadius: '6px',
                padding: '10px',
                color: '#808191',
              }}
              {...register('description', { required: true })}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: '500',
                  color: '#11142d',
                  margin: '10px 0',
                  fontSize: '17px',
                }}
              >
                Select Property Type
              </FormHelperText>
              <Select
                required
                variant="outlined"
                id="outlined-basic"
                color="info"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="apartment"
                {...register('propertyType', { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="farmHouse">Farm House</MenuItem>
                <MenuItem value="office">Office</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: '500',
                  color: '#11142d',
                  margin: '10px 0',
                  fontSize: '17px',
                }}
              >
                Enter Property price
              </FormHelperText>
              <TextField
                required
                variant="outlined"
                id="outlined-basic"
                color="info"
                type="number"
                {...register('price', { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: '500',
                color: '#11142d',
                margin: '10px 0',
                fontSize: '17px',
              }}
            >
              Enter Location
            </FormHelperText>
            <TextField
              required
              variant="outlined"
              id="outlined-basic"
              color="info"
              {...register('location', { required: true })}
            />
          </FormControl>
          <Stack direction="column" gap={1} justifyContent="center" mb="2">
            <Stack direction="row" gap={2}>
              <Typography
                fontSize={17}
                fontWeight={500}
                color="#11142d"
                my="10px"
              >
                Upload Property Image
              </Typography>
              <Button
                component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  fontSize: '17px',
                }}
              >
                Upload File *
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={15}
              fontWeight={400}
              color="#808191"
              sx={{ wordBreak: 'break-all' }}
            >
              {propertyImage?.name}
            </Typography>
          </Stack>
          <CustomButton
            type="submit"
            title={formLoading ? 'Loading...' : 'submit'}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
