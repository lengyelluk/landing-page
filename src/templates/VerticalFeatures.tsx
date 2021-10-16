import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Práca, peniaze a ich hodnota"
    description="O výške Vašej výplaty rozhoduje Vaša kvalifikácia, zručnosti a skúsenosti. 
    Najvyššie platové ohodnotenie dosiahnete, ak budete mat kvalifikáciu v oblasti, 
    ktorú neovláda až toľko ľudí. Trhový mechanizmus založený na dopyte a ponuke Vás potom férovo ohodnotí. 
    Ale kvôli euru nie až tak férovo ako by ste si zaslúžili... hodnota 1 eura môže byť zajtra nižšia ako dnes."
  >
    <VerticalFeatureRow
      title="Európska centrálna banka (ECB)"
      description="O tom, akú hodnotu bude mať 1 euro nerozhoduje trh, tak ako o Vašej mzde, 
      ale Rada guvernérov Európskej centrálnej banky (ECB)². O menovej politike  eurozóny, a teda aj o hodnote euromince, 
      rozhoduje Šesť členov Výkonnej rady a guvernéri národných centrálnych bánk 19 krajín, hlasovaním³. 
      Guvernéri sa pri hlasovani rozhodujú podľa odporúčaní a modelov, ktoré vypracovalo 3500 odborníkov ECB."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Spoločná menová politika?"
      description="Nikoho ale neprekvapí, že všetky krajiny hája svoje individuálne záujmy a guvernéri (pravdepodobne) nehlasujú podľa odporúčaní odborníkov (hlasovanie je tajné)⁴. 
      Je ale samozrejmé, že bohaté krajiny ako Nemecko chcú chrániť svoje úspory. Už menej zrejmé je, že zadĺženým južanským štátom vyhovuje pokles 
      hodnoty spoločnej európskej meny. S klesajúcou hodnotou eura sa znižujú ich (nesplatiteľné) dlhy bez toho, aby si občania v týchto krajinách museli utiahnuť opasky.
      Hlasovanie je založené na základe protichodných ekonomických a politických záujmov krajín a osobných ambícií samotných guvernérov. 
      Jednoducho povedané, cena peňazí nie je výsledkom snahy o najlepšie možné riešenie."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Slovensko, euro a Slovenská digitálna koruna"
      description="Záujmy 5 miliónov Slovákov sú na chvoste 340 miliónej menovej únie. 
      Mnohé vyspelé ekonomiky Európy (Dánsko alebo Švédsko) odmietli princíp umelo ovplyvňovanej meny zo zahraničia a chcú chrániť ich občanov pred 
      rozhodnutiami Rady guvernérov ECB⁵. Rovnakú možnosť budú mať aj investori do slovenskej kryptomeny. 
      Ponuka Slovenských digitálnych korún je konečná, nebude možné aby novovytvorené (vytlačené) peniaze znížili hodnotu Vašich príjmov alebo úspor. 
      Naopak, rastúci dopyt bude viesť k rastu hodnoty Vašich investícii. 
      Ceny kryptomien sa rovnako ako Vaša mzda odvíja od trhového mechanizmu dopytu a ponuky. 
      Slovenská digitálna koruna nevzniká mimo územia Slovenska, nehlasuje sa o jej hodnote a komerčné banky nemajú na ňu žiadny vplyv."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
