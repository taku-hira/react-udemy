
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteTodo(inputText);

}

const createIncompleteTodo = (todo) => {
    // li生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    
    // button(完了)生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove(); // 完了ボタンの次の兄弟タグ(削除ボタン)を削除
        completeButton.remove(); // 完了ボタンを削除

        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const todoText = backButton.previousElementSibling.innerText; // 戻すボタンの前の兄弟タグ(p)のテキストを取得
            createIncompleteTodo(todoText);
            backButton.closest("li").remove(); // 戻すボタンの親タグ(li)を完了リストから削除
        });
        moveTarget.firstElementChild.appendChild(backButton);

        document.getElementById("complete-list").appendChild(moveTarget);
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
    
    document.getElementById("incomplete-list").appendChild(li);
    
    div.appendChild(p);
    li.appendChild(div);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);