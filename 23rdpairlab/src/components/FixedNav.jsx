
import{FaWhatsapp} from 'react-icons/fa'
import{AiOutlineMail,AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
const FixedNav = () => {
  return (
    <section className=" hidden w-full bg-teal-700 lg:h-8 text-white " > 
        <div className='container max-w-6xl mx-auto px-4 h-full flex items-center justify-between  ' >
            <div className='' >
                <p>Welcome to our <strong>23rdpair lab</strong> Service!</p>
            </div>
            <div className='flex justify-center items-center gap-3' >
                <FaWhatsapp color='yellow' size={20} /><span>WhatsApp: +92311 0315066</span>|
                <AiOutlineMail color='blue'  size={20} /><span>contact@23rdpairlab.com</span>|
                <AiFillFacebook color='blue' size={20} />
                <AiFillLinkedin color='blue' size={20}/>
                <AiFillInstagram color='orange' size={20}/>
                <AiFillYoutube color='red' size={20}/>

            </div>
        </div>
    </section>
  )
}

export default FixedNav