import React, {Component} from 'react';
import {Table, Input, Button} from 'antd';

import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreators";
import {deepCopy} from "../../../../Helper/Copy";
import {ZhongKSOrder_CMS} from "../../../../Constant/TableOrder";

class UpperForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Time: [],//第一列的时间变化自动控制
        }
    }


    /**初始化**/
    componentDidMount() {
        //绑定ref
        // this.props.onRef(this);
    }

    /**
     * 第一列的时间变化
     */
    componentWillMount() {
        const allTime = [
            ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
            ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        ];
        this.setState({
            Time: [...allTime[this.props.timeChose]],
        //    Data: this.props.upperData,
        })
    }

    /**更新props**/
    componentWillReceiveProps(nextProps) {
        const allTime = [
            ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
            ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        ];
        this.setState({
            Time: [...allTime[nextProps.timeChose]],
      //      Data: nextProps.upperData,
        });
        //this.updataData_Initial(nextProps.standard);
    }


    postToHome(i) {//i是行数
        const {upperDataMiddle, timeChose, date, t_name, saveToHome} = this.props;
        const Data = JSON.parse(JSON.stringify(upperDataMiddle))
        const index = i + timeChose * 8
        saveToHome(index,1,t_name,date,Data)
    }

    /**
     * 表格输入数据变化的监听，同时所有的数据更新
     **/
    onInputNumberChange2 = (value, indexH, indexL) => {
        const {upperDataMiddle,updateChange,timeChose} = this.props;
        let NewData = deepCopy(upperDataMiddle);


        let hour = indexH + timeChose * 8;
        NewData[hour]["t_data"][indexL] = value;
        updateChange(NewData)
    };
    // onInputNumberChange3 = (event, indexH, indexL) => {
    //     let NewData = this.state.Data;
    //     let hour = indexH + this.props.timeChose * 8;
    //     NewData[hour]["t_data"][indexL] = event;
    //     this.setState({
    //         Data: NewData
    //     });
    // };

    //控制输入框的样式
    changeStyle = (value) => {
        if (value) {
            if (isNaN(value) || value > 100) {
                return {
                    borderColor: 'red',
                    color: 'red',
                }
            }
        }
    };


    render() {

        // 表头
        const columns = [
            {
                title: '时间',
                dataIndex: 'time',
                width: '5%'
            },
            {
                title: 'SiO2',
                dataIndex: 'SiO2',
                width: '6%'
            },
            {
                title: 'Al2O3',
                dataIndex: 'Al2O3',
                width: '6%'
            },
            {
                title: 'Fe2O3',
                dataIndex: 'Fe2O3',
                width: '6%'
            },
            {
                title: 'CaO',
                dataIndex: 'CaO',
                width: '6%'
            },
            {
                title: 'MgO',
                dataIndex: 'MgO',
                width: '6%'
            },
            {
                title: 'KH',
                dataIndex: 'KH',
                width: '6%'
            },
            {
                title: 'SM',
                dataIndex: 'SM',
                width: '6%'
            },
            {
                title: 'IM',
                dataIndex: 'IM',
                width: '6%'
            },
            {
                title: '石灰石',
                dataIndex: 'SHS',
                width: '6%'
            },
            {
                title: '砂岩',
                dataIndex: 'SY',
                width: '6%'
            },
            {
                title: '铁粉',
                dataIndex: 'TF',
                width: '6%'
            },
            {
                title: '粉煤灰',
                dataIndex: 'FMH',
                width: '6%'
            },
            {
                title: '细度',
                dataIndex: 'XD',
                width: '6%'
            },
            {
                title: '水分',
                dataIndex: 'SF',
                width: '6%'
            },
            {
                title: '人员',
                key: 'person',
                dataIndex: 'person',
                width: '5%'
            },
            {
                title: '暂存',
                key: 'btn_save',
                dataIndex: 'btn_save',
                width: '6%'
            }
        ];


        const {upperDataFront, upperDataMiddle, upperDataLast, startValue, endValue} = this.props;

        const DataFront = JSON.parse(JSON.stringify(upperDataFront))
        const DataMiddle = JSON.parse(JSON.stringify(upperDataMiddle))
        const DataLast = JSON.parse(JSON.stringify(upperDataLast))
        //中间八行的数据输入
        const data = [];
        data.push({
            time: "指标",
            SiO2: <span>{'~~~'}</span>,
            Al2O3: <span>{'~~~'}</span>,
            Fe2O3:
                <span>{'~~~'}</span>,
            CaO:
                <span>{'~~~'}</span>,
            MgO:
                <span>{'~~~'}</span>,
            KH:
                <span>{startValue[0]?startValue[0]+'--'+endValue[0]:''}</span>,
            SM:
                <span>{startValue[1]?startValue[1]+'--'+endValue[1]:''}</span>,
            IM:
                <span>{startValue[2]?startValue[2]+'--'+endValue[2]:''}</span>,
            SHS:
                <span>{'~~~'}</span>,
            SY:
                <span>{'~~~'}</span>,
            TF:
                <span>{'~~~'}</span>,
            FMH:
                <span>{'~~~'}</span>,
            XD:
                <span>{}</span>,
            SF:
                <span>{}</span>,
            person: '~~~',
            btn_save:
                "~~~"
        })
        for (let i = 0; i < 8; i++) {
            let hour = i + this.props.timeChose * 8;
            const valueFront = DataFront[hour]['t_data'];
            const valueMiddle = DataMiddle[hour]['t_data'];
            const valueLast = DataLast[hour]['t_data'];
            data.push(
                {
                    time: this.state.Time[i],
                    SiO2: <span>{isNaN(valueFront[ZhongKSOrder_CMS.SiO2]) ? null : valueFront[ZhongKSOrder_CMS.SiO2]}</span>,//与出模生料相对应
                    Al2O3: <span>{isNaN(valueFront[ZhongKSOrder_CMS.Al2O3]) ? null : valueFront[ZhongKSOrder_CMS.Al2O3]} </span>,
                    Fe2O3: <span> {isNaN(valueFront[ZhongKSOrder_CMS.Fe2O3]) ? null : valueFront[ZhongKSOrder_CMS.Fe2O3]}</span>,
                    CaO: <span>  {isNaN(valueFront[ZhongKSOrder_CMS.CaO]) ? null : valueFront[ZhongKSOrder_CMS.CaO]}</span>,
                    MgO: <span>{isNaN(valueFront[ZhongKSOrder_CMS.MgO]) ? null : valueFront[ZhongKSOrder_CMS.MgO]}</span>,
                    KH: <span> {isNaN(valueFront[ZhongKSOrder_CMS.KH]) ? null : valueFront[ZhongKSOrder_CMS.KH]}</span>,
                    SM: <span>{isNaN(valueFront[ZhongKSOrder_CMS.SM]) ? null : valueFront[ZhongKSOrder_CMS.SM]}</span>,
                    IM: <span>{isNaN(valueFront[ZhongKSOrder_CMS.IM]) ? null : valueFront[ZhongKSOrder_CMS.IM]}</span>,
                    SHS:
                        <span><Input
                            style={this.changeStyle(valueMiddle[ZhongKSOrder_CMS.SHS])}
                            defaultValue={''}
                            value={isNaN(valueMiddle[ZhongKSOrder_CMS.SHS]) ? null : valueMiddle[ZhongKSOrder_CMS.SHS]}
                            onChange={event => this.onInputNumberChange2(event.target.value, i, ZhongKSOrder_CMS.SHS)}
                        /></span>,
                    SY:
                        <span><Input
                            style={this.changeStyle(valueMiddle[ZhongKSOrder_CMS.SY])}
                            defaultValue={''}
                            value={isNaN(valueMiddle[ZhongKSOrder_CMS.SY]) ? null : valueMiddle[ZhongKSOrder_CMS.SY]}
                            onChange={event => this.onInputNumberChange2(event.target.value, i, ZhongKSOrder_CMS.SY)}
                        /></span>,
                    TF:
                        <span><Input
                            style={this.changeStyle(valueMiddle[ZhongKSOrder_CMS.TF])}
                            defaultValue={''}
                            value={isNaN(valueMiddle[ZhongKSOrder_CMS.TF]) ? null : valueMiddle[ZhongKSOrder_CMS.TF]}
                            onChange={event => this.onInputNumberChange2(event.target.value, i, ZhongKSOrder_CMS.TF)}
                        /></span>,
                    FMH:
                        <span><Input
                            style={this.changeStyle(valueMiddle[ZhongKSOrder_CMS.FMH])}
                            defaultValue={''}
                            value={isNaN(valueMiddle[ZhongKSOrder_CMS.FMH]) ? null : valueMiddle[ZhongKSOrder_CMS.FMH]}
                         
                            onChange={event => this.onInputNumberChange2(event.target.value, i, ZhongKSOrder_CMS.FMH)}
                        /></span>,
                    XD:
                        <span> {isNaN(valueLast[ZhongKSOrder_CMS.XD]) ? null : valueLast[ZhongKSOrder_CMS.XD]}</span>,
                    SF:
                        <span> {isNaN(valueLast[ZhongKSOrder_CMS.SF]) ? null : valueLast[ZhongKSOrder_CMS.SF]}</span>,
                    person:
                        DataMiddle[hour]['user'],
                    btn_save:
                        <Button type='primary' onClick={() => this.postToHome(i)}>暂存</Button>,
                }
            )
        }


        return (
            <div className="upper">
                {/*表格填写*/}
                <Table columns={columns} bordered dataSource={data} pagination={false}/>
            </div>
        );
    }

}

