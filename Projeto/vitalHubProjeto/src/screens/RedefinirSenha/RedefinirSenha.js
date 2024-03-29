import { AntDesign } from "@expo/vector-icons";
import { Container, ContainerLogo } from "../../components/Container/Style";
import { ContentLogo } from "../RecuperarSenha/Style";
import { Logo } from "../../components/Logo/Style";
import { Subtitle, Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";



export const RedefinirSenha = ({ navigation }) => {
  return (
    <Container>
      <ContainerLogo>
        <ContentLogo>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#34898F"
            onPress={() => { navigation.replace("Verifique seu e-mail") }}
          />
        </ContentLogo>

        <Logo source={require("../../assets/logo.png")} />
      </ContainerLogo>

      <Title>Redefinir senha</Title>

      <Subtitle>Insira e confirme a sua nova senha.</Subtitle>

      <Input placeholder="Nova Senha" secureTextEntry={true} />
      <Input placeholder="Confirme nova senha" secureTextEntry={true} />

      <Button onPress={() => { navigation.replace("Login") }}>
        <ButtonTitle>Confirmar nova senha</ButtonTitle>
      </Button>
    </Container>
  );
};