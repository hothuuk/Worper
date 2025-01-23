import { Text } from '../Text';

export class TextBuilder {
  private text?: string;
  private contents?: any[];
  private flex?: string;
  private margin?: string;
  private position?: string;
  private offsetTop?: string;
  private offsetBottom?: string;
  private offsetStart?: string;
  private offsetEnd?: string;
  private size?: string;
  private align?: string;
  private gravity?: string;
  private wrap?: boolean;
  private maxLines?: number;
  private weight?: string;
  private color?: string;
  private action?: any[];
  private style?: string;
  private decoration?: string;

  getText(): string | undefined {
    return this.text;
  }

  getContents(): any[] | undefined {
    return this.contents;
  }

  getFlex(): string | undefined {
    return this.flex;
  }

  getMargin(): string | undefined {
    return this.margin;
  }

  getPosition(): string | undefined {
    return this.position;
  }

  getOffsetTop(): string | undefined {
    return this.offsetTop;
  }

  getOffsetBottom(): string | undefined {
    return this.offsetBottom;
  }

  getOffsetStart(): string | undefined {
    return this.offsetStart;
  }

  getOffsetEnd(): string | undefined {
    return this.offsetEnd;
  }

  getSize(): string | undefined {
    return this.size;
  }

  getAlign(): string | undefined {
    return this.align;
  }

  getGravity(): string | undefined {
    return this.gravity;
  }

  getWrap(): boolean | undefined {
    return this.wrap;
  }

  getMaxLines(): number | undefined {
    return this.maxLines;
  }

  getWeight(): string | undefined {
    return this.weight;
  }

  getColor(): string | undefined {
    return this.color;
  }

  getAction(): any[] | undefined {
    return this.action;
  }

  getStyle(): string | undefined {
    return this.style;
  }

  getDecoration(): string | undefined {
    return this.decoration;
  }

  setText(text: string): this {
    this.text = text;
    return this;
  }

  setContents(contents: any[]): this {
    this.contents = contents;
    return this;
  }

  setFlex(flex: string): this {
    this.flex = flex;
    return this;
  }

  setMargin(margin: string): this {
    this.margin = margin;
    return this;
  }

  setPosition(position: string): this {
    this.position = position;
    return this;
  }

  setOffsetTop(offsetTop: string): this {
    this.offsetTop = offsetTop;
    return this;
  }

  setOffsetBottom(offsetBottom: string): this {
    this.offsetBottom = offsetBottom;
    return this;
  }

  setOffsetStart(offsetStart: string): this {
    this.offsetStart = offsetStart;
    return this;
  }

  setOffsetEnd(offsetEnd: string): this {
    this.offsetEnd = offsetEnd;
    return this;
  }

  setSize(size: string): this {
    this.size = size;
    return this;
  }

  setAlign(align: string): this {
    this.align = align;
    return this;
  }

  setGravity(gravity: string): this {
    this.gravity = gravity;
    return this;
  }

  setWrap(wrap: boolean): this {
    this.wrap = wrap;
    return this;
  }

  setMaxLines(maxLines: number): this {
    this.maxLines = maxLines;
    return this;
  }

  setWeight(weight: string): this {
    this.weight = weight;
    return this;
  }

  setColor(color: string): this {
    this.color = color;
    return this;
  }

  setAction(action: any[]): this {
    this.action = action;
    return this;
  }

  setStyle(style: string): this {
    this.style = style;
    return this;
  }

  setDecoration(decoration: string): this {
    this.decoration = decoration;
    return this;
  }

  build(): Text {
    return new Text(this);
  }
}
