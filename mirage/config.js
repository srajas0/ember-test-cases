import users from './routes/users'

export default function() {
  this.namespace = '/api';
  users(this);
}
