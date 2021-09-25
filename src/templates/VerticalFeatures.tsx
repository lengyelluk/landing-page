import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Slovenská digitálna koruna"
    description="Kopček zmrzliny stál jednu korunu. Teraz stojí jedno euro. Nenechaj si ukradnúť ešte viac! Mysli na svoju budúcnosť a budúcnosť svojich detí."
  >
    <VerticalFeatureRow
      title="Tvoj majetok klesá každým dňom"
      description="Máš prácu aby si zabezpečil svoju rodinu a aj tak si môžeš dovoliť každý mesiac menej? Už si premýšľal ako je možné, že ceny na Slovensku rastú rýchlejšie ako platy?"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Európska centrálna banka (ECB)"
      description="Vieš kto stojí na jej čele? Christine Lagardová. Počul si už o nej? Myslíš, že ju volili slovenskí občania a má vôbec záujem o prosperitu Slovenska? Vieš, že ECB tlačí Eurá ako na bežiacom páse?"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Euro je hrozba, riešenie je Slovenská digitálna koruna"
      description="Zbav sa Eura, investuj do Slovenskej digitálnej koruny. So Slovenskou digitálnou korunou sa už nemusíš báť prepadu Eura. Držme a budujme náš spoločný kapitál na Slovensku."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
