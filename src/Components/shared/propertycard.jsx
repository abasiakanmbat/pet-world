import React from 'react'
import bone from "/bone.png"
import ball from "/ball.png"
import cross from "/cross.png"
import scissors from "/scissors.png"


export const propertyList = [
    {
        image: bone,
        title: 'Best quality pet food',
        text1: ' Super delicious food.',
        text2: 'Available in a range of',
        text3: 'delicious flavors.',

    },
    {
        image: ball,
        title: 'Toys & Accessories',
        text: 'Soft toys, chew toys, and r ',
        text2: 'rope toys. Strong,',
        text3: 'interactive, and fun.',
    },
    {
        image: cross,
        title: 'Pets medical care',
        text: ' You can get a wide ',
        text2: 'range of great ',
        text3: 'treatments for your dog.',
    },
    {
        image: scissors,
        title: 'Full service grooming',
        text: "It's the right time to ",
        text2: 'groom your dog with a ',
        text3: 'variety of treatments.',
    }
]
export default function Propertycard() {
    const mapList = propertyList.map(mapitems =>


        <div className='px-5 text-center mt-16 md:mt-0'>
            <div className='   h-24 content-center flex justify-center items-center '>
                <div className='w-fit '>
                    <img className=' ' src={mapitems.image} alt="" />

                </div>
            </div>
            <h1 className='font-semibold text-xl py-5 '>{mapitems.title}</h1>
            <p>
                <div>{mapitems.text1} </div>
                <div>{mapitems.text2} </div>
                <div>{mapitems.text3} </div>

            </p>
        </div>



    )
    return (
        <div className='pt-10'>
            <div className='flex justify-around flex-col md:flex-wrap md:flex-row'>
                {mapList}

            </div>

        </div>

    )
}
