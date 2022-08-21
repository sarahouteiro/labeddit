import { Posts, EnviadoPor, Texto, DivEngajamento, DivComentarios, DivBottom } from './styled'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { useParams, useLocation } from 'react-router-dom'

const PostDetail = () => {
    const params = useParams()
    const { state } = useLocation()
    console.log(params, state, 'foi agora foi')

    return(
        <>
            <Posts>
                <EnviadoPor>Enviado por: {state.username}</EnviadoPor>
                <Texto>{state.body}</Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fifth'} fontSize={'small'}/>
                    <p>{state.voteSum === null ? '0' : state.voteSum}</p> 
                    <ArrowDownwardIcon color={'fifth'} fontSize={'small'}/>
                    </DivEngajamento>
                    <DivComentarios>
                        <ChatBubbleOutlineIcon color={'fifth'} fontSize={'small'} />
                        <p>{state.commentCount === null ? '0' : state.commentCount}</p>
                    </DivComentarios>
                </DivBottom>
            </Posts>
        </>
    )
}

export default PostDetail