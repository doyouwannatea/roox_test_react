import { User } from 'models/User';

export default class JsonPlaceholderApi {
  private static BASE_URL = 'https://jsonplaceholder.typicode.com/';

  async getUsers(): Promise<User[]> {
    const res = await fetch(JsonPlaceholderApi.BASE_URL + 'users');
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }
}
