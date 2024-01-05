import { createClient,groq } from "next-sanity"

export const getInventions = async () => {
    let inventions: any[] = []
    try{
        console.log("got here")
        const client = createClient ({
            projectId: "3ejsn20b",
            dataset: "production",
            apiVersion: "1",
        })

        // this is another structured query instead of fetching all the fields, we can specify fields like this.
        // return client.fetch(
        //     groq`*[_type == "inventions"]{
        //         _id,
        //         _createdAt,
        //         name,
        //         "slug": slug.current,
        //         "image": image.asset->url,
        //         url,
        //         content
        //     }`
        // )

        await client.fetch('*[_type == "invention"]').then((data) => {
            console.log("the data is ", data)
            inventions = data
        }).catch((err) => {
            console.error("[Error while fetching]", err)
            return []
        })
    }catch(_){
        console.error("[SANITY_GET-INVENTIONS]", _)
        return[]
    }finally{
        return inventions
    }
}