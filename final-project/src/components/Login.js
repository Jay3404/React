import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';



const Login = () => {

    // function Copyright(props) {
    //     return (
    //         <Typography variant="body2" color="text.secondary" align="center" {...props}>
    //             {'Copyright © '}
    //             <Link color="inherit" href="https://mui.com/">
    //                 Eo Heung
    //             </Link>{' '}
    //             {new Date().getFullYear()}
    //             {'.'}
    //         </Typography>
    //     );
    // }

    const defaultTheme = createTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ width: '60%', height: '100vh', alignItems: 'center', margin: 'auto' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        height: '70%',
                        backgroundImage: 'url(https://item.kakaocdn.net/do/1dd07538dc742e6020f3cf7e59555cd9f43ad912ad8dd55b04db6a64cddaf76d)',
                        // 호랑이 https://item.kakaocdn.net/do/1dd07538dc742e6020f3cf7e59555cd9f43ad912ad8dd55b04db6a64cddaf76d
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                    height: '70%',

                }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                            우리가 함께하는 이 순간
                        </Typography>
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
                            어 흥!
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="dense"
                                fullWidth
                                id="email"
                                label="휴대폰 번호를 입력해 주세요."
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="dense"
                                fullWidth
                                name="password"
                                label="비밀번호를 입력해 주세요."
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="날 기억해줘!"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, fontWeight: "bold", fontSize: "15px" }}
                            >
                                어흥하러 가기
                            </Button>
                            <Grid container sx={{ marginBottom: '35px' }}>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        앗! 비밀번호를 까먹었을 땐?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"계정이 없으신가요?"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Divider sx={{ marginBottom: '20px' }} />
                            <Typography component="h2" variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                소셜 로그인
                            </Typography>
                            <Grid container sx={{ width: '70%', height: '75px', margin: '0 auto', }} spacing={2.5}>
                                <Grid item xs={3}>
                                    <Link href="#">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: 'url(https://www.inavi.com/Content2/Images/mobileLogin/social-login-naver-icon.svg)',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="#">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: 'url(https://i0.wp.com/forhappywomen.com/wp-content/uploads/2018/11/%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC-%ED%8F%AC%ED%95%B4%ED%94%BC%EC%9A%B0%EB%A8%BC-%EB%AC%B8%EC%9D%98-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%B9%9C%EA%B5%AC-%EB%B2%84%ED%8A%BC.png?resize=586%2C586&ssl=1)',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="#">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: 'url(https://www.doobuying.com/assets/img/icon-facebook.png)',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </Link>
                                </Grid>
                                <Grid item xs={3}>
                                    <Link href="#">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: 'url(https://chuu.co.kr/images/login/join_google.png)',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login