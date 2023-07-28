import React from 'react';
import {
    Button,
    TextField,
    Link,
    Grid,
    Container,
    Typography
} from "@mui/material";

const Join = () => {
  return (
    <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant='h5'>
                        회원가입
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {/* input 대신에 사용할 수 있는 Component */}
                    <TextField name='username' variant='outlined' required fullWidth id='username' label="아이디" autoFocus></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField name='password' variant='outlined' required fullWidth id='password' label="비밀번호" autoFocus type='password'></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' fullWidth variant='contained' color='priamry'>회원가입</Button>
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'}>
                <Grid item>
                    <Link href='#' variant='body2'>
                        이미 계정이 있습니까? 로그인하세요.
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Container>
  );
};

export default Join;