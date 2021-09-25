import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatureSuccess = () => (
  <Section
    title="Registrácia prebehla v poriadku!"
    description="Hneď ako začne predaj Slovenskej digitálnej koruny, dostaneš daľšie informácie na zadaný e-mail. Ďakujeme!"
  >
    <VerticalFeatureRow
      title="Sleduj náš Facebook"
      description="Dozvieš sa ako postupuje vývoj a testovanie Slovenskej digitálnej koruny."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Sleduj náš Instagram"
      description="Buď v centre diania"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatureSuccess };
