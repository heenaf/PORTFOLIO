import React from 'react'

const Contact = () => {
    return (
      <div id="contact" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-12 pb-2">
        <div className="flex flex-col pt-26 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 pt-24">
            <p className="text-4xl font-bold inline border-b-2 border-gray-500 pt-8">Contact</p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
    <div className="flex justify-center items-center ">
        <form action="https://getform.io/f/pbqgqowb"
        method="POST"
         className="flex flex-col w-full md:w-1/2 ">
            <input type="text" name="name" 
             placeholder="Enter your name" 
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <input type="text" 
            name="email" 
            placeholder="Enter your email" 
            className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <textarea name="message" 
            placeholder="Enter your message"
             rows="6" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' >

            </textarea>

            <button className='text-black bg-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                Let's Connect 

            </button>
        </form>
    </div>
</div>

    </div>
  )
}

export default Contact
