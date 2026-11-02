const name =document.getElementById('name')
const cellphone =document.getElementById('cellphone')
const hmwh = document.getElementById('hmwh')
const form =document.getElementById('form')

const nameError = document.getElementById('nameError')
const cellphoneError = document.getElementById('cellphoneError')
const hmwhError = document.getElementById('hmwhError')
const popup = document.getElementById('popup')
const popupText = document.getElementById('popupText')
const closePopup = document.getElementById('closePopup')


form.addEventListener('submit', (e) => {
    // To stop reload
    e.preventDefault()
    let hasError = false
    //clear old errors
    nameError.innerText=''
    cellphoneError.innerText=''
    hmwhError.innerText=''


    if(name.value === '' || name.value == null){
        nameError.innerText = 'Name is required'
        hasError = true
    }
    if(cellphone.value.length !== 10){
        cellphoneError.innerText = 'Invaild Cellphone Number'
        hasError = true
    }
    if(cellphone.value === '1234567890'){
      cellphoneError.innerText = 'Number Should Begin with 0'
        hasError = true  
    }
    if(hmwh.value ===  'select'){
        hmwhError.innerText = 'Please Select Option'
        hasError = true
    }
    //The popup if there is no error
    if(!hasError){
        popupText.innerText =`Thank you for reaching out ${name.value}, WE WILL CONTACT YOU IN THE NEXT 3 HOURS!`
        popup.style.display = 'flex'
        form. reset()
    }
});
    //to close popup
    closePopup.addEventListener('click', () => {
        popup.style.display='none'
    })
    popup.addEventListener('click', (e) => {
        if(e.target === popup){
            popup.style.display ='none'
        }
    })