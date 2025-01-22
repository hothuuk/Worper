export class Text {
  private type: string = 'text';
  private text: string = '';

  private constructor(text?: string) {
    this.text = text ? text : '';
  }

  getType(): string {
    return this.type;
  }

  getText(): string | undefined {
    return this.text;
  }

  static Builder = class {
    private text?: string;

    setText(text: string): this {
      this.text = text;
      return this;
    }

    build(): Text {
      return new Text(this.text);
    }
  };
}