export type Tag = {
    id: number,
    title: string,
    description?: string,
}

export type MindMapEdge = {
    source: number,
    target: number,
}