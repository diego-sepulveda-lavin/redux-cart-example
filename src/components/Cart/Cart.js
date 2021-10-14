import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
	const cartItems = useSelector(state => state.cart.items);
	const totalQuantity = useSelector(state => state.cart.totalQuantity);

	let cartContent;

	if(totalQuantity === 0 ){
		cartContent = <li>No items yet!</li>
	} else {
		cartContent = cartItems.map(item => (
			<CartItem
				key={item.id}
				item={{
					id: item.id,
					title: item.name,
					quantity: item.quantity,
					total: item.totalPrice,
					price: item.price,
				}}
			/>
		))
	}
	

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartContent}
			</ul>
		</Card>
	);
};

export default Cart;
