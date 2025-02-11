'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from '@/components/molecules/UserTable';
import Button from '@/components/atoms/Button';
import EditUserModal from '@/components/molecules/EditUserModal';
import Notification from '@/components/atoms/Notification';
import { AppDispatch, RootState } from '@/store/store';
import { setError, setLoading, setUserInfo, updateUserInfo } from '@/store/slices/userSlice';
import { fetchUserData, updateUserData } from '@/apis/userApi';
import { User as UserInterface } from '@fullstack-monorepo/shared/user';
import { useAuth } from '@/context/AuthContext';

const UserList = () => {
  const { logout } = useAuth();
  const dispatch: AppDispatch = useDispatch();
  const { userInfo, loading } = useSelector((state: RootState) => state.user);

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleLoadUsers = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchUserData();
      dispatch(setUserInfo(data));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleEdit = (user: UserInterface) => {
    setSelectedUser({ ...user });
    setOpenModal(true);
  };

  const handleSave = async (user: Partial<UserInterface>) => {
    dispatch(setLoading(true));
    try {
      const data = await updateUserData(user);
      if (data) {
        dispatch(updateUserInfo(user));
        setOpenModal(false);
        setNotification({
          open: true,
          message: 'User updated successfully!',
          severity: 'success',
        });
      }
    } catch (err: any) {
      dispatch(setError(err.message));
      setNotification({
        open: true,
        message: err.message || 'Failed to update user',
        severity: 'error',
      });
    } finally {
      dispatch(setLoading(false));
      setOpenModal(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          width: '100%',
        }}
      >
        <Button style={{ width: '180px' }} size="medium" onClick={handleLoadUsers}>
          Fetch User Info
        </Button>
        <Button style={{ width: '150px' }} size="medium" onClick={logout} color="error">
          Logout
        </Button>
      </div>

      <UserTable loading={loading} users={userInfo} onEdit={handleEdit} />
      <EditUserModal
        open={openModal}
        user={selectedUser}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />
      <Notification
        message={notification?.message}
        open={notification?.open}
        severity={notification?.severity}
        onClose={() => setNotification((prev) => ({ ...prev, open: false }))}
      />
    </div>
  );
};

export default UserList;
