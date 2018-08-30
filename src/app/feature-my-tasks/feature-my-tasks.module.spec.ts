import { FeatureMyTasksModule } from './feature-my-tasks.module';

describe('FeatureMyTasksModule', () => {
  let featureMyTasksModule: FeatureMyTasksModule;

  beforeEach(() => {
    featureMyTasksModule = new FeatureMyTasksModule();
  });

  it('should create an instance', () => {
    expect(featureMyTasksModule).toBeTruthy();
  });
});
