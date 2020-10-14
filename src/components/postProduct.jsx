import React from 'react';


const PostProduct = () => {
    return ( <div className='container chooseCategory'>
    <h1>Choose a Category</h1>
    <div className='categoryContainer'>
        <div className='row'>
            <div
                className='col col-l'
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfUC7fKnXXI0-GmbgTdDYTdwbf6EqVDyAxIRRFrn80GEB7dnw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628') }>
               <img src={`${process.env.PUBLIC_URL}/categories/book.svg`} alt=''/>
                <p>Books</p>
            </div>
            <div
                className='col'
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe6eKPTNfCrckHkCNwA70Znhej4l5gWuYLoNAvy9NGPEzez7w/viewform?vc=0&c=0&w=1&flr=0&gxids=7628') }>
               <img src={`${process.env.PUBLIC_URL}/categories/mobile.svg`} alt=''/>
                <p>Mobiles</p>
            </div>
        </div>
        <div className='row'>
            <div
                className='col col-l'
                style={{ borderBottom: 'none' }}
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScNHcK2ayarkFqrPT9t77j_T8IXLxYOf6ItV-qgvakbhYbkTw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628') }>
               <img src={`${process.env.PUBLIC_URL}/categories/cd.svg`} alt=''/>
                <p>Gaming CD's</p>
            </div>
            {/* <div className='col'>
               <img src={`${process.env.PUBLIC_URL}/categories/accessory.svg`} alt=''/>
                <p>Accessories</p>
            </div> */}
            <div
                className='col' style={{ borderBottom: 'none' }}
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZbgqjSGyCbZrOfZ3kSO97xZDNvpxvqpTssXYJVVmdvg-uGg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628') }>
               <img src={`${process.env.PUBLIC_URL}/categories/console.svg`} alt=''/>
                <p>Consoles</p>
            </div>
        </div>
        {/* <div className='row'>
            <div
                className='col'
                style={{ borderBottom: 'none' }}
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeZbgqjSGyCbZrOfZ3kSO97xZDNvpxvqpTssXYJVVmdvg-uGg/viewform?vc=0&c=0&w=1&flr=0&gxids=7628') }>
               <img src={`${process.env.PUBLIC_URL}/categories/console.svg`} alt=''/>
                <p>Consoles</p>
            </div>
        </div> */}
    </div>
</div>);
}
 
export default PostProduct;