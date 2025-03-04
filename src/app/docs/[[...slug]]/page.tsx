const Docs = async( { params }: {
    params: Promise<{
        slug: string[]
    }>
}) => {
    const { slug } = await params

    if(slug?.length > 1) {
        return (
            slug.map(x => (
                <h1 key={x + 1}>{x}</h1>
            ))
        )
    } else if(slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1>
    }

    return <h1>Docs home page</h1>
}

export default Docs