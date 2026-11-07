import { addedProfiles } from "./added-profiles";
import { coreProfiles } from "./core-profiles";
import { wave2Profiles } from "./wave2-profiles";
import { wave3Profiles } from "./wave3-profiles";

export const profiles = [...coreProfiles, ...addedProfiles, ...wave2Profiles, ...wave3Profiles];
