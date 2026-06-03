conosle.log("import js");

// let count = 0;
// let total = 0;

// // ================= ADD TO CART =================

// function addToCart(name, price, img, btn){

//     count++;
//     total += price;

//     document.getElementById("cart-count").innerText = count;

//     // empty check safe
//     let empty = document.getElementById("empty");
//     if (empty) {
//         empty.style.display = "none";
//     }

//     // item add
//     let li = document.createElement("li");

//     let image = document.createElement("img");
//     image.src = img;
//     image.style.width = "40px";
//     image.style.height = "40px";
//     image.style.borderRadius = "50%";
//     image.style.marginRight = "10px";

//     let text = document.createElement("span");
//     text.innerText = name + " - Rs." + price;

//     li.appendChild(image);
//     li.appendChild(text);

//     document.getElementById("cart-list").appendChild(li);

//     document.getElementById("cart-total").innerText = "Total: Rs." + total;

//     // button effect safe
//     if (btn) {
//         btn.innerText = "Added ✅";
//         btn.style.background = "gray";
//         btn.disabled = true;
//     }
// }


// // ================= SHOW CART =================

// function showCart() {
//     let cart = document.getElementById("cart-section");

//     if (cart.style.display === "none" || cart.style.display === "") {
//         cart.style.display = "block";
//         cart.scrollTop = cart.scrollHeight;
//     } else {
//         cart.style.display = "none";
//     }
// }


// // ================= SMOOTH SCROLL =================

// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener("click", function(e) {
//     e.preventDefault();

//     let targetId = this.getAttribute("href");
//     let target = document.querySelector(targetId);

//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop,
//         behavior: "smooth"
//       });
//     }
//   });
// });


// // ================= MODAL =================

// function openAuth() {
//     document.getElementById("auth-modal").style.display = "flex";
//     showLogin();
// }

// function closeAuth() {
//     document.getElementById("auth-modal").style.display = "none";
// }


// // ================= TOGGLE =================

// function showLogin() {
//     document.getElementById("login-form").style.display = "block";
//     document.getElementById("signup-form").style.display = "none";
// }

// function showSignup() {
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("signup-form").style.display = "block";
// }


// // ================= SIGNUP =================

// function signupUser() {

//     let name = document.getElementById("name").value;
//     let mobile = document.getElementById("mobile").value;
//     let email = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     let repass = document.getElementById("repassword").value;

//     let passRule = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

//     if (!name || !mobile || !email || !pass || !repass) {
//         alert("⚠ Please fill all fields");
//         return;
//     }

//     if (!passRule.test(pass)) {
//         alert("⚠ Password must have uppercase, number, special character");
//         return;
//     }

//     if (pass !== repass) {
//         alert("⚠ Passwords not matching");
//         return;
//     }

//     let user = { name, mobile, email, pass };
//     localStorage.setItem(email, JSON.stringify(user));

//     alert("🎉 Signup Successful!");
//     closeAuth();
// }


// // ================= LOGIN =================

// function loginUser() {

//     let email = document.getElementById("login-email").value;
//     let pass = document.getElementById("login-password").value;

//     let user = JSON.parse(localStorage.getItem(email));

//     if (!user) {
//         alert("❌ User not found");
//         return;
//     }

//     if (user.pass === pass) {
//         alert("🎉 Login Successful!");
//         closeAuth();
//     } else {
//         alert("❌ Wrong password");
//     }
// }


// // ================= CAROUSEL =================

// document.addEventListener("DOMContentLoaded", () => {

//     const carousel = document.querySelector('.carousel');
//     const track = document.querySelector('.track');

//     if (carousel && track) {

//         carousel.addEventListener('mouseenter', () => {
//             track.style.animationPlayState = 'paused';
//         });

//         carousel.addEventListener('mouseleave', () => {
//             track.style.animationPlayState = 'running';
//         });

//     }

// });