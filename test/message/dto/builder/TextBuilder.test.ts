import { TextBuilder } from '../../../../src/message/dto/builder/TextBuilder';

describe('TextBuilder class tests', () => {
  it('should create TextBuilder with empty properties', () => {
    const builder = new TextBuilder();

    expect(builder.getText()).toBe(undefined);
    expect(builder.getContents()).toBe(undefined);
  });

  it('should create TextBuilder with provided properties', () => {
    const builder = new TextBuilder()
      .setText('Hello')
      .setWrap(true);

    expect(builder.getText()).toBe('Hello');
    expect(builder.getWrap()).toBe(true);
  });
})