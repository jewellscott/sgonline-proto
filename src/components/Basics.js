import { activity } from "../js/gamedata"
import AppButton from "./AppButton"

const Basics = ({ initial, world, career, carName, carBranch, carWorkplace, activity, activity1, activity2, activity3, trait, trait1, trait2, trait3, aspCategory, aspiration, aspName, aspDescription }) => {
  return (
    <>
      <p>
            Sul sul! My initials are <AppButton label={ initial } /><AppButton label={ initial } /> and I live in <AppButton label={ world } />!
          </p>
          <br/>
          <p>
            I work at { carWorkplace } in the <AppButton label={ carBranch } /> branch of the <AppButton label={ carName } /> career. 
            
             In my free time, I enjoy <AppButton label={ activity } /> and <AppButton label={ activity } />, but I dislike <AppButton label={ activity } />. 
            
            My friends say I display <AppButton label={ trait } />, <AppButton label={ trait } />, and <AppButton label={ trait } /> traits. 
            
            My aspiration in life is all about <AppButton label= { aspCategory } />– <AppButton label={ aspName } />! { aspDescription }!
          </p>
    </>
  )
}

export default Basics