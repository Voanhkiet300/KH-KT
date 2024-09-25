





// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO4mP8FcRbAb2bAQRduQ6HLp17BQ12u8s",
    authDomain: "nature-education.firebaseapp.com",
    projectId: "nature-education",
    storageBucket: "nature-education.appspot.com",
    messagingSenderId: "793438493710",
    appId: "1:793438493710:web:559524589d8ef68cb2f05f",
    measurementId: "G-9BF73M93E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const auth = getAuth();




















const home = document.querySelector("#home")
const home_btn = document.querySelector("#home_btn")
const content_div = document.querySelector("#trees_page_div")
const content = document.querySelectorAll(".content")
const trees_page = document.querySelector("#trees_page")
const woody_trees_btn = document.getElementById('woody_trees')
const herbaceous_plants_btn = document.getElementById('herbaceous_plants')
const fungi_btn = document.getElementById('fungi')
let woody_trees_list = []
let woody_trees = {}
let count = 0


count = 0
const woody_trees_querySnapshot = await getDocs(collection(db, "woody_trees"));
woody_trees_querySnapshot.forEach((doc) => {
    woody_trees_list.push({ ...doc.data(), id: doc.id });

    count++
    // console.log(`${doc.id} => ${doc.data()}`);
    // contentDiv.innerHTML = `
    // <div id="content">
    //     <img src="https://govi.vn/wp-content/uploads/2022/03/go-lim-xanh-la-gi-va-dac-diem-nhan-biet.jpg" alt="">
    //     <div class="content">
    //         <h2>Lim Xanh (Erythrophleum fordii)</h2>
    //         <p>Lim Xanh là loài cây gỗ lớn, cao khoảng 20-30m, đường kính thân có thể lên đến 1m hoặc hơn. Gỗ Lim
    //             Xanh rất cứng, nặng, bền, không mối mọt và có màu đỏ sẫm.</p>
    //     </div>
    // </div>`
});
console.log(woody_trees_list)










const form = document.querySelector("form");
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const input5 = document.getElementById("input5")
const input6 = document.getElementById("input6")
const input7 = document.getElementById("input7")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    if ([input1, input2, input3, input4, input5, input6, input7].every(input => input.value !== "")) {
        try {
          const docRef = await addDoc(collection(db, "woody_trees"), {
            'title': input1.value,
            'img': input2.value,
            'ten_khoa_hoc': input3.value,
            'ho': input4.value,
            'dac_diem': input5.value,
            'phan_bo': input6.value,
            'ung_dung': input7.value
          });
        } catch (error) {
          console.error(error);
        }
      }

    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
    input7.value = '';
})


// for (const content_div of contents_div) {
//     content_div.addEventListener("click", () => {
//         // console.log(content_div.id);
//         for (const woody_tree of woody_trees_list) {
//             if (content_div.id == woody_tree.title) {
//                 console.log(123);
                
//             }
//         }
//     })
// }
























// responsive
const header_h1 = document.querySelector("header>h1");
const p = document.querySelector("p");
const nav_button = document.querySelectorAll("nav button");
const nav = document.querySelector('nav')
const content_img = document.querySelectorAll(".content img");



function adjust_nav_header() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    header_h1.style.fontSize = "2.2em";
    p.style.fontSize = "1em";
    nav_button.forEach((button) => {
        button.style.padding = "8px 10px"
        button.style.margin = "5px 3px"
    });
    // content_div.forEach((div) => {
    //     div.style.fontSize = "0.9em";
    // });
  } else if (screenWidth >= 768 && screenWidth < 1024) {
    header_h1.style.fontSize = "2.5em";
    p.style.fontSize = "1.2em";
    nav_button.forEach((button) => {
        button.style.padding = "10px 15px"
        button.style.margin = "5px 5px"
    });
    // content_div.forEach((div) => {
    //     div.style.fontSize = "1em";
    // });
  } else {
    header_h1.style.fontSize = "3em";
    p.style.fontSize = "1.5em";
    nav_button.forEach((button) => {
        button.style.padding = "10px 20px"
        button.style.margin = "5px 10px"
    });
    // content_div.forEach((div) => {
    //     div.style.fontSize = "1.2em";
    // });
  }
}

