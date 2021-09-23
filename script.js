
document.querySelector('#knopka').addEventListener('click', () => {
    let name = document.querySelector('input').value;
    if(!name){
        name = 'Безымянный'
    }
    document.querySelector('.name').textContent = name;
    
    document.querySelector('.blockKnopka').classList.add('del')
    document.querySelector('.privet').classList.remove('del')
    document.querySelector('.name').classList.remove('del')
    document.querySelector('.privet').classList.add('mesto')
    document.querySelector('.name').classList.add('mesto')
})