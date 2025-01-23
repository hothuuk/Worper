import { Serializable } from '../../common/Serializable';
import { TextBuilder } from './builder/TextBuilder';

export class Text extends Serializable {
  readonly type: string;
  readonly text: string;
  readonly contents?: any[];
  readonly flex?: string;
  readonly margin?: string;
  readonly position?: string;
  readonly offsetTop?: string;
  readonly offsetBottom?: string;
  readonly offsetStart?: string;
  readonly offsetEnd?: string;
  readonly size?: string;
  readonly align?: string;
  readonly gravity?: string;
  readonly wrap?: boolean;
  readonly maxLines?: number;
  readonly weight?: string;
  readonly color?: string;
  readonly action?: any[];
  readonly style?: string;
  readonly decoration?: string;

  constructor(builder: TextBuilder) {
    super();
    this.type = 'text';
    this.text = builder.getText() ?? '';
    this.contents = builder.getContents();
    this.flex = builder.getFlex();
    this.margin = builder.getMargin();
    this.position = builder.getPosition();
    this.offsetTop = builder.getOffsetTop();
    this.offsetBottom = builder.getOffsetBottom();
    this.offsetStart = builder.getOffsetStart();
    this.offsetEnd = builder.getOffsetEnd();
    this.size = builder.getSize();
    this.align = builder.getAlign();
    this.gravity = builder.getGravity();
    this.wrap = builder.getWrap();
    this.maxLines = builder.getMaxLines();
    this.weight = builder.getWeight();
    this.color = builder.getColor();
    this.action = builder.getAction();
    this.style = builder.getStyle();
    this.decoration = builder.getDecoration();
  }
}
