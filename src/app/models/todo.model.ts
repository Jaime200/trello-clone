export interface Todo {
    id: number,
    title: string
}

export interface Column {
    title: string,
    todos: Todo[]
}