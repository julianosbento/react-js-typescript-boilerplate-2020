import axios from 'axios';
import { ApiRoutes } from '../../config/api/routes';

const api = axios.create({
  baseURL: ApiRoutes.MOCK_API,
});

export default api;
