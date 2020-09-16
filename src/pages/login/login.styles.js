import {makeStyles} from '@material-ui/styles'
import theme from './../../component/config/theme'


const useStyle = makeStyles({
    title :{
        textAlign : 'left',
        marginButtom : theme.spacing(6),
        marginTop: theme.spacing(2)

    },
    'input-label': {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        color: 'red'
      },
    paper : {
        marginTop : theme.spacing(13),
        padding : theme.spacing(6),
        background: '#202020',
        color: '#fff'
    },
    button : {
        marginTop : theme.spacing(6),
        
    },
    EpicLogo: {
        textAlign : 'center',

    },
    formInput :{
        backgroundColor: '#2b2b2b',
        color: '#ffff !important',
        fontSize: '10rem !important'
    },
    input: {
        '&::placeholder': {
          fontStyle: 'italic',
          color: 'red !important'
        },
      },
    
})

export default useStyle