const store = [
   {
    name: "B",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/B.jpg"
  },

  {
    name: "BP",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/P.jpg"
  },

   {
    name: "BV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/V.jpg"
  },

   {
    name: "BVP",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/VP.jpg"
  },

   {
    name: "BM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/M.jpg"
  },

   {
    name: "BPV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/VP.jpg"
  },

   {
    name: "BPM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615255/pizza/MP.png"
  },

   {
    name: "BVM",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/MV.jpg"
  },

   {
    name: "BMP",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615255/pizza/MP.png"
  },

   {
    name: "BMV",
    price: 5.00,
    img: "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/MV.jpg"
  }

  // {
  //   name: "Everything",
  //   price: 6.00,
  //   img: "https://res.cloudinary.com/a-name-not-alreadytaken/image/upload/v1583615254/pizza/MVP.jpg"
  // }

];

// store[0].name -> access array indexed object, member ...


// below: step before templating for array objects
let title = document.querySelector('.card h1');
title.innerHTML = "Placeholder";
let price = document.querySelector('.card p');
price.innerHTML = "$5.00";
let image = document.querySelector('.card img');
// image.src ="https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583598682/b_sznzng.jpg";
image.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/B.jpg";
//above: step before templating for array objects

let pform = document.querySelector("form");
let veg = document.querySelector("#v");
let pro = document.querySelector("#p");
let mus = document.querySelector("#m");

// if I change 'submit' to 'change'? YES
pform.addEventListener("change", (e)=> {
      e.preventDefault();
  if(veg.checked == false && pro.checked == false && mus.checked == false) {
    title.innerHTML = "Basic";
    image.src = store[0].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == true && pro.checked == false && mus.checked == false) {
    title.innerHTML = "Basic + Veggies";
    image.src = store[2].img;
    price.innerHTML = "$5.00";
  } else if  (veg.checked == false && pro.checked == true && mus.checked == false){
    title.innerHTML = "Basic + Protein";
    image.src = store[1].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == false && pro.checked == false && mus.checked == true) {
    title.innerHTML = "Basic + Mushrooms";
    image.src = store[4].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == true && pro.checked == true && mus.checked == false) {
    title.innerHTML = "Basic + Veggies + Protein";
    image.src = store[3].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == true && pro.checked == false && mus.checked == true) {
    title.innerHTML = "Basic + Veggies + Mushrooms";
    image.src = store[7].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == true && pro.checked == true && mus.checked == false) {
    title.innerHTML = "Basic + Protein + Veggies";
    image.src = store[5].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == false && pro.checked == true && mus.checked == true) {
    title.innerHTML = "Basic + Protein + Mushrooms";
    image.src = store[6].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == true && pro.checked == false && mus.checked == true) {
    title.innerHTML = "Basic + Mushrooms + Veggies";
    image.src = store[10].img;
    price.innerHTML = "$5.00";
  } else if (veg.checked == false && pro.checked == true && mus.checked == true) {
    title.innerHTML = "Basic + Mushrooms + Protein";
    image.src = store[9].img;
    price.innerHTML = "$5.00";
  } else {
    title.innerHTML = "Everything";
    image.src = "https://res.cloudinary.com/a-name-not-already-taken/image/upload/v1583615254/pizza/MVP.jpg";
    price.innerHTML = "$6.00";
  }
});

// Want to limit the amount of boxes checked...
// let limit = document.querySelector('input[type="checkbox"]');
// limit.addEventListener('change', ()=>{
//   if ( limit.nodelist.length > 2 ) {
//     this.checked = false;
//   }
// });




// let dog1 = document.querySelector('input[value="GM"]');
// let dog2 = document.querySelector('input[value="Y"]');
// let dog3 = document.querySelector('input[value="D"]');
// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');

// dog1.addEventListener("click", (e) => {
// if(dog1.checked == true) {
//   console.log("$5.00");
//   img1.style.visibility = 'visible';
// } else {
//   console.log("unclicked");
//   img1.style.visibility = 'hidden';
// }
// });

// dog2.addEventListener("click", (e) => {
// if(dog2.checked == true) {
//   console.log("$5.00");
//   img2.style.visibility = 'visible';
// } else {
//   console.log("unclicked");
//   img2.style.visibility = 'hidden';
// }
// });

// dog3.addEventListener("click", (e) => {
// if(dog3.checked == true) {
//   console.log("$5.00");
//   img3.style.visibility = 'visible';
// } else {
//   console.log("unclicked");
//   img3.style.visibility = 'hidden';
// }
// });
