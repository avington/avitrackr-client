import { FeatureProfileModule } from './feature-profile.module';

describe('FeatureProfileModule', () => {
  let featureProfileModule: FeatureProfileModule;

  beforeEach(() => {
    featureProfileModule = new FeatureProfileModule();
  });

  it('should create an instance', () => {
    expect(featureProfileModule).toBeTruthy();
  });
});
