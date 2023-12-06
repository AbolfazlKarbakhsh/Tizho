import usePackages from "../hooks/usePakages";


const GetPackages = async (jpAxios ,url , setLoder , setPakaegs) => {
    const statePackage = await usePackages(jpAxios, url);
    statePackage == "In" ? setLoder(statePackage) : setLoder("d-none");
    setPakaegs(statePackage);
}

export default GetPackages 