import Axios from 'axios';

declare module 'axios-instance' {
  const instance: Axios;
  export default instance;
}
