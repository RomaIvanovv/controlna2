getEl = x => document.querySelector(x);
getElAll = x => document.querySelectorAll(x);

let container = getEl('.container')
let textarea = getEl('#textarea')
let menu = getEl('.menu')
let menu2 = getEl('.menu2')

let f1 = document.forms.f1;
let f2 = document.forms.f2;
let f3 = document.forms.f3;
let f4 = document.forms.f4;
let f5 = document.forms.f5;
let f6 = document.forms.f6;
let f7 = document.forms.f7;
let f8 = document.forms.f8;
let f9 = document.forms.f9;
let f10 = document.forms.f10;


let blockFontFamaly = getEl('.blockFontFamaly')
let fontFamaly = getEl('.fontFamaly')
let arial = getEl('.arial')
let georgia = getEl('.georgia')
let impact = getEl('.impact')
let tahoma = getEl('.tahoma')
let roman = getEl('.roman')
let veranda = getEl('.veranda')

let blockFontSize = getEl('.blockFontSize')
let fontSize = getEl('.fontSize')
let px12 = getEl('.px12')
let px14 = getEl('.px14')
let px16 = getEl('.px16')
let px18 = getEl('.px18')
let px20 = getEl('.px20')
let px22 = getEl('.px22')
let px25 = getEl('.px25')
let px30 = getEl('.px30')

let blockColorText = getEl('.blockColorText')
let x = getEl('.x')
let shadowBlockColorText = getEl('.shadowBlockColorText')
let colorText = getEl('.colorText')

let shadowBlockColorBack = getEl('.shadowBlockColorBack')
let colors = getEl('.colors')
let x2 = getEl('.x2')
let images = getEl('.images')
let files = getEl('.files')
let boxColorBack = getEl('.boxColorBack')
let boxImages = getEl('.boxImages')
let boxImagesFiles = getEl('.boxImagesFiles')
let colorB = getElAll('.colorB')
let img = getElAll('.img')

let btnLogin = getEl('.btnLogin')
let shadowSingIn = getEl('.shadowSingIn')
let shadowlogOut = getEl('.shadowlogOut')
let cancel = getEl('.cancel')
let signOut = getEl('.signOut')
let empty = getEl('.empty')

let shadowCreateTable = getEl('.shadowCreateTable')
let x3 = getEl('.x3')
let emptyTable = getEl('.emptyTable')
let styleColorbr = getEl('.styleColorbr')

let shadowCreateOl = getEl('.shadowCreateOl')
let x4 = getEl('.x4')
let emptyOl = getEl('.emptyOl')

let shadowCreateUl = getEl('.shadowCreateUl')
let x5 = getEl('.x5')
let emptyUl = getEl('.emptyUl')

// BOLD
f2.ch1.addEventListener('click', function() {
    if(this.checked) {
        container.style.fontWeight = 'bold'
    }else {
        container.style.fontWeight = 'normal'
    }
})
// CURSIVE
f2.ch2.addEventListener('click', function() {
    if(this.checked) {
        container.style.fontStyle = 'italic'
    }else {
        container.style.fontStyle = 'normal'
    }
})
// UNDERLINE
f2.ch3.addEventListener('click', function() {
    if(this.checked) {
        container.style.textDecoration = 'underline'
    }else {
        container.style.textDecoration = 'none'
    }
})
// LINE-THROUGH
f2.ch4.addEventListener('click', function() {
    if(this.checked) {
        container.style.textDecoration = 'line-through'
    }else {
        container.style.textDecoration = 'none'
    }
})
// TEXT ALIGN 
for (let i = 0; i < f3.length; i++) {
    f3.elements[i].addEventListener('click', function(){
        if (i == 0) {
            container.style.textAlign = 'left';
        }else if (i == 1) {
            container.style.textAlign = 'center';
        }else if (i == 2) {
            container.style.textAlign = 'right';
        }
    })
}
// FONT FAMALY 
f4.fontFamaly.onclick = function() {
    blockFontFamaly.style.display = 'block'
    blockFontSize.style.display = 'none'
}
arial.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Arial';
}
georgia.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Georgia';
}
impact.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Impact';
}
tahoma.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Tahoma';
}
roman.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Times';
}
veranda.onclick = function() {
    blockFontFamaly.style.display = 'none'
    container.style.fontFamily = 'Verdana';
}
// FONT SIZE 
f4.fontSize.onclick = function() {
    blockFontSize.style.display = 'block'
    blockFontFamaly.style.display = 'none'
}
px12.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 12 + 'px';
}
px14.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 14 + 'px';
}
px16.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 16 + 'px';
}
px18.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 18 + 'px';
}
px20.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 20 + 'px';
}
px22.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 22 + 'px';
}
px25.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 25 + 'px';
}
px30.onclick = function() {
    blockFontSize.style.display = 'none'
    container.style.fontSize = 30 + 'px';
}
// COLOR TEXT 
f4.colorText.onclick = function() {
    shadowBlockColorText.style.display = 'block'
    blockFontSize.style.display = 'none'
    blockFontFamaly.style.display = 'none'
}
x.onclick = function () {
    shadowBlockColorText.style.display = 'none'
    blockColorText.style.marginTop = -400 + 'px';
}

