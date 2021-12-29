import React, { Component , useState} from 'react';
import "./App.css";
  const App =() =>{
      const[Result , setResult]=useState(" ");
       const HandleClick =(e)=>{
           setResult(Result.concat(e.target.name));
       }
       const clear =()=>{
           setResult("")
       }
       const total =()=>{
            try{
                setResult(eval(Result).toString())
            }catch(err){
                setResult("Error")
            }
            
       }
       
       return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center'>Calculator</h1>
                </div>
                <div className="row">
                    <div id="calculator" className="col-md-3 col-9 offset-md-5 offset-2 shadow p-4 calculator">
                        <div className="row">
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-12 p-3 pb-4  king ">
                                    <input className="col-12" text="text" value={Result}/>
                                         
                                         
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button name='clear' className='p-2 px-3 shadow btn1' onClick={clear} >C</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 shadow ml-1 btn2'>+/-</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 shadow btn3' onClick={HandleClick} >%</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 shadow btn4' onClick={HandleClick} name='/' >/</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn5' onClick={HandleClick} name='7' >7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn6' onClick={HandleClick} name='8'>8</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn7' onClick={HandleClick} name='9'>9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn8' onClick={HandleClick} name='*'>x</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn9' onClick={HandleClick} name='4' >4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn10' onClick={HandleClick} name='5'>5</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn11' onClick={HandleClick} name='6'>6</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn12' onClick={HandleClick} name='-'>-</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn13' onClick={HandleClick} name='1'>1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn14' onClick={HandleClick} name='2'>2</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn15' onClick={HandleClick} name='3'>3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn16' onClick={HandleClick} name='+'>+</button>
                                    </div>
                                    <div className="col-6">
                                        <button className='p-2 px-3 mt-2 shadow btn17' onClick={HandleClick} name='0'>0</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn18' onClick={HandleClick} name='.'>.</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='p-2 px-3 mt-2 shadow btn19' onClick={total}>=</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>www. &copy; CopyRight basharatalidogar14@gmail.com All Right Reversed!</footer>
       </div>
        
    </>
       )
        
  }

                                                
    export default App;