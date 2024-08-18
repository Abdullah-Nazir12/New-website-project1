let products = [
  {
    name: "Brown Comfortable Chair",
    description: "Chair",
    price: "2500$",
    image:
      "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Wooden Stool",
    description: "Kursi ",
    price: "2500$",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "TV",
    description: "An Old TV",
    price: "34000",
    image:
      "https://images.unsplash.com/photo-1675947636140-93d0de28a441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9sZCUyMHR2fGVufDB8fDB8fHww",
  },
  {
    name: "Furniture",
    description: "Home decoration",
    price: "40000$",
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "sewing machine",
    description: "Stiching hacks",
    price: "2500$",
    image:
      "https://images.unsplash.com/photo-1626274890657-e28d5b65b04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V3aW5nJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

let popular = [
  {
    name: "Brown Comfortable Chair",
    description: "An Old Orange Car",
    price: "2500$",
    image:
      "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "hel    ",
    description: "An Old Orange Car",
    price: "2500$",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "TV",
    description: "An Old Yellow Car",
    price: "34000",
    image:
      "https://images.unsplash.com/photo-1675947636140-93d0de28a441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9sZCUyMHR2fGVufDB8fDB8fHww",
  },
];

function addPopularProducts(){
  clutter = "" ;
 
  popular.forEach(function(product){
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popular.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${popular.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.description}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
                    </div>
                </div>`;
  })
  document.querySelector(".populars").innerHTML = clutter;
 
}

function productAdding() {
  let clutter = "";
  products.forEach(function (product) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img class="w-full h-full object-cover overflow-hidden" src="${product.image}"/></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.description}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

productAdding();
addPopularProducts();