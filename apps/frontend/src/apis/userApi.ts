import apiClient from '@/apis/apiClients';
import { User as UserInterface } from '@fullstack-monorepo/shared/user';

export async function fetchUserData() {
  try {
    const response = await apiClient.get('/users/fetch-user-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export async function updateUserData(data: Partial<UserInterface>) {
  try {
    const response = await apiClient.put('/users/update-user-data', data);
    return response.data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
}