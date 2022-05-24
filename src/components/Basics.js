import AppButton from "./AppButton"

const Basics = ({ initial, world }) => {
  return (
    <>
      <p>
            Sul sul! My initials are <AppButton label={ initial } /><AppButton label={ initial } /> and I live in <AppButton label={ world } />!
          </p>
          <br/>
          <p>
            {/* I work at { gameplay.careers.sort(randomize)[0].workplace } as a <AppButton label={ gameplay.careers[0].branches.sort(randomize)[0] } /> in the <AppButton label={ gameplay.careers[0].name } /> career. 
             */}
            {/* In my free time, I enjoy <AppButton label={ gameplay.preferences.acivities.sort(randomize)[0] } /> and <AppButton label={ gameplay.preferences.acivities[1] } />, but I dislike <AppButton label={ gameplay.preferences.acivities[2] } />. 
            
            My friends say I display <AppButton label={ basics.traits.sort(randomize)[0] } />, <AppButton label={ basics.traits[1] } />, and <AppButton label={ basics.traits[3] } /> traits. 
            
            My aspiration in life is all about <AppButton label= { basics.aspirations.sort(randomize)[0].category } />– <AppButton label={ basics.aspirations[0].name } />! { basics.aspirations[0].description }! */}

          </p>
    </>
  )
}

export default Basics