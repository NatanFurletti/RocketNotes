import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/natanfurletti.png" alt="Foto do usuário" />

        <div>
          <spam>Bem-vindo</spam>
          <strong>Natan Furletti</strong>
        </div>
      </Profile>
    </Container>
  );
}
