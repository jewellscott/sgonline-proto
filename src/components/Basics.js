import { activity } from "../js/gamedata"
import AppButton from "./AppButton"

const Basics = ({ initials, world, career, carName, carBranch, carWorkplace, activities, traits, aspCategory, aspiration, aspName, aspDescription }) => {
  return (
    <>
      <p>
            Sul sul! My initials are <AppButton label={ initials[0] } /><AppButton label={ initials[1] } /> and I live in <AppButton label={ world } />!
          </p>
          <br/>
          <p>
            I work at { carWorkplace } in the <AppButton label={ carBranch } /> branch of the <AppButton label={ carName } /> career. 
            
             In my free time, I enjoy <AppButton label={ activities[0] } /> and <AppButton label={ activities[1] } />, but I dislike <AppButton label={ activities[2] } />. 
            
            My friends say I display <AppButton label={ traits[0] } />, <AppButton label={ traits[1] } />, and <AppButton label={ traits[2] } /> traits. 
            
            My aspiration in life is all about <AppButton label= { aspCategory } />– <AppButton label={ aspName } />! { aspDescription }!
          </p>
    </>
  )
}

export default Basics