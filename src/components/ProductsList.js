import React from 'react';
import Product from '../components/Product';
import {connect} from 'react-redux';

export const ProductsList=(props)=>(
    <div>
      
    {
      
        props.items.length === 0 ? (
          <div className='list-item list-item--message'>
            <span>
              No expenses
            </span>
          </div>
        ) : (
            props.items.map((item) => {
                
                return <Product key={item.id} {...item}  />;
            })
          )
      }
    </div>
);


const mapStateToProps=(state)=>{
    return{
        items:state.items
    }
}
export default connect(mapStateToProps)(ProductsList);