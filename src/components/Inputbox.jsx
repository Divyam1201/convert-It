import React from 'react'

const Inputbox = ({Type,setcurval,val,maxval=null,cursorbehaviour}) => {
  return (
    <>
        <input className={`text-slate-200 bg-zinc-600 w-36 sm:w-auto ${cursorbehaviour}  rounded-lg`} readOnly={Type} type="numeric" min={0} maxLength={maxval} value={val} disabled={Type} onChange={
          (e)=>
        {
            setcurval(e.target.value)
            }
            }/>
    </>
  )
}

export default Inputbox