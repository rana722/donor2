
// books images
let bookimg1 = "/images/books/book1.jpg";
let bookimg2 = "/images/books/book2.jpg";
let bookimg3 = "/images/books/book3.jpg";
let bookimg4 = "/images/books/book4.jpg";
let bookimg5 = "/images/books/book5.jpg";
let bookimg6 = "/images/books/book6.jpg";
let bookimg7 = "/images/books/book7.jpg";
let bookimg8 = "/images/books/book8.jpg";
let bookimg9 = "/images/books/book9.jpg";
let bookimg10 = "/images/books/book10.jpg";
let bookimg11 = "/images/books/book11.jpg";
let bookimg12 = "/images/books/book12.jpg";
let bookimg13 = "/images/books/book13.jpg";
let bookimg14 = "/images/books/book14.jpg";
let bookimg15 = "/images/books/book15.jpg";
let bookimg16 = "/images/books/book16.jpg";
let bookimg17 = "/images/books/book17.jpg";
let bookimg18 = "/images/books/book18.jpg";
let bookimg19 = "/images/books/book19.jpg";
let bookimg20 = "/images/books/book20.jpg";
let bookimg21 = "/images/books/book21.jpg";
let bookimg22 = "/images/books/book22.jpg";


let StationaryImg1 = "/images/stationary/item1.jpg";
let StationaryImg2 = "/images/stationary/item2.jpg";
let StationaryImg3 = "/images/stationary/item3.jpg";
let StationaryImg4 = "/images/stationary/item4.jpg";
let StationaryImg5 = "/images/stationary/item5.jpg";
let StationaryImg6 = "/images/stationary/item6.jpg";
let StationaryImg7 = "/images/stationary/item7.jpg";
// toys images
let toyimg1 = "/images/toys/toy1.jpg";
let toyimg2 = "/images/toys/toy2.jpg";
let toyimg3 = "/images/toys/toy3.jpg";
let toyimg4 = "/images/toys/toy4.jpg";
let toyimg5 = "/images/toys/toy5.jpg";
let toyimg6 = "/images/toys/toy6.jpg";
let toyimg7 = "/images/toys/toy7.jpg";
let toyimg8 = "/images/toys/toy8.jpg";
let toyimg9 = "/images/toys/toy9.jpg";
let toyimg10 = "/images/toys/toy10.jpg";


// food images
let foodimg1 = "/images/food/apple.jpg";
let foodimg2 = "/images/food/banana.jpg";
let foodimg3 = "/images/food/tomato.jpg";
let foodimg4 = "/images/food/potato.jpg";
let foodimg5 = "/images/food/strawberry.jpg";
let foodimg6 = "/images/food/mango.jpg";
let foodimg7 = "/images/food/tuna.jpg";
let foodimg8 = "/images/food/beans.jpg";
let foodimg9 = "/images/food/pasta.jpg";
let foodimg10 = "/images/food/Spaghetti.jpg";
let foodimg11 = "/images/food/rice.jpg";
let foodimg12 = "/images/food/meal1.jpg";
let foodimg13 = "/images/food/meal2.jpg";
let foodimg14 = "/images/food/meal3.jpg";
let foodimg15 = "/images/food/donuts.jpg";
let foodimg16 = "/images/food/Black Forest Cake.jpg";




let STATIONARY = [
  {
    id:1,name : "Basics Presharpened Wood Cased #2 HB Pencils" , type:"Pencils" , quantity:50,image:StationaryImg1
  },
  {
    id:2,name : "bulk pack of 24 ink pens", type:"Pens" , quantity:30,image:StationaryImg2
  },
  {
    id:3,name : "Classic Ruler 12 Inch Stainless Steel Ruler", type:"Ruler" , quantity:120,image:StationaryImg3
  },
  {
    id:4,name :"Geometry Compasses Set with Maths Protractor, Set Squares, Ruler" , type:"Ruler" , quantity:150,image:StationaryImg4
  },
  {
    id:5,name :"Eraser Pencil Erasers, Small Rubber Eraser" , type:"Rubber", quantity:220,image:StationaryImg5
  },
  {
    id:6,name :"Colored Pens" , type:"Pens" , quantity:150,image:StationaryImg6
  },
  {
    id:7,name :  "Quick Dry Ocean Themed Gel Pens", type:"pens" , quantity:160,image:StationaryImg7
  },
] 




