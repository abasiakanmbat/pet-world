import React from 'react'
import nestle from "/Nestle.svg"
import apple from "/Apple.svg"
import beco from "/Beco.svg"
import amazon from "/Amazon.svg"
import google from "/Google.svg"
import walmart from "/Walmart.svg"






export default function Logos() {
  return (
    <div className='flex sm: gap-8 md: justify-evenly pt-9 flex-wrap'>
        <div>
       <img src={nestle} alt="" className='h-8'/>
      </div>

<div>
  <img src={apple} alt=""  className='h-8' />
</div>

<div>
<img src={beco} alt="" className='h-8' />

</div>

<div>
<img src={amazon} alt=""  className='h-8'/>

</div>

{/* <div className='sm: flex sm: flex-row sm: mt-9 border sm: mr-48'><br /> */}
<div>
<img src={google} alt=""  className='h-8'/>

</div>

<div>
<img src={walmart} alt=""  className='h-8'/>

</div>

{/* </div> */}



    </div>
  )
}
