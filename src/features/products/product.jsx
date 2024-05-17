import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"
import loader from"../../asets/image/cartoon-snail-loading-loading-gif-animation_2734139.png"
import "./product.css"
import ProductList from "./ProductList"
import Header from "../../components/Header"

const Product = ()=>{
    const loading=useSelector((state)=>state.product.loading)
    const data=useSelector((state)=>state.product.data)
        console.log({loading,data});
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts())
    },[])

    return(
        <>
         <div className='App'> 
              <Header /> 
          </div>
        <h1>All product</h1>
        <div class="listing-section">
           {loading ? 
                <img src={loader} height={400} width={200} />
           :
           data?.products?.length > 0 ?
           <ProductList
              data={data?.products}
           />
           :
           <div>
            <h1>No porduct found</h1>
           </div>
           }
        </div>
        </>
    )
}

export default Product