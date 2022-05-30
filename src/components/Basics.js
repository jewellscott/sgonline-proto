import AppButton from "./AppButton"

const Basics = ({ initial, world, carBranch, career, carWorkplace, activity, trait, aspCategory, aspiration, aspDescription }) => {
  return (
    <>
      <p>
            Sul sul! My initials are <AppButton label={ initial } /><AppButton label={ initial } /> and I live in <AppButton label={ world } />!
          </p>
          <br/>
          <p>
            I work at { carWorkplace } as a <AppButton label={ carBranch } /> in the <AppButton label={ career } /> career. 
            
             In my free time, I enjoy <AppButton label={ activity } /> and <AppButton label={ activity } />, but I dislike <AppButton label={ activity } />. 
            
            My friends say I display <AppButton label={ trait } />, <AppButton label={ trait } />, and <AppButton label={ trait } /> traits. 
            
            My aspiration in life is all about <AppButton label= { aspCategory } />– <AppButton label={ aspiration } />! { aspDescription }!
          </p>
    </>
  )
}

export default Basics