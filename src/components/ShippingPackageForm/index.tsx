import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ContainerForm, SwitchDiv, Wrapper } from './styles';
import {
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Switch from '@mui/material/Switch';
import { useAtom } from 'jotai';
import { dadosOrigemShipping } from '../../store/store';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

// Schema de validação
const packageSchema = z.object({
  peso: z.number().min(1),
  altura: z.number().min(1),
  largura: z.number().min(1),
  comprimento: z.number().min(1),
  logisticaReversa: z.boolean(),
  avisoRecebimento: z.boolean(),
  maosProprias: z.boolean(),
  valorMercadoria: z.number().min(1),
  quantidadeItens: z.number().min(1),
  observacoes: z.string().optional(),
});

interface PackageData {
  peso: number;
  altura: number;
  largura: number;
  comprimento: number;
  logisticaReversa: boolean;
  avisoRecebimento: boolean;
  maosProprias: boolean;
  valorMercadoria: number;
  quantidadeItens: number;
  observacoes?: string;
}

const ShippingPackageForm = () => {
  const [dadosOrigemHookShipping, setDadosOrigemHookShipping] =
    useAtom(dadosOrigemShipping);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const peso = parseFloat(formData.get('peso') as string);
    const altura = parseFloat(formData.get('altura') as string);
    const largura = parseFloat(formData.get('largura') as string);
    const comprimento = parseFloat(formData.get('comprimento') as string);
    const logisticaReversa = formData.get('logisticaReversa') === 'on';
    const avisoRecebimento = formData.get('avisoRecebimento') === 'on';
    const maosProprias = formData.get('maosProprias') === 'on';
    const valorMercadoria = parseFloat(
      formData.get('valorMercadoria') as string,
    );
    const quantidadeItens = parseFloat(
      formData.get('quantidadeItens') as string,
    );
    const observacoes = formData.get('observacoes') as string;

    const packageData: PackageData = {
      peso,
      altura,
      largura,
      comprimento,
      logisticaReversa,
      avisoRecebimento,
      maosProprias,
      valorMercadoria,
      quantidadeItens,
      observacoes,
    };

    const validationResult = packageSchema.safeParse(packageData);

    if (validationResult.success) {
      console.log('Dados do pacote válidos:', validationResult.data);
      setValidationErrors([]);
      setDadosOrigemHookShipping((prevData) => ({
        ...prevData!,
        ...validationResult.data,
      }));
      navigate('/pacoteEnvio');
    } else {
      console.log('Erros de validação:', validationResult.error);
      setValidationErrors(
        validationResult.error.issues.map((issue) => issue.message),
      );
    }
  };
  // Funções de manipulação de mudança dos switches
  const handleChangeReversa = () => {
    setDadosOrigemHookShipping((prev) => {
      const novoDadosReversa = {
        ...prev,
        logicaReversa: !prev.logicaReversa,
      };
      return novoDadosReversa;
    });
  };
  const handleChangeAviso = () => {
    setDadosOrigemHookShipping((prev) => {
      const novoDadosAviso = {
        ...prev,
        avisoRecebimento: !prev.avisoRecebimento,
      };
      return novoDadosAviso;
    });
  };
  const handleChangeMaos = () => {
    setDadosOrigemHookShipping((prev) => {
      const novoDadosMaos = {
        ...prev,
        maosProprias: !prev.maosProprias,
      };
      return novoDadosMaos;
    });
  };
  return (
    <Wrapper>
      <h2>Dados do pacote de envio</h2>
      <form onSubmit={handleSubmit}>
        <ContainerForm>
          <div>
            <FormHelperText id="outlined-weight-helper-text">
              Peso
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-weight"
              name="peso"
              defaultValue={dadosOrigemHookShipping?.peso || ''}
              endAdornment={
                <InputAdornment position="end">gramas</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
                required: true,
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Altura
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-height"
              name="altura"
              defaultValue={dadosOrigemHookShipping?.altura || ''}
              endAdornment={
                <InputAdornment position="end">centímetros</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'height',
                required: true,
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Largura
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-width"
              name="largura"
              defaultValue={dadosOrigemHookShipping?.largura || ''}
              endAdornment={
                <InputAdornment position="end">centímetros</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'width',
                required: true,
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Comprimento
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-length"
              name="comprimento"
              defaultValue={dadosOrigemHookShipping?.comprimento || ''}
              endAdornment={
                <InputAdornment position="end">centímetros</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'length',
                required: true,
              }}
            />
          </div>
          <SwitchDiv>
            <FormControlLabel
              value="top"
              control={
                <Switch
                  name="logisticaReversa"
                  color="primary"
                  onChange={handleChangeReversa}
                  checked={dadosOrigemHookShipping?.logicaReversa || false}
                />
              }
              label="Logística Reversa"
              labelPlacement="top"
            />
            <FormControlLabel
              value="top"
              control={
                <Switch
                  name="avisoRecebimento"
                  color="primary"
                  onChange={handleChangeAviso}
                  checked={dadosOrigemHookShipping?.avisoRecebimento || false}
                />
              }
              label="Aviso de recebimento"
              labelPlacement="top"
            />
            <FormControlLabel
              value="top"
              control={
                <Switch
                  name="maosProprias"
                  color="primary"
                  onChange={handleChangeMaos}
                  checked={dadosOrigemHookShipping?.maosProprias || false}
                />
              }
              label="Mãos próprias"
              labelPlacement="top"
            />
          </SwitchDiv>
          <SwitchDiv>
            <div>
              <FormHelperText id="outlined-weight-helper-text">
                Valor da mercadoria
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-value"
                name="valorMercadoria"
                defaultValue={dadosOrigemHookShipping?.valorMercadoria || ''}
                endAdornment={
                  <InputAdornment position="end">R$</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'value',
                  required: true,
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">
                Quantidade dos itens
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-quantity"
                name="quantidadeItens"
                defaultValue={dadosOrigemHookShipping?.quantidadeItens || ''}
                endAdornment={
                  <InputAdornment position="end">itens</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'quantity',
                  required: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                name="observacoes"
                label="Observações"
                defaultValue={dadosOrigemHookShipping?.descriçaoItens || ''}
                multiline
                maxRows={4}
              />
            </div>
          </SwitchDiv>
        </ContainerForm>
        <Button type="submit" variant="contained" color="primary">
          Avançar
        </Button>
      </form>
      {validationErrors.length > 0 && (
        <div>
          <h3>Erros de validação:</h3>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};

export default ShippingPackageForm;
