import { useFetchAlbumsQuery } from '../store'
import Skeleton from './Skeleton'
import ExpandedPanel from './ExpandablePanel'
import Button from './Button'

function AlbumsList({ user }) {

    const { data, error, isLoading } = useFetchAlbumsQuery(user)

    let content;
    if (isLoading) {
        content = <Skeleton times={3} />
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>
            return <ExpandedPanel key={album.id} header={header}>
                List of photos in the album
            </ExpandedPanel>
        })
    }

    return (
        <div>
            <div>AlbumsList {user.name}</div>
            <div>{content}</div>
        </div>
    )
}

export default AlbumsList