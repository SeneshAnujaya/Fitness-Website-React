import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


import './gallery.css';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images);
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea cupiditate voluptatum modi eos placeat, perspiciatis ratione maxime ipsum voluptate blanditiis laudantium impedit, rem odit praesentium, quisquam magnam ut aliquam!
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery pics ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery