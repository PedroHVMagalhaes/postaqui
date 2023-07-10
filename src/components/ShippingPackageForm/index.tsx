import Button from '@mui/material/Button';
import { SwitchDiv, Wrapper } from './styles';
import {
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Switch from '@mui/material/Switch';

const ShippingPackageForm = () => {
  return (
    <Wrapper>
      <h2>Dados do pacote de envio</h2>
      <form>
        <div>
          <FormHelperText id="outlined-weight-helper-text">Peso</FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Peso</FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Peso</FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Peso</FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </div>
        <SwitchDiv>
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Logística Reversa"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Aviso de recebimento"
            labelPlacement="top"
          />
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Mãos próprias"
            labelPlacement="top"
          />
        </SwitchDiv>
        <SwitchDiv>
          <div>
            <FormHelperText id="outlined-weight-helper-text">
              Peso
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Peso
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
            />
          </div>
        </SwitchDiv>
      </form>
      <Button type="submit" variant="contained" color="primary">
        Avançar
      </Button>
    </Wrapper>
  );
};

export default ShippingPackageForm;