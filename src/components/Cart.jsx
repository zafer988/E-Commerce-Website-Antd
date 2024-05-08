import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Slice/CartSlice'
import { Button, Card } from 'antd';
import { Alert } from 'antd';
const { Meta } = Card;
const Cart = () => {
    const CartProduct = useSelector(store => store.cart)
    const dispatch = useDispatch()

    const romoveCart = (id) => {
        dispatch(remove(id))

    }
    if (CartProduct.length === 0) {
        return (
            <Alert
                message="Warning"
                description="YOUR CART IS NOW EMPTY"
                type="warning"
                showIcon
                closable
                style={{ fontSize: '1rem' }}
            />
        )
    }
    const cartItems = CartProduct.map((product) => {
        return (
            <>
                <div className='col-md-4' style={{ marginBottom: '1rem' }} >
                    <Card
                        hoverable
                        style={{
                            width: 280,
                        }}
                        cover={<img alt="example" src={product.image} style={{ width: '280px', textAlign: 'center' }} />} >
                        <Meta title={product.title} description={product.description} />
                        <div style={{ textAlign: 'center', marginTop: '1rem', size: 'large' }}>
                            <Button type="primary" danger onClick={() => (romoveCart(product.id))}>Remove To Cart</Button>
                        </div>

                    </Card>
                </div>
            </>
        )
    })
    return (
        <>
            <div className='row'>
                {cartItems}
            </div>
        </>
    )
}

export default Cart