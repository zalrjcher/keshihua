import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import View from './view'
import { message } from 'antd';

//在components里面连接对应的Model,connect会把namespace对应的state绑定到props,并且还会绑定dispatch给props。
class Index extends PureComponent {

  render() {
    const { loading, dispatch,dict,data,unitType} = this.props;
    const onSubmit =(values)=>{
      dispatch({
        type:'subjectmorep/getData',
        payload:{values}
      });
      message.success('提交成功！');
    }
    return (
      <Page title={'某一学科多个负责人中标情况对比'} loading={loading}>
        <View dict={dict} handleSubmit={onSubmit} loading={loading} data={data} unitType={unitType} />
      </Page>
    );
  }
}
function mapStateToProps({ subjectmorep, loading  }) {
  return {
    ...subjectmorep,
    loading: loading.models.snbThree,
  };
}

export default connect(mapStateToProps)(Index);
