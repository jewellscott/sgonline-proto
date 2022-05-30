import Config from '../config.json'

export const cas = Config.packs[0].data[0].cas;
export const basics = Config.packs[0].data[0].cas.basics[0];
export const gameplay = Config.packs[0].data[0].gameplay;

/* basics */
export const initial = basics.initial;

export const world = gameplay.worlds;

export const career = gameplay.careers[0];
export const carBranch = gameplay.careers[0].branches[0];
export const carDescription = gameplay.careers[0].description;
export const carWorkplace = gameplay.careers[0].workplace;

export const activity = gameplay.preferences.acivities[0];

export const trait = basics.traits[0];

export const aspiration = basics.aspirations[0];
export const aspCategory = basics.aspirations[0].category;
const aspDescription = basics.aspirations[0].description;

