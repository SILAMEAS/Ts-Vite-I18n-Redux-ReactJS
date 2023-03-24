import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputField from '@components/inputField/InputField';
import {NavLink} from 'react-router-dom';
import {Localization} from '@/i18n/lan';
import {useTranslation} from 'react-i18next';
export default function Login() {
  const {t} = useTranslation();
  const [check, setCheck] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkError, setCheckError] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={{height: '100vh'}}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        pt={'6%'}>
        <Box
          sx={{
            justifyContent: 'center',
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            ml: '10%',
          }}>
          <Grid container md={12} rowSpacing={15}>
            <Grid item md={12}>
              <Typography component="h6" variant="h5">
                {t(Localization('title', 'signature'))}
              </Typography>
            </Grid>
            <Grid item md={12} rowSpacing={2}>
              <Typography component="h6" variant="h6" fontWeight={'bold'}>
                {t(Localization('title', 'welcome to signature'))}
              </Typography>
              <Typography
                component="h6"
                variant="body2"
                color={'grey.800'}
                mt={'2%'}>
                {t(Localization('title', 'log into access'))}
              </Typography>
            </Grid>
          </Grid>
          <Box component="form" noValidate onSubmit={handleSubmit} mt={'5%'}>
            <Grid container md={12} rowSpacing={5}>
              <Grid item md={12}>
                <InputField
                  setValue={setEmail}
                  value={email}
                  NameId={t(Localization('form', 'email'))}
                  placeholder={t(Localization('form', 'email'))}
                />
              </Grid>
              <Grid item md={12}>
                <InputField
                  setValue={setPassword}
                  value={password}
                  NameId={t(Localization('form', 'password'))}
                  placeholder={t(Localization('form', 'password'))}
                  textLabel={'Mot de passe'}
                  type={'password'}
                />
              </Grid>
            </Grid>
            <FormControlLabel
              disabled={!(email !== '' && password !== '')}
              sx={{mt: 2}}
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={check}
                  onChange={e => {
                    setCheck(e.target.checked);
                  }}
                />
              }
              label={t(Localization('title', 'condition of us'))}
            />
            <NavLink to={'/dsf'}>
              <Button
                type={'submit'}
                variant={'contained'}
                // color={'buttonLogin'}
                disabled={!check}
                sx={{
                  mt: 3,
                  textTransform: 'none',
                  mb: 2,
                  width: '40%',
                  fontWeight: 'bold',
                }}
                onClick={() => {
                  setCheckError(true);
                }}>
                Valider
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
}
