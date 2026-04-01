import {BrowserRouter,Routes,Route} from "react-router-dom"
import { FoodNavbar } from "../foodnavbar/foodnavbar"
import { Home } from "../pages/Home/Home"
import { Cart } from "../pages/Cart/Cart"
import { PlaceOrder } from "../pages/PlaceOrder/PlaceOrder"
import { Header } from "../Header/Header"
import { ExploreMenu } from "../ExploreMenu/ExploreMenu"
export function FoodIndex(){
    return(
        <div>
           
            <BrowserRouter basename="/reactallproject">
             <FoodNavbar />
             <Header/>
             {/* <ExploreMenu/> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<PlaceOrder/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}``