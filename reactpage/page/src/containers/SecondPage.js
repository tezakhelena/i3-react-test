import React from 'react';

const SecondPage=()=> {
    return (
        <>
                <div className="content">
                    <h1 className="title">Our commitment to #BeCrueltyFree</h1>
                    <p className="body">Investing over $440 million over 40 years in alternatives to animal testing, our researchers pioneering over 25 non-animal methods, publishing more that 1000 scientiic articles.</p>
                    <div className="pic fade">
                        <img className='pic' src="https://images.unsplash.com/photo-1626981702016-723713eb6fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80" alt='crueltyfree' />
                    </div>
                        <div className="nested fade">
                            <div>
                                <img className="img1" src="https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='investing'/><p className='text'>Investing</p>
                            </div> 
                            <div>
                                <img className="img2" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt='partnering'/><p className='text'>Partnering</p>
                            </div>
                            <div>
                                <img className="img3" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='advertising'/><p className='text'>Advertising</p>
                            </div>
                        </div>
                </div>
            
        </>
    );
};
export default SecondPage
