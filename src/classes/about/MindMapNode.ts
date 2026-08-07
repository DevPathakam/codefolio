export class MindMapNode {
    id: number;
    title: string;
    subTitle?: string;
    description?: string;
    xPos: number;
    yPos: number;
    isRoot?: boolean;

    constructor(obj: MindMapNode) {
        this.id = obj.id;
        this.title = obj.title;
        this.subTitle = obj.subTitle;
        this.description = obj.description;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.isRoot = obj.isRoot ?? false;
    }
}