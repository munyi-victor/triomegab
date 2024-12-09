import type {MetadataRoute} from "next";

export default function sitemap():MetadataRoute.Sitemap{
    return [
        {
            url:"https://triomegab.vercel.app",
            lastModified: new Date(),
        },
        {
            url:"https://triomegab.vercel.app/about",
            lastModified:new Date(),
        },{
            url:"https://triomegab.vercel.app/contact",
            lastModified:new Date(),
        },{
            url:"https://triomegab.vercel.app/donate",
            lastModified:new Date(),
        },{
            url:"https://triomegab.vercel.app/donate/touchlife",
            lastModified:new Date(),
        },
    ]
}