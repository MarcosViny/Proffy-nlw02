document.querySelector('#add-time')
    .addEventListener('click', verifica)

function verifica() {
    const scheduleItem = document.querySelector('.schedule-item')

    const items = scheduleItem.querySelectorAll('input')

    items.forEach((item) => {
        if (item.value != '') {
            cloneField()
        }
    })
}

    function cloneField () {
        
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

        const fields = newFieldContainer.querySelectorAll('input')
        fields.forEach((field) => {
            field.value = ''
        })

        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }

    