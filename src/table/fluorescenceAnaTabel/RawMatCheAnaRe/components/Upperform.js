import React, {Component} from 'react';
import {Table, InputNumber} from 'antd';

import {limitDecimals2} from "../../../../package/Limit";

import {HuaYSOrder_JC} from "../../../../Constant/TableOrder"

import * as actionCreators from "../../../fluorescenceAnaTabel/RawMatCheAnaRe/store/actionCreators";
import {deepCopy} from "../../../../Helper/Copy";
import {connect} from "react-redux";
import {autoCalculateHJ, calculate_pass_rate, autoCalculate_average,autoCalculate_IL} from "../../../../Helper/Calculate";

class UpperForm extends Component {

    /**初始化**/
    componentDidMount() {
    }

    /**
     * 第一列的时间变化
     */
    componentWillMount() {
    }

    /**更新props**/
    componentWillReceiveProps(nextProps) {
    }

    /***
     *  计算合计
     **/
    updataData(indexH, indexL) {
    }

    /**
     * 表格输入数据变化的监听，同时所有的数据更新
     **/
    onInputNumberChange2 = (value, indexH, indexL) => {

        const {data, updateChange, order, startValue, endValue, width, timeChose,tableWidth} = this.props;
        let NewData = deepCopy(data);//复制一份出来


        //更新表中所填数据
        if (value != null) {
            NewData[indexH]["data"][indexL] = value;
        }

        //更新IL字段
        if(indexL === 5 || indexL === 6){
            autoCalculate_IL(NewData,indexH);
        }


        //计算合格率
        const position = order.indexOf(indexL);//判断此列是否需要计算合格率

        //判断是否需要计算
        if (position >= 0) {
            //计算合格率
            calculate_pass_rate(NewData, startValue, endValue, order, tableWidth, timeChose, indexL);
        }

        //计算平均值
        autoCalculate_average(NewData, timeChose, indexL,tableWidth);
        let sum = autoCalculateHJ(NewData[indexH]['data'], width);
        NewData[indexH]['data'][HuaYSOrder_JC.HJ] = sum;

        //更新数据
        updateChange(NewData);


    };


    //控制输入框的样式
    changeStyle = (value) => {
        if (value) {
            if (isNaN(value) || value > 100) {
                return {
                    borderColor: 'red',
                    color: 'red',
                }
            }

            const {startValue, endValue} = this.props;

            if (value) {
                if (isNaN(value) || value >= startValue || value <= endValue) {
                    return {
                        borderColor: 'red',
                        color: 'red',
                    }
                }
            }//end if

        }
    };


    render() {

        // 表头
        const columns = [
            {
                title: '时间',
                key: 'time',
                dataIndex: 'time',
                width: "7%"
            },
            {
                title: '水分',
                dataIndex: "SF",
                width: "8%"
            },
            {
                title: 'IL',
                dataIndex: 'IL',
                width: "8%"
            },
            {
                title: 'SiO2',
                dataIndex: 'SiO2',
                width: "8%"
            },
            {
                title: 'Al2O3',
                dataIndex: 'Al2O3',
                width: "8%"
            },
            {
                title: 'Fe2O3',
                dataIndex: 'Fe2O3',
                width: "8%"
            },
            {
                title: 'CaO',
                dataIndex: 'CaO',
                width: "8%"
            },
            {
                title: 'MgO',
                dataIndex: 'MgO',
                width: "8%"
            },
            {
                title: '合计',
                dataIndex: 'HJ',
                width: "8%"
            },
            {
                title: '人员',
                key: 'person',
                dataIndex: 'person',
                width: "6%"
            },

        ];

        const dataSource = [];

        const {data, timeChose, allTime} = this.props;
        const Data = deepCopy(data);
        const time = deepCopy(allTime);


        for (let i = 0; i < 8; i++) {

            const index = i + timeChose * 10;

            const value = Data[index]['data'];
            dataSource.push(
                {
                    time: time[timeChose][i],
                    SF: <span><InputNumber
                        style={this.changeStyle(value[HuaYSOrder_JC.SF])}
                        defaultValue={''}
                        value={isNaN(value[HuaYSOrder_JC.SF]) ? null : value[HuaYSOrder_JC.SF]}
                        formatter={limitDecimals2}//限制输入数值位数
                        parser={limitDecimals2}//限制输入数值位数
                        onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.SF)}
                    /></span>,
                    IL: <span>{isNaN(value[HuaYSOrder_JC.IL]) ? null : value[HuaYSOrder_JC.IL]}</span>,
                    SiO2:
                        <span><InputNumber
                            style={this.changeStyle(value[HuaYSOrder_JC.SiO2])}
                            defaultValue={''}
                            value={isNaN(value[HuaYSOrder_JC.SiO2]) ? null : value[HuaYSOrder_JC.SiO2]}

                            onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.SiO2)}
                        /></span>,
                    Al2O3:
                        <span><InputNumber
                            style={this.changeStyle(value[HuaYSOrder_JC.Al2O3])}
                            defaultValue={''}
                            value={isNaN(value[HuaYSOrder_JC.Al2O3]) ? null : value[HuaYSOrder_JC.Al2O3]}

