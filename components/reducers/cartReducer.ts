interface CartState {
    cartItems: any[];
  }

const initialState: CartState = {
    cartItems:[]
}
// add to cart . existing state jasta ko testai ma aru data thapn ho 
const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':{
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id == item.id);
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                        x.id === item.id? {...x, quantity : x.quantity + item.quantity} : x
                    ),
                };
            }
            return{ ...state, cartItems : [...state.cartItems, item]} ;
        }
        default:
            return state;
    }
}

export default cartReducers;