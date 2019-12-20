import React from 'react';
import Product from './product';
import { connect } from 'react-redux';

class ProductsList extends React.Component {
  state = {
    count: 0
  }
  updateCount() {
    this.setState((prevState) => { count: prevState.count + 1 })
  }
  render() {
    return (
      <div>

        {
          //return <Product key={item.id} {...item}  />;
          this.props.items.length === 0 ? (
            <div className='list-item list-item--message'>
              <span>
                No expenses
              </span>
            </div>
          ) : (
              // props.items.map((item) => {
              //   return(

              //   <div id="wrap">
              //     <div id="columns" className="columns_4">
              //       <Product key={item.id} {...item}  />
              //     </div>
              //   </div> ) 
              // })
              <div id="wrap">
                <div id="columns" className="columns_4">
                  {

                    this.props.items.map((item) => {
                      if (item.section === this.props.section) {
                        return <Product key={item.image} {...item} />
                      }


                    }
                    )
                  }

                </div>
              </div>
            )
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.items,
    sort: state.sort
  }
}
export default connect(mapStateToProps)(ProductsList);