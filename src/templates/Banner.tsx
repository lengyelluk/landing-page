import { CTABanner } from '../cta/CTABanner';
import { Form2 } from '../form/Form2';
import { Section } from '../layout/Section';

const Banner = () => {
  return (
    <Section>
      <CTABanner
        title="Čoskoro prvé kolo predaja."
        subtitle="Získaj bližšie info ako prvý."
        form={<Form2 placeholder="Email" />}
      />
    </Section>
  );
};

export { Banner };
