import React from 'react'
import { useState } from 'react'
// `allMeasures` includes all the measures packaged with this library
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import Conversionoptions from './Conversionoptions';
import Inputbox from './Inputbox';

const Conversions = () => {
    const convert = configureMeasurements(allMeasures);
    const availabelConversions = convert().measures()
    const [canConvertedto, setCanconvertedto] = useState(null)
    const [conversions, setConversions] = useState({first: "----Select a unit for conversion----",second:"----Select a unit to convert from----",third:"----Select a unit to convert to----"})
    const [disabledval,setDisabledval] = useState(true)
    const [values, setValues] = useState({inputval:"",resultval:""})

    const handleFirstChange = (param) => {
      setConversions({first:param,second: "----Select a unit to convert from----",third:"----Select a unit to convert to----"});
      setValues({inputval:"",resultval:""})
      setDisabledval(false)
    };
  
    const handleSecondChange = (param) => {
      setConversions({...conversions,second:param});
      setValues({...values,resultval:""})
    };
    
    const handleThirdChange = (param) => {
      setConversions({...conversions,third:param});
      setValues({...values,resultval:""})
    };
    const handleInput = (param) => {
     
      setValues({...values,inputval:param})
    };
    const handleResult = (param) => {
     
      setValues({...values,resultval:param})
    };

  return (
    <>
    <main className='w-full h-screen bg-neutral-900 text-center text-orange-300'>
      <header className='w-full'><h1 className=' font-bold text-amber-400 text-5xl pt-12 underline underline-offset-4'>Convert-It</h1>
      <h6 className='border-red-700 border-b-2   pl-16 sm:pl-28 py-2 underline underline-offset-2 text-amber-600 '>Most types of conversion covered</h6></header>  
      {/* ===============First selectBox==============================  */}
      <section className=' mt-8'>
      <h4 className='mb-2'>Choose what you want to convert</h4>
      <Conversionoptions  child={conversions.first} availabelConversions={availabelConversions} handleFirstChange={handleFirstChange} convert={convert} setCanconvertedto={setCanconvertedto} selectionType={"first"}></Conversionoptions>
      </section>
      



      <section className='flex flex-col sm:flex-row items-center justify-evenly  mt-8 sm:mt-14 '>
      {/* ===============Second selectBox==============================  */}
      <div className='mb-4 sm:mb-0'>
      <h3 className='mb-1'>Select a type of unit to convert from</h3>
      <Conversionoptions  child={conversions.second}  availabelConversions={canConvertedto} handleSecondChange={handleSecondChange} selectionType={"second"} disabledval={disabledval}></Conversionoptions>
      </div>
      

      {/* ===============Third selectBox==============================  */}
      <div>
      <h3 className='mb-1'>Select a type of unit to convert to</h3>
      <Conversionoptions child={conversions.third} availabelConversions={canConvertedto} handleThirdChange={handleThirdChange} selectionType={"third"} disabledval={disabledval}></Conversionoptions>
      </div>
      </section>




<section className='flex items-center justify-evenly mt-14 '>
      {/* =============== Input Value Box==============================  */}
      <div>
      <h4>Value to convert : </h4>
      <Inputbox Type={false} cursorbehaviour={"cursor-text"} maxval={12} val={values.inputval} setcurval={handleInput}></Inputbox>
      </div>


      {/* =============== Output Value Box==============================  */}
      <div>
      <h4>Converted Value : </h4>
      <Inputbox Type={true} cursorbehaviour={"cursor-not-allowed"} val={values.resultval}></Inputbox>
      </div>
      </section>



<section className="w-full mt-5 sm:mt-14">

      <button className="border-2 border-white px-3 py-1 bg-amber-600 text-white rounded-xl" onClick={()=>{
        try{
          let convertedVal=Number(convert(Number(values.inputval)).from(conversions.second).to(conversions.third))
          if (isNaN(convertedVal) || convertedVal===0)
          { throw error;
          }
          handleResult(convertedVal)
        }
        catch(e){
          setValues({inputval:"",resultval:""})
          alert("can't perform operation only decimal values supported")
        }
      }}>Convert</button>
      </section>
      </main>
      </>
    
  )
}

export default Conversions