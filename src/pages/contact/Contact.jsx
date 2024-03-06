import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';

import './contact.css';

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam atque suscipit sapiente dolores facilis maxime rem. Odio consequuntur rem, minima doloremque incidunt earum quidem harum eum ea cumque, praesentium provident.
    </Header>
    <section className='contact'>
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:senesh9637@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="http://wa.me/+94779864783" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact