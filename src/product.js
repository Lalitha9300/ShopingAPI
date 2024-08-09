function getURL() {
    let query=window.location.search
    let obj=new URLSearchParams(query)
    let idValue=obj.get("id")
    return idValue
}
let id=getURL()



function fetchProduct() {
    fetch(`https://fakestoreapi.com/products/${id}` )
        .then((data)=>data.json())
        .then((products)=>{
            
            let pics=document.querySelectorAll(".pics")
            pics.forEach((pic)=>{
            let img=document.createElement("img")
            img.src=products.image
            pic.appendChild(img)
                
            let name=document.getElementById("product-name")
            name.innerText=products.category

            let title=document.getElementById("product-title")
            title.innerText=products.title

            let rating=document.getElementById("product-ratings")
            rating.innerHTML=`${products.rating.rate} 
            <i class="fa-solid fa-star" style="color:rgb(20,149,143);"></i>
            <span> | </span> ${products.rating.count} count`

            let price=document.getElementById("product-price")
            price.innerHTML=`<p>₹ ${products.price} <span> MRP ₹ <strike>${Math.round(products.price/(1-0.7))}</strike> <span> (70% OFF)</span></span></p>`

            
            })
            // pics[0].appendChild(img)
    
        })
}
fetchProduct()