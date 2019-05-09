const SEGMENT_WIDTH = 20;
const SEGMENT_HEIGHT = 20;
type SegmentType = 'HEAD' | 'BODY'
type Direction = 'LEFT' | 'UP' | 'RIGHT' | 'DOWN';

export class Point {
    xCo: number;
    yCo: number;

    constructor(xCo: number, yCo: number) {
        this.xCo = xCo;
        this.yCo = yCo;
    }
}

export class Segment {
    type: SegmentType;
    left: number;
    top: number;
    height: number;
    width: number;
    color?: string;

    constructor(type: SegmentType, left?: number, top?: number) {
        this.left = left || 0;
        this.top = top || 0;
        this.width = SEGMENT_WIDTH;
        this.height = SEGMENT_HEIGHT;
        this.color = type === 'HEAD' ? '#ff5722' : '#9c27b0';
    }
}

export class Dragon {
    initialBodySegmentCount: number;
    head: Segment;
    body: Array<Segment>;
    isWalking: boolean;
    currentDirection: Direction;
    turningPoint: Point;
    interval: NodeJS.Timer;

    constructor() {
        this.initialBodySegmentCount = 3;
        this.isWalking = false;
        this.body = this.getBodySegments();
        this.head = new Segment('HEAD', this.body[this.body.length - 1].left + SEGMENT_WIDTH, 0);
    }

    getBodySegments(): Array<Segment> {
        let body = [], left = 0, top = 0;
        if (this.initialBodySegmentCount) {
            for (let i = 0; i < this.initialBodySegmentCount; i++) {
                body.push(new Segment('BODY', left, top));
                left += SEGMENT_WIDTH;
            }
        }
        return body;
    }

    start(): void {
        this.isWalking = true;
        this.currentDirection = 'RIGHT';
        this.walk();
    }

    turn(direction: Direction): void {
        this.turningPoint = new Point(this.head.left, this.head.top);
        this.currentDirection = direction;
        this.walk();
    }

    walk(): void {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(this.move.bind(this), 1000);
    }

    move(): void {
        switch (this.currentDirection) {
            case 'LEFT':
                this.head.left -= SEGMENT_HEIGHT;
                break;
            case 'UP':
                this.head.top -= SEGMENT_HEIGHT;
                break;
            case 'RIGHT':
                this.head.left += SEGMENT_HEIGHT;
                break;
            case 'DOWN':
                this.head.top += SEGMENT_HEIGHT;
                // this.body.forEach((segment: Segment, index: number) => {
                //     segment.top += SEGMENT_HEIGHT;
                // });
                break;
        }
    }
}
