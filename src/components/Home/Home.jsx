import React, {useState} from 'react'
import HeadingText from '../Heading-text/HeadingText';

const Home = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup:', { name, email, text })
      };
  
  return (
  
    <div className="px-16 flex flex-col">
 
     <HeadingText/>

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

        <form onSubmit={handleSubmit} className="px-5 py-5 flex flex-col justify-center-items-center">

            <input 
            type="text" 
            className="h-8 mt-5 px-2 py-2 border-2 border-black"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
 />
            <input 
            type="text" 
            className="h-8 mt-5 px-2 py-2 border-2 border-black"
            placeholder='E-Mail' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
/>
            <input 
            type="text" 
            className="h-20 mt-5 px-2 py-2 border-2 border-black flex flex-wrap justify-center items-center"
            placeholder='Text' 
            value={text}
              onChange={(e) => setText(e.target.value)}
            required
/>

            <div className="flex flex-row justify-end">
              <button
              type='submit' 
              className="cursor-pointer h-8 w-2/6 mt-5 px-5 text-xs bg-black text-white flex justify-center items-center font-bold">
            Submit
            </button>
            </div>
        </form>
    </div>
</div>

    </div>
    
  
  )
}

export default Home
