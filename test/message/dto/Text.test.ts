import { TextBuilder } from '../../../src/message/dto/builder/TextBuilder';

describe('Text Class tests', () => {
  it('should create Text with default properties', () => {
    const text = new TextBuilder().build();

    expect(text.type).toBe('text');
    expect(text.text).toBe('');
    expect(text.contents).toBe(undefined);
  });

  it('should create Text with provided properties', () => {
    const text = new TextBuilder()
      .setText('Hello')
      .setColor('#FBFBFB')
      .build();

    expect(text.type).toBe('text');
    expect(text.text).toBe('Hello');
    expect(text.color).toBe('#FBFBFB');
  });
})