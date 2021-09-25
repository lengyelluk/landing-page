import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatureDuplicate } from './VerticalFeatureDuplicate';

const Duplicate = () => (
  <div className="antialiased text-gray-600">
    <Meta
      title={AppConfig.success_title}
      description={AppConfig.success_description}
    />
    <Hero />
    <VerticalFeatureDuplicate />
    <Footer />
  </div>
);

export { Duplicate };
