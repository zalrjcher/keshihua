import { PureComponent } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import View from './components/view1.js';

//在components里面连接对应的Model,connect会把namespace对应的state绑定到props,并且还会绑定dispatch给props。
class Index extends PureComponent {
    render() {
        const { loading, p1, dispatch } = this.props;
        const onSubmit = (times) => {
          //dispatch会触发models层里面effects中getData方法（也可以直接触发reducer中方法，看具体情况） ,getData就是models里的命名空间名字
            dispatch({
                type: 'viewModel/getData',
                payload: {
                    time: times,
                    key: "p1"
                }
            });
        };
        return (
            <Page title={'view1'} loading={loading}>
                <View data={p1} showY2={true} Y2SeriesIndex={[1]} Y2Name={"万"} YName={"万"} handleSubmit={onSubmit} loading={loading} />
            </Page>
        );
    }
}
function mapStateToProps({ viewModel, loading }) {
    return {
        ...viewModel,
        loading: loading.models.snbThree,
    };
}
export default connect(mapStateToProps)(Index);
