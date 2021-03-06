import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Permission from './permission';
import Component from  './component'

import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';


const {Header, Content, Footer} = Layout;

class PermissionHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choose_num: 0,
            a:{}
        }
    }

    onChangeNum(e) {
        this.setState({
            choose_num: e
        });
        console.log(e);
    }


    /**判定权限，分配菜单和其他页面的显示**/
    componentWillMount() {

        // const {requestFlag,getUserPermission} = this.props;
        //
        // if(requestFlag){
        //     getUserPermission();
        // }

    }

    render() {
        return (
            <div style={{width:'100%',height:'100%',position:'absolute'}}>
                <Layout style={{height: '100%'}}>
                        <Permission choose={this.state.choose_num} onChange={this.onChangeNum.bind(this)}
                                 // display={this.state.display}
                        />
                        <Component choose={this.state.choose_num}/>

                </Layout>
            </div>
        )
    }
}

//定义映射
const mapStateToProps = (state) => {
    return {
        permission:state.getIn(['home_app', 'permission']),
        requestFlag:state.getIn(['home_app', 'requestFlag']),
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        getUserPermission(){
            dispatch(actionCreators.getUserPermission({}))
        }
    }//end return
}

export default connect(mapStateToProps, mapDispathToProps)(PermissionHome);