                            onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.Al2O3)}
                        /></span>,
                    Fe2O3:
                        <span><InputNumber
                            style={this.changeStyle(value[HuaYSOrder_JC.Fe2O3])}
                            defaultValue={''}
                            value={isNaN(value[HuaYSOrder_JC.Fe2O3]) ? null : value[HuaYSOrder_JC.Fe2O3]}

                            onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.Fe2O3)}
                        /></span>,
                    CaO:
                        <span><InputNumber
                            style={this.changeStyle(value[HuaYSOrder_JC.CaO])}
                            defaultValue={''}
                            value={isNaN(value[HuaYSOrder_JC.CaO]) ? null : value[HuaYSOrder_JC.CaO]}

                            onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.CaO)}
                        /></span>,
                    MgO:
                        <span><InputNumber
                            style={this.changeStyle(value[HuaYSOrder_JC.MgO])}
                            defaultValue={''}
                            value={isNaN(value[HuaYSOrder_JC.MgO]) ? null : value[HuaYSOrder_JC.MgO]}

                            onChange={event => this.onInputNumberChange2(event, index, HuaYSOrder_JC.MgO)}
                        /></span>,
                    HJ: <span>{isNaN(value[HuaYSOrder_JC.HJ]) ? null : value[HuaYSOrder_JC.HJ]}</span>,
                    person:
                        Data[index]['user'],
                }
            )
        }

        //数据的自动处理显示部分

        dataSource.push(
            {
                time: '平均',
                SF:    Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.SF],
                IL:    Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.IL],
                SiO2:  Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.SiO2],
                Al2O3: Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.Al2O3],
                Fe2O3: Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.Fe2O3],
                CaO:   Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.CaO],
                MgO:   Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.MgO],
                HJ:    Data[8 + timeChose * 10]['data'][HuaYSOrder_JC.HJ]

            },
            {
                time: '合格率',
                SF: "~~",
                IL: '~~',
                SiO2: isNaN(Data[9 + timeChose * 10]['data'][HuaYSOrder_JC.SiO2])?null:Data[9 + timeChose * 10]['data'][HuaYSOrder_JC.SiO2]+" %",
                Al2O3: "~~",
                Fe2O3: '~~',
                CaO: Data[9 + timeChose * 10]['data'][HuaYSOrder_JC.CaO]+" %",
                MgO: Data[9 + timeChose * 10]['data'][HuaYSOrder_JC.MgO]+" %",
                HJ: '~~',
                // Remarks_list:'--',
            }
        );
        return (
            <div className="upper">
                {/*表格填写*/}
                <Table columns={columns} bordered dataSource={dataSource} pagination={false}/>
            </div>
        );
    }
}

//定义映射
const mapStateToProps = (state) => {
    return {
        date: state.getIn(['RawMatCheAnaRe', 'date']),
        order: state.getIn(['RawMatCheAnaRe', 'order']),
        width: state.getIn(['RawMatCheAnaRe', 'width']),
        tableWidth: state.getIn(['RawMatCheAnaRe', 'tableWidth']),
        allTime: state.getIn(['RawMatCheAnaRe', 'allTime']),
        timeChose: state.getIn(['RawMatCheAnaRe', 'timeChose']),
        data: state.getIn(['RawMatCheAnaRe', 'data']),
        requestFlag: state.getIn(['RawMatCheAnaRe', 'requestFlag']),
        startValue: state.getIn(['RawMatCheAnaRe', 'startValue']),
        endValue: state.getIn(['RawMatCheAnaRe', 'endValue']),
        person: state.getIn(['RawMatCheAnaRe', 'person']),
        tableName: state.getIn(['RawMatCheAnaRe', 'tableName']),

    }
};

const mapDispathToProps = (dispatch) => {
    return {
        updateChange(NewData) {

            dispatch(actionCreators.updateData({data: deepCopy(NewData)}))
        },


    }//end return
};

export default connect(mapStateToProps, mapDispathToProps)(UpperForm);
