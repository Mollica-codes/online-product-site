import React, {useState, useEffect} from 'react';
import data from './data.json'

const Context = React.createContext()

function ContextProvider({children}) {
    const [product, setProduct] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [isProductChecked, setIsProductChecked] = useState(false)
    const [isPriceChecked, setIsPriceChecked] = useState(false)
    const [cartCount, setCartCount] = useState(0);

  //  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior"
 //   useEffect(() => {
//        fetch(makeupData)
//        .then(res => res.json())
//        .then(data => {
 //        setOriginalData(data) ||
 //        setProduct(data)
//         })
 //   }, []);


    useEffect(()=> {
        setOriginalData(data) ||
        setProduct(data)
    }, [])

    function filterPrice(event) {
        const {value, type, checked} = event.target;
        if(checked && value <= '40') {
            setProduct(prev => prev.filter(prev => prev.price < value))
            setIsPriceChecked(true)
        } else if(checked && value > '40') {
            setProduct(prev => prev.filter(prev => prev.price > value))
            setIsPriceChecked(true)
        } else if(type==="checkbox" && !checked) {
            clearFilter()
        }
    }

    function filterType(event) {
        const {value, type, checked} = event.target;
        if(checked) {
        setProduct(prev => prev.filter(prev => prev.product_type === value))
        setIsProductChecked(true)
        }
        else if(type==='checkbox' && !checked) {
            clearFilter()
        }
    }

   function clearFilter() {
       setProduct(originalData);
       setIsProductChecked(false)
       setIsPriceChecked(false)
   }

   function addCartItem(newItem) {
       setCartItem(prev => [...prev, newItem])
       setCartCount(prev => prev + 1)
   }

   function removeCartItem(id) {
        setCartItem(prev => prev.filter(item => item.id !== id))
        setCartCount(prev => prev - 1)
   }

    function emptyCart() {
        setCartItem([])
        setCartCount(0)
    }

    return (
        <Context.Provider value={{product, isProductChecked, isPriceChecked, cartItem, cartCount, filterType, filterPrice, clearFilter, addCartItem, removeCartItem, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};

