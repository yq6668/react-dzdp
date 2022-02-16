import { NavBar} from 'antd-mobile'
import Nnav from './nav.module.scss'
import { useNavigate,useSearchParams  } from 'react-router-dom'

export default function DNav2() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const back = () =>{
        navigate(-1)
    }
    return <NavBar className={Nnav.nav} onBack={back}>
        {searchParams.get("title")}
    </NavBar>
}