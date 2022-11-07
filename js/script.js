// С помощью DOM "показываем" JS с какими классами будем взаимодействовать
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

//TODO Что такое Event, TimeLoop (SetTimeout), 

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter', dragenter)
   placeholder.addEventListener('dragleave', dragleave)
   placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
   event.target.classList.add('hold')
   setTimeout(() => event.target.classList.add('hide'), 0)
   // лучше использовать event.target, но можно и просто this
}

function dragend() {
   event.target.classList.remove('hold')
   event.target.classList.remove('hide')
}

function dragover(event) {
   event.preventDefault()
}

function dragenter(event) {
   event.target.classList.add('hovered')
}

function dragleave(event) {
   event.target.classList.remove('hovered')
}

function dragdrop(event) {
   event.target.classList.remove('hovered')
   event.target.append(item)
}