// 12 books with title, author, puplication year, genr, description , cover and quantity
let BOOKS = [
{
id:1,title:"Mathematics 5",author:"John Albert",publication_year:2020,genre:["Science"],description:"Mathematics is the science and study of quality, structure, space, and change.",cover_image:bookimg21,quantity:10,language:"English",Edition:"First Edition"
},
{
id:2,title:"The new science of everything",author:"Ted Henry",publication_year:2013,genre:["Science"],description:"Science attempts to describe and understand the nature of the universe in whole or in part.",cover_image:bookimg22,quantity:10,language:"English",Edition:"First Edition"},
{
id:3,title:"To Kill a Mockingbird",author:"Harper Lee",publication_year:1960,genre:["Fiction","Classic"],description:"A classic novel depicting racial injustice in the American South.",cover_image:bookimg1,quantity:6,language:"English",Edition:"First Edition"
},
{
id:4,title:"1984",author:"George Orwell",publication_year:1949,genre:["Dystopian","Science Fiction"],description:"A dystopian novel portraying a totalitarian society.",cover_image:bookimg2,quantity:12,language:"English",Edition:"First Edition"
},
{
id:5,title:"Pride and Prejudice",author:"Jane Austen",publication_year:1813,genre:["Classic","Romance"],description:"A classic novel exploring themes of love, marriage, and social norms.",cover_image:bookimg3,quantity:4,language:"English",Edition:"First Edition"
},
{
id:6,title:"The Great Gatsby",author:"F. Scott Fitzgerald",publication_year:1925,genre:["Fiction","Classic"],description:"A tale of the American Dream, wealth, and love during the Roaring Twenties.",cover_image:bookimg4,quantity:11,language:"English",Edition:"First Edition"
},
{
id:7,title:"Moby-Dick",author:"Herman Melville",publication_year:1851,genre:["Fiction","Adventure"],description:"The epic tale of Captain Ahab's obsession with the white whale.",cover_image:bookimg5,quantity:14,language:"English",Edition:"First Edition"
},
{
id:8,title:"The Lord of the Rings",author:"J.R.R. Tolkien",publication_year:1954,genre:["Fantasy","Adventure"],description:"An epic fantasy saga about the quest to destroy the One Ring.",cover_image:bookimg6,quantity:8,language:"English",Edition:"First Edition"
},
{
id:9,title:"The Catcher in the Rye",author:"J.D. Salinger",publication_year:1951,genre:["Fiction","Coming-of-age"],description:"A classic coming-of-age novel following Holden Caulfield's journey.",cover_image:bookimg7,quantity:12,language:"English",Edition:"First Edition"
},
{
id:10,title:"The Hobbit",author:"J.R.R. Tolkien",publication_year:1937,genre:["Fantasy","Adventure"],description:"The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",cover_image:bookimg8,quantity:11,language:"English",Edition:"First Edition"
},
{
id:11,title:"One Hundred Years of Solitude",author:"Gabriel Garcia Marquez",publication_year:1967,genre:["Magical Realism","Literary Fiction"],description:"A multi-generational saga of the Buendía family in the fictional town of Macondo.",cover_image:bookimg9,quantity:6,language:"English",Edition:"First Edition"
},
{
id:12,title:"War and Peace",author:"Leo Tolstoy",publication_year:1869,genre:["Historical Fiction","Epic"],description:"A monumental work depicting the events of Russian society during the Napoleonic era.",cover_image:bookimg10,quantity:3,language:"English",Edition:"First Edition"
},
{
id:13,title:"The Odyssey",author:"Homer",publication_year:"8th century BCE",genre:["Epic","Mythology"],description:"An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",cover_image:bookimg11,quantity:2,language:"English",Edition:"First Edition"
},
{
id:14,title:"The Divine Comedy",author:"Dante Alighieri",publication_year:"1320",genre:["Epic","Poetry"],description:"An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",cover_image:bookimg12,quantity:7,language:"English",Edition:"First Edition"
}
]

