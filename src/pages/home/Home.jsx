// import homeackground from '../../#Vanlife/image 54.png'
import './Home.scss'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container" >
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to='/vans'>Find your vans</Link>
    </div>
  )
}

export default Home