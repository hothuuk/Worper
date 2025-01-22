import { Text } from '../../../src/message/dto/Text';

describe('Text Class tests', () => {
  it('should create Text with default type and empty text', () => {
    const text = new Text.Builder().build();
    expect(text.getType()).toBe('text');
    expect(text.getText()).toBe('');
  });

  it('should create Text with provided text', () => {
    const text = new Text.Builder().setText('Hello, TypeScript!').build();
    expect(text.getType()).toBe('text');
    expect(text.getText()).toBe('Hello, TypeScript!');
  });
})