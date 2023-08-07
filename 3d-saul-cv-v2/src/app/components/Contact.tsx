import instagramIcon from './images/instagram-icon.png'
import linkedinIcon from './images/linkedin-icon.png'
import facebookIcon from './images/facebook-icon.png'
import twitterIcon from './images/twitter-icon.png'
import youtubeIcon from './images/youtube-icon.png'
import Image from 'next/image'

type Props = {}

export const Contact = (props: Props) => {
  return (
   <>


          <h1 className="drop-shadow-md text-primary md:text-[70px]">Get in Touch</h1>
            <h2 className="pt-2 text-primary">Lets Talk</h2>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className="text-white pt-10">
                        If you're interested in collaborating or have any questions,
                        please don't hesitate to reach out to me. You can contact me
                        via email
                    </p>
                    <p className="text-white pt-4">I'm always open to new opportunities and exciting projects.</p>
                    <p className="text-white pt-4">Also you can contact me via WhatsApp: 4425785179</p>
                </div>
                <div className="relative flex justify-center flex-col">
                    <div className="pl-[10px] pt-[50px] text-center">
                        <p className="text-primary text-[20px] md:text-[40px]">sgfarreradev@gmail.com</p>
                    </div>
                    <div className='pl-[10px] pt-[10px] text-center'>
                        <a href="https://www.instagram.com/saulagf115/"><Image className='inline w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={instagramIcon} alt="Instagram Icon" /></a>
                        <a href="https://www.youtube.com/channel/UC1d452U6DrPOeeMypXKNz3A"><Image className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={youtubeIcon} alt="youtube Icon" /></a>
                    </div>
                </div>
            </div>
   
   
   </>
  )
}