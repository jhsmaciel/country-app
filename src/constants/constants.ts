import { Value } from "components/Select";

export const REGIONS: Value[] = 'Africa,Americas,Asia,Europe,Oceania'
    .split(",")
    .map(region => ({ label: region, value: region.toLowerCase()}))


const STORAGE_PREFIX = "@CountryApp::";

export const STORAGE_ITEM_NAME_THEME = STORAGE_PREFIX + "ThemePalette";