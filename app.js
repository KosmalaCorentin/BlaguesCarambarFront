const btnrdm = document.getElementById("randomButton");
const btnid = document.getElementById("idButton");
const btnall = document.getElementById("allButton");
const result = document.getElementById("result");
btn.addEventListener("click",async () => {
    const res = await fetch("https://BlagueCarambar.onrender.com/api/v1/BlagueCarambar")
    const data  = await res.json()
    console.log (data)
    result.textContent=data.blague.name
})