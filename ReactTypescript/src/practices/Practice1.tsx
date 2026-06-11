// 引数の型指定
export const Practice1 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1 
        console.log(total)
    }
    const onclickPractice = () => calcTotalFee(1000)
    return (
        <div>
            <p>練習問題：引数の型指定</p>
            <button onClick={onclickPractice}>練習問題１を実行</button>
        </div>
    )
}