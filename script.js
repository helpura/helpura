
document.querySelectorAll('.cancopy').forEach(item => {
    item.addEventListener('click', event => {
        copy(item);

        item.classList.add('copied');

        let oldText = item.textContent;
        item.textContent = 'Скопировано!';

        setTimeout(function() {
            item.classList.remove('copied');
            item.textContent = oldText;
        }, 3000);
    });
})

function copy(that) {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}