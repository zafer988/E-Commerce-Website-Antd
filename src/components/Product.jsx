import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Slice/ProductGetThunk'
import React from 'react';
import { Button, Card, Spin } from 'antd';
import { add } from '../Slice/CartSlice';
const { Meta } = Card;

const Product = () => {

    const data = useSelector(store => store.product.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    setTimeout(() => {
        setLoading(false)
    }, 300);
    const addToCart = (product) => {
        dispatch(add(product))
    }
    const [loading, setLoading] = useState(true)

    const cart = data.map((product) => {
        return (
            <>

                <div className='col-md-4' style={{ marginBottom: '1rem' }} >

                    {/*/ Spini Eğer burada verirsen döngü devam ettiği için her biri için loading döner ve her birinde loading gözükür */}
                    <Card
                        hoverable
                        style={{
                            width: 280,
                        }}
                        cover={<img alt="example" src={product.image} style={{ width: '280px', textAlign: 'center' }} />} >
                        <Meta title={product.title} description={product.description} />
                        <div style={{ textAlign: 'center', marginTop: '1rem', size: 'large' }}>
                            <Button type='primary' onClick={() => addToCart(product)}>Add To Cart</Button>
                        </div>

                    </Card>
                </div>

            </>
        )
    })
    return (
        <>
            <Spin tip='Loading...' size='large' style={{ marginTop: '20rem' }} spinning={loading}>
                {/*  O Yüzden burada vermelisin ki döngü bitmiş olur ve yükleme tamamlamlandığı için 1 loading gözükür */}
                <div className='row'>
                    {cart}
                </div>
            </Spin>
        </>
    )
}

export default Product