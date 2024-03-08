import { Button } from "../../components/Button/Style";
import { Container, ContainerLogo } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { Subtitle, Title } from "../../components/Title/Style";
import { ContentLogo } from "./Style";
import { AntDesign } from "@expo/vector-icons";


export const RecuperarSenha = ({ navigation }) => {
  return (
    <Container>
      <ContainerLogo>
        <ContentLogo>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#34898F"
            onPress={() => { navigation.replace("Login") }}
          />
        </ContentLogo>

        <Logo source={require("../../assets/logo.png")} />

      </ContainerLogo>

      <Title>Recuperar senha</Title>

      <Subtitle>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle>

      <Input placeholder="Usuário ou E-mail" />

      <Button onPress={() => { navigation.replace("Verifique seu e-mail") }}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};