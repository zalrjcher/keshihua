import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';

//在components里面连接对应的Model,connect会把namespace对应的state绑定到props,并且还会绑定dispatch给props。
class Index extends PureComponent {
  render() {
    const { loading } = this.props;
    return (
      <Page title={'view1'} loading={loading}>
         你好哈哈
      </Page>
    );
  }
}
function mapStateToProps({  loading }) {
  return {
    loading: loading.models.snbThree,
  };
}

export default connect(mapStateToProps)(Index);