let colorT = getElAll('.colorT')
for(let i = 0; i < colorT.length; i++ ) {
    colorT[i].onclick = function(){
        if (i == 0) {
            container.style.color = 'LightSeaGreen';
        }else if(i == 1) {
            container.style.color = 'Teal';
        }else if(i == 2) {
            container.style.color = 'LightGreen';
        }else if(i == 3) {
            container.style.color = 'MediumSeaGreen';
        }else if(i == 4) {
            container.style.color = 'DodgerBlue';
        }else if(i == 5) {
            container.style.color = 'RoyalBlue';
        }else if(i == 6) {
            container.style.color = 'MediumOrchid';
        }else if(i == 7) {
            container.style.color = 'DarkOrchid';
        }else if(i == 8) {
            container.style.color = 'DarkSlateGrey';
        }else if(i == 9) {
            container.style.color = 'darkslategrey';
        }else if(i == 10) {
            container.style.color = 'gold';
        }else if(i == 11) {
            container.style.color = 'orange';
        }else if(i == 12) {
            container.style.color = 'SandyBrown';
        }else if(i == 13) {
            container.style.color = 'Chocolate';
        }else if(i == 14) {
            container.style.color = 'Coral';
        }else if(i == 15) {
            container.style.color = 'Sienna';
        }else if(i == 16) {
            container.style.color = 'WhiteSmoke';
        }else if(i == 17) {
            container.style.color = 'LightGrey';
        }else if(i == 18) {
            container.style.color = 'Grey';
        }else if(i == 19) {
            container.style.color = 'DimGrey';
        }else if(i == 20) {
            container.style.color = 'black';
        }
    }
}
// BACKGROUND 
f4.backStyle.onclick = function() {
    shadowBlockColorBack.style.display = 'block'
    blockFontSize.style.display = 'none'
    blockFontFamaly.style.display = 'none'
}
x2.onclick = function () {
    shadowBlockColorBack.style.display = 'none'
}
colors.onclick = function() {
    boxColorBack.style.display = 'flex'
    boxImages.style.display = 'none'
    boxImagesFiles.style.display = 'none'
    colors.style.display = 'block'
    colors.style.borderStyle = 'solid'
    colors.style.borderColor = 'lightgray'
    colors.style.borderWidth = 1 + 'px'
    colors.style.color = 'DimGrey'
    images.style.border = 'none'
    images.style.color = 'DodgerBlue'
    files.style.border = 'none'
    files.style.color = 'DodgerBlue'
}
for(let i = 0; i < colorB.length; i++ ) {
    colorB[i].onclick = function(){
        if (i == 0) {
            container.style.background = 'LightSeaGreen';
        }else if(i == 1) {
            container.style.background = 'Teal';
        }else if(i == 2) {
            container.style.background = 'LightGreen';
        }else if(i == 3) {
            container.style.background = 'MediumSeaGreen';
        }else if(i == 4) {
            container.style.background = 'DodgerBlue';
        }else if(i == 5) {
            container.style.background = 'RoyalBlue';
        }else if(i == 6) {
            container.style.background = 'MediumOrchid';
        }else if(i == 7) {
            container.style.background = 'DarkOrchid';
        }else if(i == 8) {
            container.style.background = 'DarkSlateGrey';
        }else if(i == 9) {
            container.style.background = 'darkslategrey';
        }else if(i == 10) {
            container.style.background = 'gold';
        }else if(i == 11) {
            container.style.background = 'orange';
        }else if(i == 12) {
            container.style.background = 'SandyBrown';
        }else if(i == 13) {
            container.style.background = 'Chocolate';
        }else if(i == 14) {
            container.style.background = 'Coral';
        }else if(i == 15) {
            container.style.background = 'Sienna';
        }else if(i == 16) {
            container.style.background = 'WhiteSmoke';
        }else if(i == 17) {
            container.style.background = 'LightGrey';
        }else if(i == 18) {
            container.style.background = 'Grey';
        }else if(i == 19) {
            container.style.background = 'DimGrey';
        }else if(i == 20) {
            container.style.background = 'black';
        }
    }
}
// BACKROUND IMAGES 
images.onclick = function() {
    boxImages.style.display = 'flex'
    boxColorBack.style.display = 'none'
    boxImagesFiles.style.display = 'none'
    colors.style.border = 'none'
    colors.style.color = 'DodgerBlue'
    files.style.border = 'none'
    files.style.color = 'DodgerBlue'
    images.style.borderStyle = 'solid'
    images.style.borderColor = 'lightgray'
    images.style.borderWidth = 1 + 'px'
    images.style.color = 'DimGrey'
}
for(let i = 0; i < img.length; i++ ) {
    img[i].onclick = function(){
        if (i == 0) {
            container.style.background = 'url(img/img1.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 1) {
            container.style.background = 'url(img/img2.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 2) {
            container.style.background = 'url(img/img3.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 3) {
            container.style.background = 'url(img/img4.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 4) {
            container.style.background = 'url(img/img5.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 5) {
            container.style.background = 'url(img/img6.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 6) {
            container.style.background = 'url(img/img7.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 7) {
            container.style.background = 'url(img/img8.jpg)';
            container.style.backgroundSize = 'cover';
        }else if (i == 8) {
            container.style.background = 'url(img/img9.jpg)';
            container.style.backgroundSize = 'cover';
        }
    }
}
// BACKROUND FILES
files.onclick = function() {
    boxImagesFiles.style.display = 'block'
    boxColorBack.style.display = 'none'
    boxImages.style.display = 'none'
    colors.style.border = 'none'
    colors.style.color = 'DodgerBlue'
    images.style.border = 'none'
    images.style.color = 'DodgerBlue'
    files.style.borderStyle = 'solid'
    files.style.borderColor = 'lightgray'
    files.style.borderWidth = 1 + 'px'
    files.style.color = 'DimGrey'
}
f5.browse.onchange = function() {
    container.style.background = `url(${f5.browse.value})`;
    container.style.backgroundSize = 'cover';
    f5.reset();
}
// SING IN 
const userData = {
    login: 'admin',
    password: 'admin'
} 

