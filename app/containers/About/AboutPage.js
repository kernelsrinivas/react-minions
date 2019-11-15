import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Page from '../../components/Page/Page';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        this.props.changeTitle();
    }

    shouldComponentUpdate(nextProps) {
        console.log(this.props, nextProps);
        console.log('shouldComponentUpdate', shallowCompare(this, nextProps))
        return shallowCompare(this, nextProps);
    }

    componentDidUpdate(){
        console.log("Component Did Update Called");
    }

    render() {
        return(<Page info={this.props.pageInfo.title}/>)
    }
}

const mapStateToProps = state => {
    return {
        pageInfo : state.about,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle : () => dispatch({type:'ABOUT_PAGE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);