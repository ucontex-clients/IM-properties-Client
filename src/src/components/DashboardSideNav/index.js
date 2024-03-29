import React, { useState } from "react"

export function DashboardSideNav({number, activePage, setActivePage}){

    const [openWallet, setOpenWallet] = useState(false)

    const toggleWallet = () => {
        setOpenWallet(prevState => !prevState)
    }


    const back1 = {
        backgroundColor: 'rgba(61, 178, 255, 0.2)'
    }

    const back2 = {
        backgroundColor: '#fff'
    }
    const textStyle1 = {
        color: '#0682D3',
    }

    const textStyle2 = {
        color: '#000000',
    }
  



    return(
        <ul className="side-nav-ul">
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('dashboard')
                }} style={activePage ==='dashboard'? back1 :back2}>
                    <div><img src="./images/dashboard.png" alt="dashboard icon"></img></div>
                    <p style={activePage ==='dashboard'? textStyle1 :textStyle2}>Dashboard</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('buy')
                }} style={activePage ==='buy'? back1 :back2}>
                    <div><img src="./images/ShoppingCart.png" alt="shopping cart"></img></div>
                    <p style={activePage ==='buy'? textStyle1 :textStyle2}>Buy Property</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('property')
                }} style={activePage ==='property'? back1 :back2}>
                    <div><img src="./images/Property.png" alt="property icon"></img></div>
                            <p style={activePage ==='property'? textStyle1 :textStyle2}>My Property</p>
                            { number && <p className="property-number" style={{color: '#FF1212'}}>{number}</p>}
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('inspection')
                }} style={activePage ==='inspection'? back1 :back2}>
                    <div style={{width:'30px', height:'20px'}}><img src="./images/inspection.png" alt="inspection icon"></img></div>
                    <p style={activePage ==='inspection'? textStyle1 :textStyle2}>Inspection Booking</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('payment')
                    window.location.assign('/payment')
                }} style={activePage ==='payment'? back1 :back2}>
                    <div style={{width: '20px', height: '16px'}}><img src="./images/payment.png" alt="payment icon"></img></div>
                    <p style={activePage ==='payment'? textStyle1 :textStyle2}>Payment</p>
                    <div className="arrow-down-holder" style={{width:'15px', height: '10px'}}><img src="./images/arrowDown.png" alt="arrow down"></img></div>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('wallet')
                    toggleWallet()
                }} style={activePage ==='wallet'? back1 :back2}>
                    <div style={{width: '20px', height: '18.5px'}}><img src="./images/wallet.png" alt="wallet icon"></img></div>
                    <p style={activePage ==='wallet'? textStyle1 :textStyle2}>Wallet</p>
                    <div className="arrow-down-holder" style={{width:'15px', height: '10px'}}><img src={openWallet ? "./images/arrowUp.png" : "./images/arrowDown.png"} alt='wallet arrow'></img></div>
                </div>
                <div className={openWallet ? '' : 'close-open-wallet'}>
                    <p className="wallet-option" onClick={() => setActivePage('method')}>Fund Wallet</p>
                    <p className="wallet-option" onClick={() => setActivePage('withdraw')}>Widthdraw Money</p>
                    <p className="wallet-option" onClick={() => setActivePage('transaction')}>My Transactions</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('account')
                }} style={activePage ==='account'? back1 :back2}>
                    <div><img src="./images/user2.png" alt="user icon"></img></div>
                    <p style={activePage ==='account'? textStyle1 :textStyle2}>My Account</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('referral')
                }} style={activePage ==='referral'? back1 :back2}>
                    <div><img src="./images/Handshake.png" alt="handshake"></img></div>
                    <p style={activePage ==='referral'? textStyle1 :textStyle2}>Referrals</p>
                </div>
            </li>
            <li>
                <div className="list-item-wrapper" onClick={() => {
                    setActivePage('chat')
                }} style={activePage ==='chat'? back1 :back2}>
                    <div><img src="./images/chat.png" alt="chat icon"></img></div>
                    <p style={activePage ==='chat'? textStyle1 :textStyle2}>Chat with Admin</p>
                </div>
            </li>
        </ul>
    )
}