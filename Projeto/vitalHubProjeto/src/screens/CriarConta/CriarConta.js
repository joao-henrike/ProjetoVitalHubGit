
import { Logo } from '../../components/Logo/Style';
import { Title, Subtitle } from '../../components/Title/Style';
import { Input } from '../../components/Input/Style';
import { Button, ButtonSecondary } from '../../components/Button/Style';
import { ButtonSecondaryTitle, ButtonTitle } from '../../components/ButtonTitle/Style';
import { Container } from '../../components/Container/Style';
import { Title } from '../../components/Title/Style';

export const CriarConta = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require("../../assets/logo.png")} />

            <Title>Criar Conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <Input placeholder='Usuário ou E-mail' />

            <Input placeholder='Senha' />

            <Input placeholder='Confirmar Senha' />

            <Button onPress={() => { navigation.replace("Login") }}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <ButtonSecondary>
                <ButtonSecondaryTitle onPress={() => { navigation.replace("Login") }}>Cancelar</ButtonSecondaryTitle>
            </ButtonSecondary>
        </Container>
    );
};