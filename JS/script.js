let size = window.innerWidth; let ham = document.querySelector(".fas"); let resl = document.querySelector(".resul"); ham.addEventListener("click", () => { if (ham.className == "fas fa-bars") { resl.style.transform = "none"; ham.className = "fa-solid fa-xmark"; } else if (ham.className == "fa-solid fa-xmark") { resl.style.transform = "scale(0)"; ham.className = "fas fa-bars"; } });