//  10 toys with title, description, category, age, gender and quantity
let TOYS =
[
    {
    id:1,title:"Racing Car",description:"Plastic Racing Car Contains Remote Control And Modern Design Working With Lighting Operation",categoy:"cars",age:"1 to 3 years",gender:"Boy",image:toyimg1,quantity:11
    },
    {
        id:2,title:"Kids Ride On Car",description:"Riding Toys & Vehicles",categoy:"cars",age:"4 to 7 years",gender:"Boy",image:toyimg2,quantity:13
    },
    {
        id:3,title:" Barbie Doll",description:"Doll for Kids with Foldable Hand,Makeup,Clothes & Beauty Doll Accessories ",categoy:"dolls",age:"4 to 7 years",gender:"Girl",image:toyimg3,quantity:17
    },
    {
        id:4,title:"Barbie Skipper Babysitters",description:"Playset with Doll, Stroller, Baby Doll & 5 Accessories, Remove Stroller Seat for Carrier",categoy:"dolls",age:"1 to 3 years",gender:"Girl",image:toyimg4,quantity:14
    },
    {
        id:5,title:"Bingo Bobi Little Family",description:"3 dolls. bag. Camera. Car drag a child. Baby eating tools.",categoy:"dolls",age:"1 to 3 years",gender:"Girl",image:toyimg5,quantity:18
    },
    {
        id:6,title:"Basketball Game",description:"Contains Strong Base And Made Of High Quality Materials And Add More Entertaining For kids ",categoy:"outdoor",age:"7 to 12 years",gender:"Boy",image:toyimg6,quantity:14
    },
    {
        id:7,title:"Slide for kids",description:"It provides endless hours of fun and entertainment",categoy:"outdoor",age:"7 to 12 years",gender:"Boy",image:toyimg7,quantity:15
    },
    {
        id:8,title:"Open play tent",description:"Plastic Open play tent with 50 balls",categoy:"outdoor",age:"4 to 7 years",gender:"Boy",image:toyimg8,quantity:19
    },
    {
        id:9,title:"Squishmallows HugMees",description:"tigre - cuddle and squeeze! Squishmallows are the softest, cutest plush toys around!",categoy:"stuffed",age:"1 to 3 years",gender:"Boy",image:toyimg9,quantity:9
    },
    {
        id:10,title:"Big Stitch soft doll",description:"BABY’S FIRST TEDDY. You never forget your first teddy bear.",categoy:"stuffed",age:"1 to 3 years",gender:"Girl",image:toyimg10,quantity:16
    },

]

// 16 food with name, category and quantity
let FOOD = 
[
    {id:1,name:"apple",category:"fruits and vegetables", quantity:130,image:foodimg1},
    {id:2,name:"banana",category:"fruits and vegetables", quantity:145,image:foodimg2},
    {id:3,name:"tomato",category:"fruits and vegetables", quantity:190,image:foodimg3},
    {id:4,name:"potato",category:"fruits and vegetables", quantity:175,image:foodimg4},
    {id:5,name:"strawberry",category:"fruits and vegetables", quantity:65,image:foodimg5},
    {id:6,name:"mango",category:"fruits and vegetables", quantity:140,image:foodimg6},
    {id:7,name:"Tuna Chunks",category:"canned foods", quantity:150,image:foodimg7},
    {id:8,name:"beans with olive oil",category:"canned foods", quantity:170,image:foodimg8},
    {id:9,name:"rings pasta pouch 400 grams",category:"canned foods", quantity:210,image:foodimg9},
    {id:10,name:"Egyptian Rice Bag, 5 kg",category:"canned foods", quantity:240,image:foodimg11},
    {id:11,name:"Spaghetti",category:"canned foods", quantity:220,image:foodimg10},
    {id:12,name:"Hearty Steak and Potatoes with Balsamic-Cranberry Pan Sauce",category:"fresh meals", quantity:130,image:foodimg12},
    {id:13,name:"Sausage and Roasted Bell Pepper Pasta with Creamy Parmesan Garlic Tomato Sauce",category:"fresh meals", quantity:200,image:foodimg13},
    {id:14,name:"Indian Stuffed Peppers with Curried Beef & Garam Masala-scented Rice",category:"fresh meals", quantity:180,image:foodimg14},
    {id:15,name:"Donuts",category:"backed goods", quantity:700,image:foodimg15},
    {id:16,name:"Black Forest Cake",category:"backed goods", quantity:600,image:foodimg16},

]
// ************End Data*************************************** 

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    navText: [],
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
  function sweetAlert(text){
    Swal.fire({
      title: "Good job!",
      text: text,
      icon: "success"
    });
  }

