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
        type:'field/getData',//方法名
        payload:{values}//参数
      });
      message.success('提交成功！');
    }
    return (
      <Page title={'不同研究领域中标情况对比'} loading={loading}>
        <View dict={dict} handleSubmit={onSubmit} loading={loading} data={data} unitType={unitType} />
      </Page>
    );
  }
}
function mapStateToProps({ field, loading  }) {
  return {
    ...field,
    loading: loading.models.field,
  };
}

export default connect(mapStateToProps)(Index);
