function fetchData1() {
  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'json/file1.json', true);
  xhr1.onload = function() {
    if (this.status === 200) {
      const product1 = JSON.parse(this.responseText);
      const productDetails1 = `
        <h2>${product1.name}</h2>
        <p>${product1.description}</p>
        <p>${product1.price}</p>
      `;
      const productElement1 = document.querySelector('.product1');
      productElement1.innerHTML = productDetails1;
    }
  };
  xhr1.send();
}
function fetchData2() {
  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'json/file2.json', true);
  xhr2.onload = function() {
    if (this.status === 200) {
      const product2 = JSON.parse(this.responseText);
      const productDetails2 = `
        <h2>${product2.name}</h2>
        <p>${product2.description}</p>
        <p>${product2.price}</p>
      `;
      const productElement2 = document.querySelector('.product2');
      productElement2.innerHTML = productDetails2;
    }
  };
  xhr2.send();
}
function fetchData3() {
  const xhr3 = new XMLHttpRequest();
  xhr3.open('GET', 'json/file3.json', true);
  xhr3.onload = function() {
    if (this.status === 200) {
      const product3 = JSON.parse(this.responseText);
      const productDetails3 = `
        <h2>${product3.name}</h2>
        <p>${product3.description}</p>
        <p>${product3.price}</p>
      `;
      const productElement3 = document.querySelector('.product3');
      productElement3.innerHTML = productDetails3;
    }
  };
  xhr3.send();
}

