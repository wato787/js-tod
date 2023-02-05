const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";
  createIncompleteList(inputText);

};


document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());

//   未完了リストから指定の要素を削除
const deleteFromInsompleteList = (target)=>{
    document.getElementById('incomplete_list').removeChild(target);

}

// 未完了リストに追加する関数
const createIncompleteList = (text)=>{
      // div
  const div = document.createElement("div");
  div.className = "list_row";
  // li
  const li = document.createElement("li");
  li.innerText = text;
  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener('click',()=>{
    deleteFromInsompleteList(deleteButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement('li');
    li.innerText = text;
    const backButton = document.createElement('button');
    backButton.innerText = '戻す'
    backButton.addEventListener('click',()=>{
    //  押された戻すボタンの親タグを完了リストから削除
    const deleteTarget = backButton.parentNode;
    document.getElementById('complete_list').removeChild(deleteTarget);

    // テキスト取得
    const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
    })
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById('complete_list').appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click',()=>{
    // 押された削除のボタンのdivを未完了リストから削除
    deleteFromInsompleteList(deleteButton.parentNode);
  });

  // divの下にli
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //   未完了リストに追加
  document.getElementById("incomplete_list").appendChild(div);
}