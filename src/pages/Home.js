import React , {useContext} from 'react';
import {Link} from 'react-router-dom'
import {Context} from '../Context';
import ProductCard from '../components/ProductCard';
import FilterCard from '../components/FilterCard';

function Home() {
    const {product} = useContext(Context)

    const productCard = product.map(product => (
        <Link className="router-link" key={product.id} to={`/product/${product.id}`}><ProductCard key={product.id} img={product} brand={product}/></Link>
    ))

    return (
        <div className="home-container">
            <div className="sidebar">
                <FilterCard />
            </div>
            <main className='products'>
                {productCard.length === 0 ? 
                <p className="no-products">There are no results. please refresh</p> :
                 productCard}
            </main>
        </div>
    )
}

export default Home;