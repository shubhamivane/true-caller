import { app } from '../../../index';
import { auth } from '../../services/auth/v1';

app.post('/api/v1/login', auth.login);