import React from 'react'

const Home = () => {
  return (
  
    <div className="px-16 flex flex-col">
 
        <h1 className="mt-10 mb-5 text-2xl font-extrabold justify-start items-center">
            CONTACT US
        </h1>

        <p className="text-xs font-medium flex flex-row flex-wrap">
            LET'S CONNECT: WE'RE HERE TO HELP. AND WE'D LOVE TO HERE FROM YOU! WEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>

<div className="flex flex-col justify-between sm:flex-row">
    
<div className="px-5 w-full sm:w-1/2 flex justify-center items-center place-content-center">
    <img src="img.jpeg"/>
</div>

    <div className="flex flex-col mt-10 w-full sm:w-1/2">
    <div className="px-5 flex flex-row justify-between">
            <div className="cursor-pointer h-8 w-5/12 px-0 sm:px-5 text-xs bg-black text-white flex justify-center items-center">
            <i class="fa-regular fa-message"></i>
            <div className="p-2">SUPPORT CHAT</div>
            </div>
            <div className="cursor-pointer h-8 w-5/12 px-0 sm:px-5 text-xs bg-black text-white flex justify-center items-center">
            <i class="fa-solid fa-phone"></i>
            <div className="p-2">VIA CALL</div>
            </div>
        </div>

        <div className="cursor-pointer my-5 h-8 border-2 border-black rounded flex justify-center items-center">
        <i class="fa-regular fa-envelope"></i>
            <div className="p-2">
                VIA EMAIL FORM
            </div>
        </div>

        <div className="px-5 py-5 flex flex-col justify-center-items-center">
            <input type="text" 
            className="h-8 mt-5 px-2 py-2 border-2 border-black"
            placeholder='Name' />
            <input type="text" 
            className="h-8 mt-5 px-2 py-2 border-2 border-black"
            placeholder='E-Mail' />
            <input type="text" 
            className="h-20 mt-5 px-2 py-2 border-2 border-black flex flex-wrap justify-center items-center"
            placeholder='Text' />

            <div className="flex flex-row justify-end">
              <div className="cursor-pointer h-8 w-2/6 mt-5 px-5 text-xs bg-black text-white flex justify-center items-center font-bold">
            Submit
            </div>
            </div>
        </div>
    </div>
</div>

    </div>
    
  
  )
}

export default Home
