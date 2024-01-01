import './About.scss'
import aboutImage from '../../assets/images/image 55.png'

const About = () => {
  return (
    <div className='abt-container'>
        {/* <img src="../../assets/images/image 57.png" alt="About page image" /> */}
        <img src={aboutImage} alt="About page image" />
        <div className='cta-container'>
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          <h2>Your destination is waiting.
            Your van is ready.</h2>
        </div>
    </div>
  )
}
export default About