signOut.onclick = ()=> {
    f1.buttonTextarea.disabled = true;
    shadowlogOut.classList.remove('active')
    shadowlogOut.style.display = 'none'
    btnLogin.style.background = 'url(img/zamokClose.png)'
    btnLogin.style.backgroundPosition = 'center'
    btnLogin.style.backgroundRepeat = 'no-repeat'
    btnLogin.style.backgroundColor = 'whitesmoke'
}

cancel.onclick = ()=> {
    shadowlogOut.classList.remove('active')
    shadowlogOut.style.display = 'none'
}

btnLogin.onclick = () => {
    if(f1.buttonTextarea.disabled == false) {
        shadowlogOut.classList.add('active');
        shadowlogOut.style.display = 'flex'
    }else{
        shadowSingIn.classList.add('active');
        shadowSingIn.style.display = 'flex'
    }
}

f6.onsubmit = function(e) {
    e.preventDefault();
    if( f6.login.value === userData.login && 
        f6.password.value === userData.password){
            shadowSingIn.classList.remove('active')
            f1.buttonTextarea.disabled = false;
            empty.style.display = 'none'
            shadowSingIn.style.display = 'none'
            btnLogin.style.background = 'url(img/openLock.png)'
            btnLogin.style.backgroundPosition = 'center'
            btnLogin.style.backgroundRepeat = 'no-repeat'
            btnLogin.style.backgroundColor = 'whitesmoke'
            f6.password.style.borderColor = 'rgba(128, 128, 128, 0.678)'
            f6.login.style.borderColor = 'rgba(128, 128, 128, 0.678)' 
            f6.reset();   
        }
        else if (f6.login.value === 'admin') {
            f6.login.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        }
        else if (f6.password.value === 'admin') {
            f6.password.style.borderColor = 'rgba(128, 128, 128, 0.678)'    
        }
            
        else{ 
            f6.login.style.borderColor = 'red'
            f6.password.style.borderColor = 'red'
            empty.style.display = 'block'
            f1.buttonTextarea.disabled = true;
        }

}

// TEXTAREA 
f1.buttonTextarea.onclick = function() {
    menu.style.display = 'none'
    container.style.display = 'none'
    menu2.style.display = 'flex'
    textarea.style.display = 'block'
    textarea.innerHTML = container.innerHTML;
}
f7.save.onclick = function() {
    menu.style.display = 'flex'
    container.style.display = 'block'
    menu2.style.display = 'none'
    textarea.style.display = 'none'
    container.innerHTML = textarea.value;
}

// TABLE 
f7.table.onclick = function() {
    shadowCreateTable.style.display = 'flex'
}
x3.onclick = function() {
    shadowCreateTable.style.display = 'none'
}

