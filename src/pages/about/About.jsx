import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css';

 const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum libero illum aperiam sunt eligendi, quo, omnis iure rerum doloribus magni accusantium, itaque quaerat odit atque? Architecto aspernatur blanditiis porro dolores!
    </Header>

    <section className='about_story'>
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, at doloribus est in tempora eos nobis esse magnam cum sit animi? Tempora voluptas et iure. Optio expedita dignissimos officia amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
        </div>
      </div>
    </section>

    <section className='about_vision'>
      <div className="container about_vision-container">
        
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, at doloribus est in tempora eos nobis esse magnam cum sit animi? Tempora voluptas et iure. Optio expedita dignissimos officia amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Our Story" />
        </div>
      </div>
    </section>

    <section className='about_mission'>
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our Story" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, at doloribus est in tempora eos nobis esse magnam cum sit animi? Tempora voluptas et iure. Optio expedita dignissimos officia amet.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aperiam similique repudiandae et non numquam vel dolores</p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About;