function fetchData4() {
  const xhr4 = new XMLHttpRequest();
  xhr4.open('GET', 'json/file4.json', true);
  xhr4.onload = function() {
    if (this.status === 200) {
      const product4 = JSON.parse(this.responseText);
      const productDetails4 = `
        <h2>${product4.name}</h2>
        <p>${product4.description}</p>
        <p>${product4.price}</p>
      `;
      const productElement4 = document.querySelector('.product4');
      productElement4.innerHTML = productDetails4;
    }
  };
  xhr4.send();
}
function fetchData5() {
  const xhr5 = new XMLHttpRequest();
  xhr5.open('GET', 'json/file5.json', true);
  xhr5.onload = function() {
    if (this.status === 200) {
      const product5 = JSON.parse(this.responseText);
      const productDetails5 = `
        <h2>${product5.name}</h2>
        <p>${product5.description}</p>
        <p>${product5.price}</p>
      `;
      const productElement5 = document.querySelector('.product5');
      productElement5.innerHTML = productDetails5;
    }
  };
  xhr5.send();
}
function fetchData6() {
  const xhr6 = new XMLHttpRequest();
  xhr6.open('GET', 'json/file6.json', true);
  xhr6.onload = function() {
    if (this.status === 200) {
      const product6 = JSON.parse(this.responseText);
      const productDetails6 = `
        <h2>${product6.name}</h2>
        <p>${product6.description}</p>
        <p>${product6.price}</p>
      `;
      const productElement6 = document.querySelector('.product6');
      productElement6.innerHTML = productDetails6;
    }
  };
  xhr6.send();
}
function fetchData7() {
  const xhr7 = new XMLHttpRequest();
  xhr7.open('GET', 'json/file7.json', true);
  xhr7.onload = function() {
    if (this.status === 200) {
      const product7 = JSON.parse(this.responseText);
      const productDetails7 = `
        <h2>${product7.name}</h2>
        <p>${product7.description}</p>
        <p>${product7.price}</p>
      `;
      const productElement7 = document.querySelector('.product7');
      productElement7.innerHTML = productDetails7;
    }
  };
  xhr7.send();
}
function fetchData8() {
  const xhr8 = new XMLHttpRequest();
  xhr8.open('GET', 'json/file8.json', true);
  xhr8.onload = function() {
    if (this.status === 200) {
      const product8 = JSON.parse(this.responseText);
      const productDetails8 = `
        <h2>${product8.name}</h2>
        <p>${product8.description}</p>
        <p>${product8.price}</p>
      `;
      const productElement8 = document.querySelector('.product8');
      productElement8.innerHTML = productDetails8;
    }
  };
  xhr8.send();
}
function fetchData9() {
  const xhr9 = new XMLHttpRequest();
  xhr9.open('GET', 'json/file9.json', true);
  xhr9.onload = function() {
    if (this.status === 200) {
      const product9 = JSON.parse(this.responseText);
      const productDetails9 = `
        <h2>${product9.name}</h2>
        <p>${product9.description}</p>
        <p>${product9.price}</p>
      `;
      const productElement9 = document.querySelector('.product9');
      productElement9.innerHTML = productDetails9;
    }
  };
  xhr9.send();
}
function fetchData10() {
  const xhr10 = new XMLHttpRequest();
  xhr10.open('GET', 'json/file10.json', true);
  xhr10.onload = function() {
    if (this.status === 200) {
      const product10 = JSON.parse(this.responseText);
      const productDetails10 = `
        <h2>${product10.name}</h2>
        <p>${product10.description}</p>
        <p>${product10.price}</p>
      `;
      const productElement10 = document.querySelector('.product10');
      productElement10.innerHTML = productDetails10;
    }
  };
  xhr10.send();
}
function fetchData11() {
  const xhr11 = new XMLHttpRequest();
  xhr11.open('GET', 'json/file11.json', true);
  xhr11.onload = function() {
    if (this.status === 200) {
      const product11 = JSON.parse(this.responseText);
      const productDetails11 = `
        <h2>${product11.name}</h2>
        <p>${product11.description}</p>
        <p>${product11.price}</p>
      `;
      const productElement11 = document.querySelector('.product11');
      productElement11.innerHTML = productDetails11;
    }
  };
  xhr11.send();
}
function fetchData12() {
  const xhr12 = new XMLHttpRequest();
  xhr12.open('GET', 'json/file12.json', true);
  xhr12.onload = function() {
    if (this.status === 200) {
      const product12 = JSON.parse(this.responseText);
      const productDetails12 = `
        <h2>${product12.name}</h2>
        <p>${product12.description}</p>
        <p>${product12.price}</p>
      `;
      const productElement12 = document.querySelector('.product12');
      productElement12.innerHTML = productDetails12;
    }
  };
  xhr12.send();
}
function fetchData13() {
  const xhr13 = new XMLHttpRequest();
  xhr13.open('GET', 'json/file13.json', true);
  xhr13.onload = function() {
    if (this.status === 200) {
      const product13 = JSON.parse(this.responseText);
      const productDetails13 = `
        <h2>${product13.name}</h2>
        <p>${product13.description}</p>
        <p>${product13.price}</p>
      `;
      const productElement13 = document.querySelector('.product13');
      productElement13.innerHTML = productDetails13;
    }
  };
  xhr13.send();
}
function fetchData14() {
  const xhr14 = new XMLHttpRequest();
  xhr14.open('GET', 'json/file14.json', true);
  xhr14.onload = function() {
    if (this.status === 200) {
      const product14 = JSON.parse(this.responseText);
      const productDetails14 = `
        <h2>${product14.name}</h2>
        <p>${product14.description}</p>
        <p>${product14.price}</p>
      `;
      const productElement14 = document.querySelector('.product14');
      productElement14.innerHTML = productDetails14;
    }
  };
  xhr14.send();
}
function fetchData15() {
  const xhr15 = new XMLHttpRequest();
  xhr15.open('GET', 'json/file15.json', true);
  xhr15.onload = function() {
    if (this.status === 200) {
      const product15 = JSON.parse(this.responseText);
      const productDetails15 = `
        <h2>${product15.name}</h2>
        <p>${product15.description}</p>
        <p>${product15.price}</p>
      `;
      const productElement15 = document.querySelector('.product15');
      productElement15.innerHTML = productDetails15;
    }
  };
  xhr15.send();
}