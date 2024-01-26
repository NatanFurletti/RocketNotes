import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao Rest</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quae nesciunt harum! Maxime quos iure vitae pariatur, dolorem ad
            inventore numquam soluta, asperiores facere ipsa minima? Optio quas
            incidunt deserunt.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.github.com">Github</a>
              </li>
              <li>
                <a href="https://www.github.com">Github</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
