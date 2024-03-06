import React from 'react'

const Conversionoptions = ({ child, availabelConversions ,convert,setCanconvertedto, selectionType,handleFirstChange,handleSecondChange,handleThirdChange}) => {
const handleSelectionChange=(e)=>{
  switch(selectionType){
    case "first":
      setCanconvertedto(convert().possibilities(e.target.value))
      handleFirstChange(e.target.value)
      break;
    case "second":
      handleSecondChange(e.target.value)
      break;
    case "third":
      handleThirdChange(e.target.value)
      break;
    default:
      return;

  }
  
} 
  return (
    <>
    <select value={child} className="bg-zinc-800 rounded-md" onChange={handleSelectionChange}>
        <option>{child}</option>
      {availabelConversions?availabelConversions.filter(i=>(i!=child)).map((item,index)=>(<option  className='hover:bg-orange-600 hover:text-orange-100 cursor-pointer' key={index}>{item}</option>)):null}
      </select>  
    </>
  )
}

export default Conversionoptions