import { Button } from '@pankod/refine-mui';
import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({
  title,
  icon,
  handleClick,
  backgroundColor,
  color,
  type,
  fullWidth,
  disabled,
}: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      sx={{
        flex: fullWidth ? 1 : 'unset',
        padding: '10px 15px',
        width: fullWidth ? '100%' : 'fit-content',
        minWidth: '130px',
        backgroundColor,
        color,
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 600,
        gap: '10px',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor,
          opacity: 0.9,
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
