import Base from '../Packs/base.json'

// Here, I would import every pack that the user selects
// Using the spread operator?
// And make a master array with all of the objects below
// Plus the pack-specific objects that are included with whichever pack

// Base Game (General)

export const cas = Base.data[0].cas;
export const basics = Base.data[0].cas.basics[0];
export const gameplay = Base.data[0].gameplay;

/* basics */
export const initial = basics.initial;

export const world = gameplay.worlds;

export const career = gameplay.careers[0];
export const carName = gameplay.careers[0].name;
export const carBranch = gameplay.careers[0].branches[0];
export const carDescription = gameplay.careers[0].description;
export const carWorkplace = gameplay.careers[0].workplace;

export const activity = gameplay.preferences.acivities[0];
export const activiites = gameplay.preferences.activities;

export const trait = basics.traits[0];
export const traits = basics.traits;

export const aspiration = basics.aspirations[0];
export const aspName = basics.aspirations[0].name;
export const aspCategory = basics.aspirations[0].category;
export const aspDescription = basics.aspirations[0].description;
