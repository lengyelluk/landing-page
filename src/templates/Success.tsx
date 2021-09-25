import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatureSuccess } from './VerticalFeatureSuccess';

const Success = () => (
  <div className="antialiased text-gray-600">
    <Meta
      title={AppConfig.success_title}
      description={AppConfig.success_description}
    />
    <Hero />
    <VerticalFeatureSuccess />
    <Footer />
  </div>
);

export { Success };
