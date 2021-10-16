import { CTABanner } from '../cta/CTABanner';
import { Form2 } from '../form/Form2';
import { Section } from '../layout/Section';

const Banner = () => {
  return (
    <Section>
      <CTABanner
        title="Predpredaj začína už coškoro."
        subtitle="Registruj sa a získaj možnosť investovať do slovenskej kryptomeny."
        form={<Form2 placeholder="Email" />}
      />
    </Section>
  );
};

export { Banner };
