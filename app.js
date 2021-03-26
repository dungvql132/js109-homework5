function cafeCity(nameCafe, nameCity) {
    this.nameCafe = nameCafe,
        this.nameCity = nameCity
}

let arr = []

// khoi tao mang
function start() {
    if (localStorage.getItem('cafeArr') != null) {
        arr = localStorage.getItem('cafeArr')
        arr = JSON.parse(arr)
    } else {
        arr.push(new cafeCity('dung', 'ha noi'))
        arr.push(new cafeCity('cuong', 'ha dong'))
        arr.push(new cafeCity('hung', 'ca mau'))
        arr.push(new cafeCity('hoa', 'giang tay'))
        arr.push(new cafeCity('ga', 'bac ninh'))
    }
    arr.forEach(cafe => addMoreCafe(cafe))
}
start()

function addMoreCafe(cafe) {
    let myForm = document.getElementById('cafe-list')
    let li = document.createElement('li')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let cross = document.createElement('div')

    span1.textContent = cafe.nameCafe
    span2.textContent = cafe.nameCity
    cross.textContent = 'X'

    li.appendChild(span1)
    li.appendChild(span2)
    li.appendChild(cross)
    myForm.appendChild(li)

    cross.onclick = function () {
        myForm.removeChild(this.parentNode)
        arr = arr.filter(c => c !== cafe)
        localStorage.setItem('cafeArr', JSON.stringify(arr))
        console.log(arr)
    }
}

let inputForm = document.getElementById('add-cafe-form')
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = inputForm.name.value;
    let city = inputForm.city.value;
    arr.push(new cafeCity(name, city))
    localStorage.setItem('cafeArr', JSON.stringify(arr))

    addMoreCafe(new cafeCity(name, city))
})