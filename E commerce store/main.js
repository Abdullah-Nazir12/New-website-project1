import './style.css'
let products = [
  {name: "Traditional Car" , description:"An old Orange car" , price:"2500$" , image:"https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"},
  {name: "Yellow car" , description:"an old yellow car" , price:"34000" , image:"https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"},
  {name: "Fortuner" , description:"An SUV car" , price:"40000$" , image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"},
  
]

let clutter = "";
products.forEach(function(product){
clutter += `<div class="products whitespace-nowrap flex overflow-auto px-5 gap-5">
      <div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">x </div>
          <div class="data w-full px-2 py-5">
              <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
              <div class="flex justify-between w-full items-center mt-2">
                  <div class="w-1/2">
                      <h3 class="font-semibold opacity-20">Hangup data.</h3>
                      <h4 class="font-semibold mt-2">$3,456</h4>
                  </div>
                  <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                          class="ri-add-line"></i></button>
              </div>
          </div>
      </div>`;
})