$('#view-donation-requests-container').click(function(event) {
    event.preventDefault();
    $('#donation-requests-section').show();
  });

  // displaying Toy data on screen
  let ToysDiv = document.querySelector(".items-box.Toys");
  let ToysCategoryDiv = document.querySelector(".categoryList.Toys");
  let ToysGenderDiv = document.querySelector(".categoryList.Toys.gender")
  let ToysAgeDiv = document.querySelector(".categoryList.Toys.age")
  let allToysCategories =[];
  let allToysGender = [];
  let allToysAge = [];
  
function DisplayToys(toys,allCheckCategories=[],allCheckGender=[],allCheckAge=[]){
    ToysDiv.innerHTML="";
    toys.forEach(e => {
      if(!allToysCategories.includes(e.categoy)){
        ToysCategoryDiv.innerHTML += `<label >
        <input type="checkbox" class="Toys-check" onclick="categoryFilterToys()" value="${e.categoy}"/> ${e.categoy}
      </label>`
      allToysCategories.push(e.categoy);
    
      }
      if(allCheckCategories.length==0){
        allCheckCategories = allToysCategories;
      }
      if(!allToysGender.includes(e.gender)){
        ToysGenderDiv.innerHTML += `<label >
        <input type="checkbox" class="Toys-check-gender" onclick="genderFilterToys()" value="${e.gender}"/> ${e.gender}
      </label>`
      allToysGender.push(e.gender)
      }
      if(allCheckGender.length==0){
        allCheckGender = allToysGender;
      }
      if(!allToysAge.includes(e.age)){
        ToysAgeDiv.innerHTML += `<label >
        <input type="checkbox" class="Toys-check-age" onclick="ageFilterToys()" value="${e.age}"/> ${e.age}
      </label>`
      allToysAge.push(e.age)
      }
      if(allCheckAge.length==0){
        allCheckAge = allToysAge;
      }
      
    if(allCheckCategories.includes(e.categoy) && allCheckGender.includes(e.gender) && allCheckAge.includes(e.age)){
      ToysDiv.innerHTML += `
    <div class="item-box toyi">
    <img src="${e.image}"/>
    <div class="details">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <p>Needed Quantity : ${e.quantity<=0? "No Need More" : e.quantity }</p>
      <button onclick="showDetailsToys(${e.id})" class="v-details">View Details</button>
      <div class="mt-3 show-details-toy-${e.id} hid">
      <p> age : ${e.age}</p>
      <p>type: ${e.categoy}</p>
      <p>gender : ${e.gender}</p>
      <div style="display:${e.quantity <=0? "none" : "flex"}" class="justify-content-between">
      <input placeholder="Your Donation" class="quantityInput-toys-${e.id} px-2" type="number"/> <button  onclick="handleDonateToys(${e.id})" class="btn btn-success">Donate</button>
      </div>
      </div>
    </div> </div>`;
    }
    })
    
    }
    
    function showDetailsToys(itemId){
      // console.log(itemId);
      document.querySelector(`.show-details-toy-${itemId}`).classList.toggle("hid")
    }
   
 
  
  
   

