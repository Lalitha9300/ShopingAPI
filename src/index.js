let productmain=document.querySelector("#products")
let i=1
function fetchData() {
    fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((products)=>{
            products.map((product)=>{
                let card=document.createElement("section")
                
                card.addEventListener("click",()=>{
                    window.location.assign(`product.html?id=${product.id}`)
                })

                let pic=document.createElement("article")
                pic.style.backgroundImage=`url(${product.image})`

                let piccontent=document.createElement("article")
                piccontent.classList.add("piccontent")
                
                
                let rating= document.createElement("div")
                rating.classList.add("rating")
                rating.innerHTML=`${product.rating.rate} 
                <i class="fa-solid fa-star" style="color:rgb(20,149,143);"></i>
                <span> | </span> ${product.rating.count}`

                let similar=document.createElement("div")
                similar.classList.add("similar")
                similar.innerHTML=`<img src="/assets/similar.png" style="height:13px; width:14px">
                <h6>VIEW SIMILAR</h6>`

                // let hoverSlider1=document.createElement("div")
                // hoverSlider1.classList.add("hoverSlider")
                // hoverSlider1.style.backgroundImage=`url(${product.image})`
                // let hoverSlider2=document.createElement("div")
                // hoverSlider2.classList.add("hoverSlider")
                // hoverSlider2.style.backgroundImage=`url(${product.image})`
                // hoverSlider2.style.backgroundSize="180px"
                // let hoverSlider3=document.createElement("div")
                // hoverSlider3.classList.add("hoverSlider")
                // hoverSlider3.style.backgroundImage=`url(${product.image})`
                // hoverSlider3.style.backgroundSize="280px"
                
                

                let hoverContent=document.createElement("div")
                hoverContent.classList.add("hoverContent")
                hoverContent.innerHTML=`<div style="text-align:center">
                                        <span class="dot"></span> 
                                        <span class="dot"></span> 
                                        <span class="dot"></span>
                                        <span class="dot"></span> 
                                        <span class="dot"></span> 
                                        <span class="dot"></span> 
                                        </div>
                                        <button><img src="/assets/wishIcon.svg" alt="" height="20px%" width="20px"> <span>  WISHLIST</span></button>`
                                        
                let details= document.createElement("div")
                details.classList.add("details")
                details.innerHTML=`<h4>${product.title}</h4>
                <h5>Rs. ${product.price}</h5>`
                
               

             
                
            piccontent.append(rating,similar)
            pic.append(piccontent)
            card.append(pic,details,hoverContent)
            productmain.append(card)
            })
        })
        .catch(()=>console.log("somthing wrong"))
    }
fetchData()


// let slideIndex = 0;
// showSlides();
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("hoverSlider");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 1500); // Change image every 2 seconds
//   }