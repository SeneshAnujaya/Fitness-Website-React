import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';
import {plans} from '../../data';


import './plans.css';

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus autem consequuntur recusandae, fugiat laboriosam numquam harum voluptatibus rem optio placeat ad consequatur delectus quae? Enim quidem rem adipisci minus accusantium!
    </Header>
    <section className='plans'>
      <div className="container plans_container">
        {
          plans.map(({id, name, desc, price, features }) => {
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans