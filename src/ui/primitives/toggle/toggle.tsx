import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import openedEyeIcon from '../../../assets/opened-eye.svg';
import closedEyeIcon from '../../../assets/closed-eye.svg';

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

// Not really consistent with the rest. Just a placeholder for the demo with bunch of weird overrides.
const CustomSwitch = styled(Switch)(() => ({
  margin: '-8px -8px 0 0',
  '& .MuiSwitch-thumb': {
    border: '2px solid #FF3648',
    backgroundColor: 'var(--background-color)',
    '@media (max-width: 480px)': {
      backgroundImage: `url("${closedEyeIcon}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
    border: 'none',
    backgroundColor: 'var(--button-primary)',
    '@media (max-width: 480px)': {
      backgroundImage: `url("${openedEyeIcon}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
}));

export function Toggle({ checked, onChange }: ToggleProps) {
  return <CustomSwitch checked={checked} onChange={onChange} />;
}
