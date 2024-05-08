import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Header, Content, Footer } = Layout;
const items = [
    {
        label: <Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
    },
    {
        label: <Link to={'product'} style={{ textDecoration: 'none' }}>Product</Link>
    },
    {
        label: <Link to={'cart'} style={{ textDecoration: 'none' }}><ShoppingCartOutlined style={{ fontSize: '1.1rem' }} /></Link>
    }
]
const Navbar = () => {
    const menuitems =
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        fontSize: '1rem'
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: 'white'
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    return (
        <>
            {menuitems}
        </>
    );
};
export default Navbar;