import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import View from './view'

//在components里面连接对应的Model,connect会把namespace对应的state绑定到props,并且还会绑定dispatch给props。
class Index extends PureComponent {

  render() {
    const { loading, dispatch,dict,data,unitType} = this.props;
    const onSubmit =(data)=>{
      dispatch({
        type:'noSamePeople/getData',
        payload:{data}
      })
    }
    return (
      <Page title={'同单位各负责人中标情况对比'} loading={loading}>
        <View dict={dict} handleSubmit={onSubmit} loading={loading} data={data} unitType={unitType} />
      </Page>
    );
  }
}
function mapStateToProps({ noSamePeople, loading  }) {
  return {
    ...noSamePeople,
    loading: loading.models.snbThree,
  };
}

export default connect(mapStateToProps)(Index);
