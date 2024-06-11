import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Logo from '../../assets/logo.png';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from './styles';
import { Button } from '../../components/Button';

export function Login() {
    const schema = yup.object({
        email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Digite uma senha'),
    }).required();

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors);
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>TO.FISH!</span>
                    <br />
                    Acesse com seu <span>Login e Senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")}/>
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")}/>
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                    <p>Não possui conta? <a>Clique aqui.</a></p>
                </Form>
            </RightContainer>
        </Container>
    );
}


