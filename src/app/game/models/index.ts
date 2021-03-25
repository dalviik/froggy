export enum Color {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green"
}

export interface Level {
  name: string;
  instructions: string;
  board: Color[],
  style: any,
  before: string;
  after: string;
}


const levels: Level[] =
  [{
    name: 'justify-content 3',
    instructions: '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
    board: [Color.GREEN, Color.YELLOW, Color.RED, Color.RED],
    style: { 'justify-content': 'space-around' },
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
  ];


export default levels;
