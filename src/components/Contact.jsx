import React,{useState,useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import {styles} from "../style"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
//template_2gczsz9
//service_kpd4oyw
//rXHyPI5fsGhuPeyd0

const Contact = () => {
  const formref = useRef()
  const [form, setform] = useState({
    name:"",
    email:"",
    message:""
  })
  const [loading, setloading] = useState(false)

  const handlechange=(e)=>{
    const {name,value}= e.target
    setform({...form,[name]:value})


  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    setloading(true)
    emailjs.send("service_kpd4oyw","template_70xqxns",{from_name:form.name,to_name:"Tahir",from_email:form.email,to_email:"muariftahir961@gmail.com",message:form.message},"rXHyPI5fsGhuPeyd0")
    .then(()=>{
      setloading(false)
      alert("Thank you. I will get back to you as soon as possible.")
      setform({
        name:"",
        email:"",
        message:""
      })
    },(error)=>{
      setloading(false)
      console.log(error);
      alert('Something went wrong')
    })


  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formref} onSubmit={handlesubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' type="text" name='name' value={form.name} onChange={handlechange} placeholder="What's your name?" />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' type="email" name='email' value={form.email} onChange={handlechange} placeholder="What's your email?" />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'  name='message' value={form.message} onChange={handlechange} placeholder="What do you require?" />

          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' type='submit'>
            {loading?"Sending...":'Send'}

          </button>
        </form>

      </motion.div>
      <motion.div  variants={slideIn("right","tween",0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")