const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = geChapterList() || [];

chaptersArray.forEach(chapter=> {
    displayList(chapter);
})


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
       displayList(input.value);
       chaptersArray.push(input.value);
       setChapterList();
       input.value = '';
       input.focus();
    }
});


function displayList(item){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;

        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function geChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); // slice without last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}



//old
// button.addEventListener('click', function () {
//     if (input.value.trim() !== '') {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         li.append(deleteButton);
//         list.append(li);

//         deleteButton.addEventListener('click', function(){
//             list.removeChild(li);
//             input.value = '';
//             input.focus();
//         });
        
//     } else {
//         input.placeholder = 'Please Enter Book and Chapter ex: Alma 5';
//         input.focus();
//     }
// });
;