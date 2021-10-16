import { LeftAnnotation } from '../annotation/LeftAnnotation';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Annotation = () => (
    <Section>
      <LeftAnnotation order="1" text="text" link="link"/>
    </Section>
);

export { Annotation };
