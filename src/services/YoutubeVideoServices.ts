const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getYoutubeVideos = async <T>(url: string): Promise<T> => {
    try {
        const res = await fetch(`${BASE_URL}${url}`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch videos");
        }

        return await res.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};  

export default getYoutubeVideos;