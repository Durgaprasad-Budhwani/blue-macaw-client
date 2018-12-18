import Loadable from 'react-loadable';
import Loader from '../components/common/Loader';

export default Component => Loadable({
    loader: Component,
    loading: Loader,
    delay: 0,
    timeout: 100,
});
