import Logo  from '../../assets/logo.png';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from './styles';
import { Button } from '../../components/Button';

export function Login() {

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo"/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>TO.FISH!</span> 
                    <br />
                    Acesse com seu <span>Login e Senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                    <p>Não possui conta? <a>Clique aqui.</a></p>
                </Form>
            </RightContainer>
        </Container>
    );
}


