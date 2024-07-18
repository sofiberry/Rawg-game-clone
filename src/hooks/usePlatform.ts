// import useData from "./useData";
import platforms from "../data/platforms";
// import { Platform } from "./useGames";

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