function adjustcontent() {
    const screenWidth = window.innerWidth;
    
  if (screenWidth < 540) {
    content.forEach((div) => {
        div.style.fontSize = "0.75em";
    });
    content_img.forEach((img) => {
        img.style.width = "130px"
        img.style.height = "84.5pxpx"
    });
  } else if (screenWidth >= 540 && screenWidth < 685) {
    content.forEach((div) => {
        div.style.fontSize = "0.85em";
    });
    content_img.forEach((img) => {
        img.style.width = "160px"
        img.style.height = "104px"
    });
  } else {
    content.forEach((div) => {
        div.style.fontSize = "1.1em";
    });
    content_img.forEach((img) => {
        img.style.width = "200px"
        img.style.height = "130pxpx"
    });
  }
}

adjust_nav_header();
adjustcontent();
window.addEventListener("resize", () => {
    adjust_nav_header()
    adjustcontent()
});





showContent('home')
home_btn.addEventListener("click", () => showContent('home'))
trees_page.addEventListener("click", () => showContent('trees_page'))
woody_trees_btn.addEventListener("click", () => change_page_content('woody_trees'))
herbaceous_plants_btn.addEventListener("click", () => change_page_content('herbaceous_plants'))
fungi_btn.addEventListener("click", () => change_page_content('fungi'))







function showContent(page_status) {
    if (page_status === 'home') {
        home.style.display = 'block'
        nav.style.display = 'none'
        content_div.style.display = 'none'
    } else if (page_status === 'trees_page') {
        nav.style.display = 'flex'
        home.style.display = 'none'
        content_div.style.display = 'flex'
        change_page_content('woody_trees')
    }
}




function change_page_content(page_content) {
    if (page_content === 'woody_trees') {
        on_page(woody_trees_btn)
        out_page(herbaceous_plants_btn)
        out_page(fungi_btn)
        content_div.innerHTML = ``
        for (const woody_tree of woody_trees_list) {
            content_div.innerHTML += `
            <div class="content" id="${woody_tree.title}">
                <img src="${woody_tree.img}" alt="">
                <div>
                    <h2>${woody_tree.title}</h2>
                    <p>${woody_tree.dac_diem}</p>
                </div>
            </div>
            `;
        }
    } else if (page_content === 'herbaceous_plants') {
        out_page(woody_trees_btn)
        on_page(herbaceous_plants_btn)
        out_page(fungi_btn)
        content_div.innerHTML = ``
        for (const woody_tree of woody_trees_list) {
            content_div.innerHTML += `
            <div class="content" id="${woody_tree.title}">
                <img src="${woody_tree.img}" alt="">
                <div>
                    <h2>${woody_tree.title}</h2>
                    <p>${woody_tree.dac_diem}</p>
                </div>
            </div>
            `;
        }
    } else if (page_content === 'fungi') {
        out_page(woody_trees_btn)
        out_page(herbaceous_plants_btn)
        on_page(fungi_btn)
        content_div.innerHTML = ``
        for (const woody_tree of woody_trees_list) {
            content_div.innerHTML += `
            <div class="content" id="${woody_tree.title}">
                <img src="${woody_tree.img}" alt="">
                <div>
                    <h2>${woody_tree.title}</h2>
                    <p>${woody_tree.dac_diem}</p>
                </div>
            </div>
            `;
        }
    }
}



function on_page(e) {
    e.style.color = 'white';
    e.style.backgroundColor = '#27ae60';
}

function out_page(e) {
    e.style.color = '#27ae60';
    e.style.backgroundColor = 'white';
}