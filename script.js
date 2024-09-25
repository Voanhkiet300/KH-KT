





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




















const nav = document.querySelector('nav')
const home = document.querySelector("#home")
const home_btn = document.querySelector("#home_btn")
const content_div = document.querySelector("#trees_page_div")
const trees_page = document.querySelector("#trees_page")
const woody_trees_btn = document.getElementById('woody_trees')
const herbaceous_plants_btn = document.getElementById('herbaceous_plants')
const fungi_btn = document.getElementById('fungi')
let woody_trees_list = []
let herbaceous_plants_list = []
let fungis_list = []
let count = 0




showContent('home')




count = 0
const woody_trees_querySnapshot = await getDocs(collection(db, "woody_trees"));
woody_trees_querySnapshot.forEach((doc) => {
    woody_trees_list.push({ ...doc.data(), id: doc.id });

    count++
});
console.log(woody_trees_list)


count = 0
const herbaceous_plants_querySnapshot = await getDocs(collection(db, "herbaceous_plants"));
herbaceous_plants_querySnapshot.forEach((doc) => {
    herbaceous_plants_list.push({ ...doc.data(), id: doc.id });

    count++
});
console.log(herbaceous_plants_list)


count = 0
const fungis_querySnapshot = await getDocs(collection(db, "fungi"));
fungis_querySnapshot.forEach((doc) => {
    fungis_list.push({ ...doc.data(), id: doc.id });
    count++
});
console.log(fungis_list)







const form = document.querySelector("form");
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const input5 = document.getElementById("input5")
const input6 = document.getElementById("input6")
const input7 = document.getElementById("input7")
const input8 = document.getElementById("input8")
input8.value = 'fungi';

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    if ([input1, input2, input3, input4, input5, input6, input7, input8].every(input => input.value !== "")) {
        if (input8.value == "woody_trees") {
            
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
        } else if (input8.value == "herbaceous_plants") {
            
            try {
                const docRef = await addDoc(collection(db, "herbaceous_plants"), {
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
        } else if (input8.value == "fungi") {
            
            try {
                const docRef = await addDoc(collection(db, "fungi"), {
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
      }

    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
    input7.value = '';
    input8.value = 'fungi';
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
        for (const herbaceous_plant of herbaceous_plants_list) {
            content_div.innerHTML += `
            <div class="content" id="${herbaceous_plant.title}">
                <img src="${herbaceous_plant.img}" alt="">
                <div>
                    <h2>${herbaceous_plant.title}</h2>
                    <p>${herbaceous_plant.dac_diem}</p>
                </div>
            </div>
            `;
        }
    } else if (page_content === 'fungi') {
        out_page(woody_trees_btn)
        out_page(herbaceous_plants_btn)
        on_page(fungi_btn)
        content_div.innerHTML = ``
        for (const fungi of fungis_list) {
            content_div.innerHTML += `
            <div class="content" id="${fungi.title}">
                <img src="${fungi.img}" alt="">
                <div>
                    <h2>${fungi.title}</h2>
                    <p>${fungi.dac_diem}</p>
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