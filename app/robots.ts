import type { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return {
        rules:{
            userAgent:"*",
            allow:"/",
            disallow:[]
        },
        sitemap:"https://triomegab.vercel.app/sitemap.xml"
    }
}