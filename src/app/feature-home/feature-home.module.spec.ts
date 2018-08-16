import { FeatureHomeModule } from './feature-home.module';

describe('FeatureHomeModule', () => {
  let featureHomeModule: FeatureHomeModule;

  beforeEach(() => {
    featureHomeModule = new FeatureHomeModule();
  });

  it('should create an instance', () => {
    expect(featureHomeModule).toBeTruthy();
  });
});
