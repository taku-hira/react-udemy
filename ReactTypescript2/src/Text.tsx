import type { FC } from "react";

type Props = {
    color: string,
    fontSize: string
}

// 関数コンポーネントの型指定　propsの方指定注意

export const Text: FC<Props> = (props) => {
    const { color, fontSize } = props;
    return <p style={{ color, fontSize }}>テキストです</p>
}

// FC childrenを受け取れる
// VFC childrenを使用しない場合