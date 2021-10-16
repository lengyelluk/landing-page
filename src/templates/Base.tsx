import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Presale } from './Presale';
import { VerticalFeatures } from './VerticalFeatures';
import { Annotation } from './Annotation';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Presale />
    <VerticalFeatures />
    <Banner />
    <Annotation />
    <Footer />
  </div>
);

export { Base };
