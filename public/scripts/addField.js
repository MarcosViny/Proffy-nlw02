document.querySelector('#add-time')
    .addEventListener('click', cloneField)


function cloneField() {
    const divBtn = document.createElement('div')
    const btnRemove = document.createElement('img')
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    divBtn.setAttribute('class', 'divBtn')
    btnRemove.setAttribute('class', 'btnRemove')
    btnRemove.setAttribute('src', '/images/icons/remove-icon.svg')


    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach((field) => {
        field.value = ''
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    divBtn.appendChild(btnRemove)
    newFieldContainer.appendChild(divBtn)


    btnRemove.onclick = () => {
        newFieldContainer.remove()
    }
}