import { useRouter } from 'next/router'

//our-domain.com/news/{newsId}
function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;


    return <h1>The News Page 1</h1>
}

//https://www.youtube.com/watch?v=MFuwkrseXVE min: 43:29

export default DetailPage;