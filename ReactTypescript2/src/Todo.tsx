import type { TodoType } from "./types/todo"

export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
    // Omit<TodoType, "id">
    const { title, userId, completed } = props
    const completeMark = completed ? "[完]" : "[未]"
    return <p>{ `${completeMark} ${title}(ユーザー：${userId})` }</p>
}

// Pick 型から必要な要素のみ指定する
// Omit いらないものを指定