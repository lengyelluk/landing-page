import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-2">
      <CenteredFooter logo={<Logo />}></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
