//modal
let count = 0;
count = 10;
console.log(count);

const modalFull = {
    show(obj) {
        let modal = document.getElementsByClassName('modal');

        if(modal.children('id') == obj){
            modal.classList.add('show');
        }
    }
}