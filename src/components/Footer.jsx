import '../App.css'
import { linkedIn, git} from '../assets/assets'

function Footer() {

  return (
    <div id='Footer' >
          <h1
            className='heroText'
          >
            Footer          
          </h1>
          
          <img src={linkedIn} alt="linkedIn}" />
          <img src={git} alt="git" />
    </div>
  )
}

export default Footer
