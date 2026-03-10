
import {useState} from "react";


import { ExportMenuProps } from "./ExploreMenuProps"
import "./ExploreMenu.css"
export function ExploreMenu(){
  const[selectedCategory,setSelectedCategory]=useState("");
  function handleCategoryClick(title){
    setSelectedCategory(title);

  }
    
    return(
        <div className="Explore-menu">
               <h2 className="">Explore Our Menu</h2>
               <p className="explore-menu-pragraph">Choose from a diverse menu fraturing a delectable array of dishes . Our mission is to satisfy Your craving and elevate you dining experiencr, one Delicious meal at a time</p>
               <div className="menu ">
                <ExportMenuProps 
                Image="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg"
                title="Samosa"
                selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
                />
                 <ExportMenuProps

            Image="https://wbcdn.in/assets/img/uploads/cache/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929_870_.jpg"
            title="Rolls"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg"
            title="Chinese"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
            
              <ExportMenuProps
            Image="https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75"
            title="Biryani"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
            <ExportMenuProps
            Image="https://www.cookforindia.com/wp-content/uploads/2016/02/Momos-snap.jpg"
            title="Momos"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://preview.redd.it/rsn12s6w9n361.jpg?width=1080&crop=smart&auto=webp&s=304bbb59f73318453454a63b1f4775f7a2e02041"
            title="Burgers"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://img-global.cpcdn.com/recipes/462e48b8dac250be/680x482cq70/palak-patta-pakada-recipe-main-photo.jpg"
            title="Pakada"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://2cookinmamas.com/wp-content/uploads/2023/04/Banana-Milkshake-garnished-square.jpg"
            title="Shake"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://madhurasrecipe.com/wp-content/uploads/2023/10/Rasgulla-Featured-Image.jpg"
            title="Rasgulla"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
             <ExportMenuProps
            Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghV5U3cc8zwpQIBT5lFC44Ky79cSXQvYvHQ&s"
            title="Gublab jamun"
               selectedCategory={selectedCategory}
                onClick={handleCategoryClick}
            />
            

               </div>
               <hr />

        </div>
    )
}