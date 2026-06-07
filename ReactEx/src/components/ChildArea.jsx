import { memo } from "react";

const style = {
    width: '100%',
    height: '200px',
    backgroundColor: 'khaki'
}

// memo : 親のコンポーネントが再レンダリングされてもこのコンポーネントに変更がなければ再レンダリングしないようにする
export const ChildArea = memo((props) => {
    const { open, onClickClose }  = props;
    console.log('ChildAreaがレンダリングされました');
    const data = [ ...Array(2000).keys() ]
    data.forEach(() => {
        console.log('...')
    })
    return (
        <>
        {open ? (
            <div style={style}>
                <p>子コンポーネント</p>
                <button onClick={onClickClose}>閉じる</button>
            </div>
        ) : null}
        </>
    )
})

// 再レンダリングされる条件
// stateが更新されたコンポーネント
// propsが変更されたコンポーネント
// 再レンダリングされたコンポーネントは以下の子コンポーネント