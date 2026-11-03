import { addedProfiles } from "./added-profiles";
import { coreProfiles } from "./core-profiles";
import { wave2Profiles } from "./wave2-profiles";

export const profiles = [...coreProfiles, ...addedProfiles, ...wave2Profiles];
