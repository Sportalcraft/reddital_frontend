import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// required for enzyme tests
configure({ adapter: new Adapter() });