// filter Categories
    function categoryFilterToys(){
        let checkInput = document.querySelectorAll(".Toys-check")
        let checkData = [];
        checkInput.forEach((e)=>{
            if(e.checked){
               checkData.push(e.value);
            }
        })
        DisplayToys(TOYS,checkData);
    }

    // filter Gender
    function genderFilterToys(){
      let checkInput = document.querySelectorAll(".Toys-check-gender")
      let checkData = [];
      checkInput.forEach((e)=>{
          if(e.checked){
             checkData.push(e.value);
          }
      })
      DisplayToys(TOYS,[],checkData);
  }
  function ageFilterToys(){
    let checkInput = document.querySelectorAll(".Toys-check-age")
    let checkData = [];
    checkInput.forEach((e)=>{
        if(e.checked){
           checkData.push(e.value);
        }
    })
    DisplayToys(TOYS,[],[],checkData);
}

    DisplayToys(TOYS);

function handleDonateToys(itemId){
  let qualityInput = document.querySelector(`.quantityInput-toys-${itemId}`);
  let item = TOYS.filter((e) => e.id == itemId)[0];
  let itemQuantity = TOYS.filter((e) => e.id == itemId)[0].quantity;
  let newQuantity = itemQuantity - qualityInput.value;

  if(qualityInput.value != "" && qualityInput.value > 0 ){
  let newToys = TOYS.map((e)=> {
    if(e.id == itemId){
      e.quantity = newQuantity
    }
    return e;
  })
    sweetAlert(`You have Donated  ${qualityInput.value} "${item.title}" Toy`);
    DisplayToys(newToys);
  }
  

}




    // displaying Books
let BooksDiv = document.querySelector(".items-box.books");
function DisplayBooks(books){
  BooksDiv.innerHTML='';
    books.forEach(e => {
    BooksDiv.innerHTML += `
    <div class="item-box booki">
    <img src="${e.cover_image}"/>
    <div class="details">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <p>Needed Quantity : ${e.quantity<=0? "No Need More" : e.quantity }</p>
      <button onclick="showDetailsBooks(${e.id})" class="v-details">View Details</button>
      <div class="mt-3 show-details-book-${e.id} hid">
      <p> Author : ${e.author}</p>
      <p>Language: ${e.language}</p>
      <p>Edition: ${e.Edition}</p>
      <p>genre : ${e.genre}</p>
      <div style="display:${e.quantity <=0? "none" : "flex"}" class="justify-content-between">
      <input placeholder="Your Donation" class="quantityInput-${e.id} px-2" type="number"/> <button  onclick="handleDonateBooks(${e.id})" class="btn btn-success">Donate</button>
      </div>
      </div>
    </div> </div>`;
    })
    
    }
    DisplayBooks(BOOKS);

function handleDonateBooks(itemId){
  let qualityInput = document.querySelector(`.quantityInput-${itemId}`);
  let item = BOOKS.filter((e) => e.id == itemId)[0];
  let itemQuantity = BOOKS.filter((e) => e.id == itemId)[0].quantity;
  let newQuantity = itemQuantity - qualityInput.value;

  if(qualityInput.value != "" && qualityInput.value > 0 ){
  let newBooks = BOOKS.map((e)=> {
    if(e.id == itemId){
      e.quantity = newQuantity
    }
    return e;
  })
    sweetAlert(`You have Donated  ${qualityInput.value} "${item.title}" books`);
    DisplayBooks(newBooks);
  }
  

}
function showDetailsBooks(itemId){
  // console.log(itemId);
  document.querySelector(`.show-details-book-${itemId}`).classList.toggle("hid")
}


// Displaying Food data
let FoodDiv = document.querySelector(".items-box.food");
let FoodCategoriesDiv = document.querySelector(".categoryList.food");
let allFoodCategories =[];

