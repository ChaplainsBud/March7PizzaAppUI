const store = [
   {
    name: "B",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598682/b_sznzng.jpg"
  },

  {
    name: "BP",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598685/bp_tynpxw.jpg"
  },

   {
    name: "BV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598689/bv_hbl7th.jpg"
  },

   {
    name: "BPV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598694/bvp_ajjkn1.jpg"
  },

   {
    name: "BM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598697/bm_f4ycdp.jpg"
  },

   {
    name: "BPV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-notalreadytaken/image/upload/v1583598701/bpv_nmbsyg.jpg"
  },

   {
    name: "BPM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598703/bpm_ue3ug6.jpg"
  },

   {
    name: "BVM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598706/bvm_zclrvu.jpg"
  },

   {
    name: "BMP",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598709/bmp_dcyivq.jpg"
  },

   {
    name: "BMV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598712/bmv_bnmvr1.jpg"
  }

];

// store[0].name -> access array indexed object, member ...


// below: step before templating for array objects
let title = document.querySelector('.card h1');
title.innerHTML = "Placeholder";
let price = document.querySelector('.card p');
price.innerHTML = "$5.00";
let image = document.querySelector('.card img');
image.src ="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598682/b_sznzng.jpg";
//above: step before templating for array objects

let pform = document.querySelector("form");
let veg = document.querySelector("#v");
let pro = document.querySelector("#p");
let mus = document.querySelector("#m");

pform.addEventListener("submit", (e)=> {
      e.preventDefault();

  // if v, store[0].name, store[0].price, store[0].img; if bv, bv... through entire array of objects
  // i'll start with b+v, go back to b... then go forward with all 10.
  if(veg.checked == true) {
    title.innerHTML = "Veg";  //store[0].name
  } else if (mus.checked == true) {
    title.innerHTML = "Mush";
  } else if (pro.checked == true) {
    title.innerHTML = "Protein";
  } else {
    console.log("unchecked")
   }
  // if()
  // if()
  // if()
  // if()
  // if()
  // if()
  // if()
});







let dog1 = document.querySelector('input[value="GM"]');
let dog2 = document.querySelector('input[value="Y"]');
let dog3 = document.querySelector('input[value="D"]');
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

dog1.addEventListener("click", (e) => {
if(dog1.checked == true) {
  console.log("$5.00");
  img1.style.visibility = 'visible';
} else {
  console.log("unclicked");
  img1.style.visibility = 'hidden';
}
});

dog2.addEventListener("click", (e) => {
if(dog2.checked == true) {
  console.log("$5.00");
  img2.style.visibility = 'visible';
} else {
  console.log("unclicked");
  img2.style.visibility = 'hidden';
}
});

dog3.addEventListener("click", (e) => {
if(dog3.checked == true) {
  console.log("$5.00");
  img3.style.visibility = 'visible';
} else {
  console.log("unclicked");
  img3.style.visibility = 'hidden';
}
});
