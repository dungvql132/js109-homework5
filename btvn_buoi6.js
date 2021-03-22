// EX 1
// function js_style(){
//     let text = document.getElementById('text').style

//     text.fontFamily = '\'Times New Roman\', Times, serif'
//     text.fontSize = 'x-large'
//     text.color = 'red'
// }

// EX 2
// let firstName = document.getElementsByName('fname')
// let lastName = document.getElementsByName('lname')
// alert(firstName[0].defaultValue + " " + lastName[0].defaultValue)

// EX 3 ( sử dụng html ở bài 1)
// function js_style(){
//     let button = document.getElementById('jsstyle').style
//     let para = document.getElementById('text')
//     button.backgroundColor = 'red'
//     para.style.backgroundColor = 'blue'
// }

// EX 4
// function getAttributes(){
//     let imformation = document.getElementById('w3r')
//     console.dir(imformation)
//     alert("href: "+ imformation.href + "    hreflang: " + imformation.hreflang)
//     alert("rel: "+ imformation.rel + "    target: " + imformation.target + "    type: " + imformation.type)
// }

// EX 5
// let number = 3;
// function insert_Row(){
//     let table = document.getElementById('sampleTable')
//     console.dir(table)
//     table.innerHTML = table.innerHTML + "<tr><td>Row"+number+" cell1</td><td>Row"+number+" cell2</td></tr>"
//     number++;
// }

// EX 6
// function removecolor() {
//     let selected = document.getElementById('colorSelect')
//     let color = selected.value

//     for (let i = 0; i < selected.length; i++) {
//         if (color == selected[i].innerHTML) {
//             selected[i].remove()
//             break;
//         }
//     }
// }

// EX 6.1 ( thêm màu trong text vào cuối danh sách )
// function removecolor() {
//     let selected = document.getElementById('colorSelect')
//     let addColor = document.getElementById('textField')

//     for (let i = 0; i < selected.length; i++) {
//         if (addColor.value == selected[i].innerHTML) {
//             return;
//         }
//     }

//     selected.innerHTML += '<option>'+ addColor.value +'</option>'
// }

// EX 7
// function randomImg() {
//     let imgList = ['http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"',
//         'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"',
//         'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"']

//     let img = document.getElementById('img0')
//     let randomNumber = Math.floor(Math.random()*imgList.length)
//     img.src = imgList[randomNumber]
// }

// EX 8
alert('weight: '+window.innerWidth + "  height: "+window.innerHeight)
