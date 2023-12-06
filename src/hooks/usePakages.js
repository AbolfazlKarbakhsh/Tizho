export default async function usePackages(jpAxios, url ) {
    try {
        const query = await jpAxios.get(url);
        return query.data

    } catch (error) {
        console.error("\n Network Error ... \n");
        return "In"
    }
}
