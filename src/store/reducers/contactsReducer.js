let defaultState = {
    showModal: false,
    contacts: [],
    changeName: '',
    changeTele: ''
}
const contactsReducer = (state = defaultState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 'SHOW_MODAL':
            stateCopy.showModal = !stateCopy.showModal
            return stateCopy
        case 'CHANGE_NAME':
            stateCopy.changeName = action.text
            return stateCopy
        case 'CHANGE_TELE':
            stateCopy.changeTele = action.tel
            return stateCopy
        case 'ADD':
            console.log(state.changeName, state.changeTele)
            if (stateCopy.changeName === '' || stateCopy.changeTele === '') {
                alert('Поля не могут быть пустыми')
                return state
            } else {
                if (stateCopy.changeName.length > 20) {
                    alert('Длина имени не может быть больше 20 символов')
                    return state
                } else {
                    if (!/^\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(stateCopy.changeTele)) {
                        alert('Не правильный номер')
                        return state
                    } else {
                        let randomColor = () => {
                            let R = Math.floor(Math.random() * 255)
                            let G = Math.floor(Math.random() * 255)
                            let B = Math.floor(Math.random() * 255)
                            let A = (Math.random() * (1 - 0.3)).toFixed(1)
                            return `rgba(${R},${G},${B},${A})`
                        }
                        let contact = {
                            id: Math.floor(Math.random() * 1000),
                            name: stateCopy.changeName,
                            tel: stateCopy.changeTele,
                            avatar: {
                                background: randomColor(),
                                symbol: stateCopy.changeName[0].toUpperCase(),
                            },
                        }
                        stateCopy.contacts.unshift(contact)
                        stateCopy.showModal = !stateCopy.showModal
                        stateCopy.changeName = ''
                        stateCopy.changeTele = ''
                        return stateCopy
                    }
                }
            }
        case 'CLEAR':
            stateCopy.contacts = []
            return stateCopy
        case 'DELETE':
            let nowContacts = stateCopy.contacts.filter(contact => contact.id !== action.id)
            stateCopy.contacts = [...nowContacts]
            return stateCopy
        default:
            return state
    }
}
export default contactsReducer
