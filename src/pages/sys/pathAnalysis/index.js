import React from 'react';
import { connect } from 'dva';
import { message } from 'antd';
// import moment from 'moment';
import _ from 'lodash';
import MyForm from './components/form';
import { DataTable } from '@components';
import { Page } from '@components';
import {Fragment} from "@/pages/sys/view/components/view1";


function PathAnalysis(props) {
    const {  dict, events, pages, dispatch,loading ,dataSource} = props;
    const submit = (values) => {
        const { platformType, pages, ...rest } = values;
        if (platformType === "all") {
            values.pages = undefined;
        } else if (pages && pages.length === 0) {
            message.error('请填好查询条件后提交！');
            return false;
        }
      let count = 0;
      for (const key in rest) {
            if (_.isArray(values[key]) && values[key].length === 0) {

            } else if (values[key] === undefined || values[key] === null) {

            }else {
              count++;
            }
        }
        if(count<=0){
          message.error('请填好查询条件后提交！');
          return false;
        }
        dispatch({
            type: 'pathAnalysis/fetch',
            payload: {
                ...values,

            },
        });
        message.success('提交成功！');
    };

    const handleGetDict = (v) => {
        dispatch({
            type: 'pathAnalysis/getDict',
            payload: {
                timeType: v
            },
        });
    };
    return (
        <Page loading={false} title={'基金查询'}>
          <MyForm dict={dict} onSubmit={submit} events={events} pages={pages} handleGetDict={handleGetDict} />
          <DataTable
            loading={loading}
            data={dataSource}
            headerStyle={{ marginTop: 15 }}
            sortIndexs={[1]}
          />
        </Page>
    );
}

function mapStateToProps(state) {
    const { pageData, eventData, dict, events, pages,dataSource } = state.pathAnalysis;
    return {
        pageData,
        eventData,
        events,
        pages,
        dict,
        dataSource,
        loading: state.loading.models.pathAnalysis,
    };
}

export default connect(mapStateToProps)(PathAnalysis);
