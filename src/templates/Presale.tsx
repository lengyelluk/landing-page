import { Countdown } from "./Countdown";
import { Section } from "../layout/Section";

const Presale = () => (
  <>
    <Section
      title="Predpredaj Slovenskej digitálnej koruny"
      description="Kým dočítate tento odsek, 100 tisíc eur práve stratilo 1 cent zo svojej hodnoty.  
      Pre 1 centovú medenú mincu sa bežný Slovák ani nezohne, prečo teda o nej píšeme? 
      Za 12 rokov vďaka centovým stratám prídete o polovicu svojho majetku¹. 
      Váš vysnívaný dom na ktorý roky sporíte bude polovičný (čo znamená, že si dom nikdy nepostavíte)."
      yPadding="pt-4"
      />
    <Section 
      description="Pre tých ktorí sa nechcú prizerať ako ich eurové úspory strácajú na hodnote prinášame riešenie. 
      Investícia do Kryptomeny Slovenská digitálna koruna bude už čoskoro možná v exkluzívnom predpredaji! Získajte možnosť úspešne ochrániť 
      hodnotu vašich peňazí už za:"
      yPadding="pb-8"
    />
    <Countdown 
      isPlaying={true}
      size={100}
      strokeWidth={6} />
  </>
);

export { Presale };