function DisplayFood(food,allCheckCategories=[]){
    FoodDiv.innerHTML="";
    food.forEach(e => {
      if(!allFoodCategories.includes(e.category)){
        FoodCategoriesDiv.innerHTML += `<label >
        <input type="checkbox" class="food-check" onclick="categoryFilterFood()" value="${e.category}"/> ${e.category}
      </label>`
      allFoodCategories.push(e.category);
    
      }
      if(allCheckCategories.length==0){
        allCheckCategories = allFoodCategories;
      }
      if(allCheckCategories.includes(e.category)){
    FoodDiv.innerHTML += `
    <div class="item-box foodi">
    <img src="${e.image}"/>
    <div class="details">
      <h3>${e.name}</h3>
      <p>Needed Quantity : ${e.quantity<=0? "No Need More" : e.quantity } ${e.category=="fruits and vegetables"&& e.quantity>0? "KG" : ""}</p>
      <div style="display:${e.quantity <=0? "none" : "flex"}" class="justify-content-between">
      <input placeholder="Your Donation" class="quantityInput-food-${e.id} px-2" type="number"/> <button  onclick="handleDonateFood(${e.id})" class="btn btn-success">Donate</button>
      </div>
    </div> </div>`;
    }
    })
    
    }

    // filter food data

    function categoryFilterFood(){
        let checkInput = document.querySelectorAll(".food-check");
        let checkData = [];
       checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value)
        }
       })
       DisplayFood(FOOD,checkData);
    }

    DisplayFood(FOOD);

    function handleDonateFood(itemId){
      let qualityInput = document.querySelector(`.quantityInput-food-${itemId}`);
      let item = FOOD.filter((e) => e.id == itemId)[0];
      let itemQuantity = FOOD.filter((e) => e.id == itemId)[0].quantity;
      let newQuantity = itemQuantity - qualityInput.value;
    
      if(qualityInput.value != "" && qualityInput.value > 0 ){
      let newFood = FOOD.map((e)=> {
        if(e.id == itemId){
          e.quantity = newQuantity
        }
        return e;
      })
        sweetAlert(`You have Donated  ${qualityInput.value} ${item.category=="fruits and vegetables"?"KG" : ""} "${item.name}" `);
        DisplayFood(newFood);
      }
      
    
    }
    











  let StationaryDiv = document.querySelector(".items-box.Stationary");

 
function DisplayStationary(stationary){
  StationaryDiv.innerHTML='';
  stationary.forEach(e => {
    StationaryDiv.innerHTML += `
    <div class="item-box stationaryi">
    <img src="${e.image}"/>
    <div class="details">
      <h3>${e.name}</h3>
      <p>Needed Quantity : ${e.quantity<=0? "No Need More" : e.quantity }</p>
      <button onclick="showDetailsSta(${e.id})" class="v-details">View Details</button>
      <div class="mt-3 show-details-sta-${e.id} hid">
      <p> Type : ${e.type}</p>
      <div style="display:${e.quantity <=0? "none" : "flex"}" class="justify-content-between">
      <input placeholder="Your Donation" class="quantityInput-Sta-${e.id} px-2" type="number"/> <button  onclick="handleDonateSta(${e.id})" class="btn btn-success">Donate</button>
      </div>
      </div>
    </div> </div>`;
    })
    
    }
    DisplayStationary(STATIONARY);

    function handleDonateSta(itemId){
      let qualityInput = document.querySelector(`.quantityInput-Sta-${itemId}`);
      let item = STATIONARY.filter((e) => e.id == itemId)[0];
      let itemQuantity = STATIONARY.filter((e) => e.id == itemId)[0].quantity;
      let newQuantity = itemQuantity - qualityInput.value;
    
      if(qualityInput.value != "" && qualityInput.value > 0 ){
      let newSta = STATIONARY.map((e)=> {
        if(e.id == itemId){
          e.quantity = newQuantity
        }
        return e;
      })
        sweetAlert(`You have Donated  ${qualityInput.value} "${item.name}" `);
        DisplayStationary(newSta);
      }
      
    
    }

    function showDetailsSta(itemId){
      // console.log(itemId);
      document.querySelector(`.show-details-sta-${itemId}`).classList.toggle("hid")
    }
    


