import axios from "axios";

export default {
    getnews: (key,p)=>axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei",{
        params:{
        q:key,
        page:p,
        sort:'newest',
        fl:['web_url','pub_date','headline.main','abstract','source']
    }
    }).then(res=>res)
}