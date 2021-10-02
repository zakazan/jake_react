'utf-8';

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';

    //liタグ生成
    const li = document.createElement('li');
    //divタグ生成
    const div = document.createElement('div');
    div.classList.add('list-row');
    //pタグ生成
    const p = document.createElement('p');
    p.innerText = inputText;
    //buttonタグ生成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        //未完了のTODOから削除する
        const completeTarget = deleteButton.closest('ul > li');
        deleteFromIncompleteList(completeTarget);
        //ボタンの削除
        completeButton.remove();
        deleteButton.remove();
        //戻すボタンの実装
        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        div.appendChild(backButton);
        backButton.addEventListener('click', () => {
            //押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.closest('ul > li');
            document.getElementById('complete-list').removeChild(deleteTarget);
            //ボタンの削除
            backButton.remove();
            //戻すボタンの実装
            const completeButton = document.createElement('button');
            completeButton.innerText = '完了';
            div.appendChild(completeButton);
            completeButton.addEventListener('click', () => {
                deleteFromIncompleteList(completeTarget);
            });
            const deleteButton = document.createElement('button');
            deleteButton.innerText = '削除';
            deleteButton.addEventListener('click', () => {
                //親要素のliタグごと削除する
                const deleteTarget = deleteButton.closest('ul > li');
                deleteFromIncompleteList(deleteTarget);
            });
            div.appendChild(deleteButton);
            //未完了リストに追加
            document.getElementById('incomplete-list').appendChild(deleteTarget);
        });
        //完了リストに追加
        document.getElementById('complete-list').appendChild(completeTarget);
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        //親要素のliタグごと削除する
        const deleteTarget = deleteButton.closest('ul > li');
        deleteFromIncompleteList(deleteTarget);
    });
    
    const deleteFromIncompleteList = (target) => {
        document.getElementById('incomplete-list').removeChild(target);
    };

    //liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    //未完了のリストに追加
    document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => {
    onClickAdd();
});