f8.btnTable.onclick = function() {
    if(f8.cTR.value !== '' && f8.wTD.value !== '' && f8.wBr.value !== ''
     && f8.cTD.value !== '' && f8.hTD.value !== ''){
        emptyTable.style.display = 'none'
        styleColorbr.style.marginBottom = 0 + 'px'
        f8.cTR.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        f8.wTD.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        f8.wBr.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        f8.cTD.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        f8.hTD.style.borderColor = 'rgba(128, 128, 128, 0.678)'
        f8.styleBr.borderColor = 'rgba(128, 128, 128, 0.678)'


        
            let divTable = document.createElement('div');
            let table = document.createElement('table');
            let totalTr = f8.cTR.value;
            let totalTd = f8.cTD.value;
        
            f8.styleBr.onchange = function() {
                for (let i = 0; i < f8.styleBr.length; i++) {
                }
            }
        
            f8.colorBr.onchange = function() {
                for (let i = 0; i < f8.colorBr.length; i++) {
                }
            }
        
            for (let i = 0; i < totalTr; i++) {
                let tr = document.createElement('tr');
                table.appendChild(tr)
                divTable.appendChild(table)
                for (let i = 0; i < totalTd; i++) {
                    let td = document.createElement('td');
                    tr.appendChild(td)
                    td.innerHTML = `TD`;
                    td.style.width = f8.wTD.value + 'px';
                    td.style.height = f8.hTD.value + 'px';
                    table.style.borderCollapse = 'collapse';
                    td.style.borderWidth = f8.wBr.value + 'px';
                    td.style.borderColor = f8.colorBr.value;
                    td.style.borderStyle = f8.styleBr.value;
                }
            }

            textarea.innerHTML += divTable.innerHTML;
            
    }else {
        f8.cTR.style.borderColor = 'red'
        f8.wTD.style.borderColor = 'red'
        f8.wBr.style.borderColor = 'red'
        f8.cTD.style.borderColor = 'red'
        f8.hTD.style.borderColor = 'red'
        f8.styleBr.style.borderColor = 'red'
        f8.colorBr.style.borderColor = 'red'
        emptyTable.style.display = 'block'
        styleColorbr.style.marginBottom = 27 + 'px'
    }
}
f8.btnReset.onclick = function() {
    f8.reset();
}

// OL 
f7.liNumber.onclick = function() {
    shadowCreateOl.style.display = 'flex'
}
x4.onclick = function() {
    shadowCreateOl.style.display = 'none'
}
f9.resetOl.onclick = function() {
    f9.reset();
}
f9.createListOl.onclick = function() {

    if(f9.liIteamOl.value !== '' && f9.typeMarkOl.value !== ''){
       emptyOl.style.display = 'none'
       f9.liIteamOl.style.borderColor = 'rgba(128, 128, 128, 0.678)'
       f9.typeMarkOl.style.borderColor = 'rgba(128, 128, 128, 0.678)'

       let amount = f9.liIteamOl.value;

       let ulOl = document.createElement('ul');
   
       for (let i = 0; i < amount; i++) {
   
           f9.typeMarkOl.onchange = function() {
               for (let i = 0; i < f9.typeMarkOl.length; i++) {
               }
           }
   
           let liOl = document.createElement('li');
           liOl.innerHTML = `item ${i+1}`;
           liOl.style.listStyle = f9.typeMarkOl.value;
           ulOl.appendChild(liOl)
       }
   
       textarea.innerHTML += ulOl.innerHTML;
   }else {
       f9.liIteamOl.style.borderColor = 'red'
       f9.typeMarkOl.style.borderColor = 'red'
       emptyOl.style.display = 'block'
   }
}

// UL 
f7.li.onclick = function() {
    shadowCreateUl.style.display = 'flex'
}
x5.onclick = function() {
    shadowCreateUl.style.display = 'none'
}
f10.resetUl.onclick = function() {
    f10.reset();
}
f10.createListUl.onclick = function() {

    if(f10.liIteamUl.value !== '' && f10.typeMarkUl.value !== ''){
       emptyUl.style.display = 'none'
       f10.liIteamUl.style.borderColor = 'rgba(128, 128, 128, 0.678)'
       f10.typeMarkUl.style.borderColor = 'rgba(128, 128, 128, 0.678)'

       let amount = f10.liIteamUl.value;

       let ulUl = document.createElement('ul');
   
       for (let i = 0; i < amount; i++) {
   
           f10.typeMarkUl.onchange = function() {
               for (let i = 0; i < f10.typeMarkUl.length; i++) {
               }
           }
   
           let liUl = document.createElement('li');
           liUl.innerHTML = `item ${i+1}`;
           liUl.style.listStyle = f10.typeMarkUl.value;
           ulUl.appendChild(liUl)
       }
   
       textarea.innerHTML += ulUl.innerHTML;
   }else {
       f10.liIteamUl.style.borderColor = 'red'
       f10.typeMarkUl.style.borderColor = 'red'
       emptyUl.style.display = 'block'
   }
}