//定义映射
const mapStateToProps = (state) => {
    return {
        date: state.getIn(['RawFAnaRaRe', 'date']),
        timeChose: state.getIn(['RawFAnaRaRe', 'timeChose']),
        upperDataFront: state.getIn(['RawFAnaRaRe', 'upperDataFront']),
        upperDataMiddle: state.getIn(['RawFAnaRaRe', 'upperDataMiddle']),
        upperDataLast: state.getIn(['RawFAnaRaRe', 'upperDataLast']),
        bottomData: state.getIn(['RawFAnaRaRe', 'bottomData']),
        startValue:state.getIn(['RawFAnaRaRe','startValue']),
        endValue:state.getIn(['RawFAnaRaRe','endValue']),
        person: state.getIn(['RawFAnaRaRe', 'person']),
        t_name: state.getIn(['RawFAnaRaRe', 't_name']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        updateChange(NewData) {
            dispatch(actionCreators.updateUpperDataMiddle(NewData))
        },
        saveToHome(index, tableType, tableName, date, data) {
            dispatch(actionCreators.saveData({
                index:index,
                tableType:tableType,
                tableName:tableName,
                date:date,
                data:data
            }))
        },

    }//end return
}

export default connect(mapStateToProps, mapDispathToProps)(UpperForm);

