import Button from "./Button"
import { useState } from "react"

const SimGenerator = () => {

  const [items, setItems] = useState('');

  const getRandom = () => {
    fetch('http://localhost:5000/base')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  let randomNum = Math.floor(Math.random() * 2);

  const dummyData = {
    initials: ['A', 'B', 'C', 'D', 'E'],
    gender: ['Male', 'Female'],
    world: ['Willow Creek', 'Oasis Springs', 'Newcrest'],
    careers: [
      {
        "name": "Astronaut",
        "workplace": "SpaceY",
        "branches": ["Space Ranger", "Interstellar Smuggler"]
      },
      {
        "name": "Athlete",
        "workplace": "The Other Sports Team",
        "branches": [
          "Professional Athlete",
          "Bodybuilder"
        ]
      },
      {
        "name": "Business",
        "workplace": "Dewey, Cheatem & Howe Incorporated",
        "branches": ["Management", "Investor"]
      },
      {
        "name": "Criminal",
        "workplace": "Mobwives, Inc.",
        "branches": ["Boss", "Oracle"]
      },
      {
        "name": "Culinary",
        "workplace": "Make a Dish",
        "branches": ["Chef", "Mixologist"]
      },
      {
        "name": "Entertainer",
        "workplace": "Limelight",
        "branches": ["Musician", "Comedian"]
      },
      {
        "name": "Freelancer",
        "worlplace": "Computer Experts",
        "branches": "Programmer"
      },
      {
        "name": "Freelancer",
        "workplace": "Electrified Artists",
        "branches": "Digital Artist"
      },
      {
        "name": "Freelancer",
        "workplace": "Fighting Words",
        "branches": "Writer"
      },
      {
        "name": "Painter",
        "workplace": "1000 Words Art Gallery",
        "branches": ["Master of the Real", "Patron of the Arts"]
      },
      {
        "name": "Secret Agent",
        "workplace": "S.I.M.S",
        "branches": ["Diamond Agent", "Villain"]
      },
    ]
  }

  return (
    <main className="tool-main">
        <Button 
        label="Randomize All"
        onClick={getRandom}
        />
        <div>
          <p>
            Sul sul! My initials are {dummyData.initials[randomNum]}{dummyData.initials[randomNum]}, and I live in {dummyData.world[randomNum]}! I work at {dummyData.careers[randomNum].workplace} as a {dummyData.careers[randomNum].branches[randomNum]} in the {dummyData.careers[randomNum].name} career.
          </p>
        </div>
    </main>
  )
}

export default SimGenerator

