import { baseURL } from "@/utils/api"

export const postCommunication = async (body: Object) => {
    try {
        const res = await fetch(`${baseURL + "/posts/communication"}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        })
         return res;
    } catch(error) {
        console.error(error)
    }
}
export const postEvent = async (body: Object) => {
    try {
        const res = await fetch(`${baseURL + "/posts/event"}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        })
         return res;
    } catch(error) {
        console.error(error)
    }
}

export const getCommunications = async () => {
    try {
        const res = await fetch(`${baseURL + "/posts"}`)

        if (!res.ok) {
            console.log("Error fetching data")
        }

        const data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        console.error("error:" + error)
    }
}