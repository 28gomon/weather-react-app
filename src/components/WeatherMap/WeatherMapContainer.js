import React from "react";
import { connect } from "react-redux";
import { getDataThunkCreator } from "../../redux/reducerGetData";

class WeatherMapContainer extends React.Component {

    componentDidMount() {
        this.props.getDataThunkCreator(this.props.city);
    }

    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        city: state.reducerGetData.city
    }
}

export default connect(mapStateToProps, {
    getDataThunkCreator
})(WeatherMapContainer);