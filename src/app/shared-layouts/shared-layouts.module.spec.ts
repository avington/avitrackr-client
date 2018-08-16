import { SharedLayoutsModule } from './shared-layouts.module';

describe('SharedLayoutsModule', () => {
  let sharedLayoutsModule: SharedLayoutsModule;

  beforeEach(() => {
    sharedLayoutsModule = new SharedLayoutsModule();
  });

  it('should create an instance', () => {
    expect(sharedLayoutsModule).toBeTruthy();
  });
});
