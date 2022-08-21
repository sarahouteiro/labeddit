import { Posts, EnviadoPor, Texto, DivEngajamento, DivComentarios, DivBottom, Carregando } from './styled'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { useNavigate } from 'react-router-dom'
import { goToPostDetailPage } from '../../routes/coordinator'
import CircularProgress from '@mui/material/CircularProgress'
import { createPostVote, changePostVote, deletePostVote} from '../../services/votes'
import { arrowUpColor, arrowDownColor } from '../../helpers/arrowHelper'

const PostList = (props) => {

    const updateVote = (voto, id, uservote) => {

        if(uservote === null) {
            createPostVote(id, voto)
            props.sendVote()
        } 

        if(uservote === 1 && voto === 1) {
            deletePostVote(id)
            props.sendVote()
        }

        if(uservote === -1 && voto === -1) {
            deletePostVote(id)
            props.sendVote()
        }

        if(uservote === 1 && voto === -1) {
            changePostVote(id, -1)
            props.sendVote()
        }

        if(uservote === -1 && voto === 1) {
            changePostVote(id, 1)
            props.sendVote()
        }
        console.log(voto, id, uservote)
    }

    const postCards = props.posts.map((post) => {
        return(
            <Posts key={post.id}>
                <EnviadoPor>Enviado por: {post.username}</EnviadoPor>
                <Texto onClick={() => goToPostDetailPage(navigate, post.id, post)}>{post.body}</Texto>
                <DivBottom>
                    <DivEngajamento>
                        {props.loading ? <CircularProgress color={'primary'}/> :
                            <>
                                <ArrowUpwardIcon 
                                    style={{ color: arrowUpColor(post.userVote)}} 
                                    fontSize={'small'} 
                                    onClick={() => updateVote(1, post.id, post.userVote)}
                                />
                                <p>{post.voteSum=== null ? '0' : post.voteSum}</p> 
                                <ArrowDownwardIcon 
                                    style={{ color: arrowDownColor(post.userVote)}}  
                                    fontSize={'small'} 
                                    onClick={() => updateVote(-1, post.id, post.userVote)}
                                />
                            </>
                        }
                    </DivEngajamento>
                    <DivComentarios onClick={() => goToPostDetailPage(navigate, post.id, post)}>
                        <ChatBubbleOutlineIcon color={'fifth'} fontSize={'small'} />
                        <p>{post.commentCount === null ? '0' : post.commentCount}</p>
                    </DivComentarios>
                </DivBottom>
            </Posts>
        )
    })

    const navigate = useNavigate()

    return(
        <>
            {
                postCards.length > 0 ? 
                    postCards : 
                    <Carregando>
                        <CircularProgress color={'primary'}/>
                    </Carregando>
            }
        </>
    )
}

export default PostList