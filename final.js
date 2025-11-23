const peoples = ['kim','josh','makenzie','brayden','colton','madison'];
for (people of peoples ){
    console.log(`We are family ${peoples}`);
    }
    const text =document.querySelector(".title");
const changecolor = document.querySelector(".click");
text.style.backgroundColor = "magenta";
text.classList.add("redo");
changecolor.addEventListener('click', function(){
text.classList.toggle("redo");
});
const userlist = document.querySelectorAll('.flower-list li');
console.log(userlist);
for(user of userlist){
    user.addEventListener('click', function(){
        console.log(this);
        this.style.color = "red";
    });
    const click = document.querySelector('clickme')
}
