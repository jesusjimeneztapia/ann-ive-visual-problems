import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HOME } from '../../constants/routeNames'
import './Eyes.scss'

const Eyes = ({ result }) => {
    return <>{result.title ? <p>{result.title}</p> : <Redirect to={HOME} />}</>
}

const mapStateToProps = (state) => {
    return {
        result: state.result,
    }
}

export default connect(mapStateToProps)(Eyes)
