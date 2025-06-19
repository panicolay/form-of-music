'use client';

import { useState } from 'react';

import { IconPen } from '@/components/icons';
import { EditEmailModal, EditUsernameModal } from '@/components/settings';
import { Button, Modal } from '@/components/ui';
import type { ExtendedUser } from '@/types/ExtendedUser';

interface SettingsTableProps {
  user: ExtendedUser;
}

export default function SettingsTable({ user }: SettingsTableProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [mountedModal, setMountedModal] = useState<string | null>(null);

  const handleOpenModal = (modalId: string) => {
    setOpenModal(modalId);
    setMountedModal(modalId);
  };

  const handleCloseModal = (open: boolean, modalId: string) => {
    if (open) {
      setOpenModal(modalId);
    } else {
      setOpenModal(null);
      setTimeout(() => {
        setMountedModal(null);
      }, 200);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, settingId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpenModal(settingId);
    }
  };

  const settings = [
    {
      id: 'username',
      label: 'Username',
      value: user.username || 'No username',
    },
    {
      id: 'email',
      label: 'Email',
      value: user.email || 'No email',
    },
    {
      id: 'password',
      label: 'Password',
      value: '********',
    },
  ];

  return (
    <>
      <table className="w-full border-t border-zinc-500">
        <tbody>
          {settings.map((setting) => (
            <tr
              key={setting.id}
              aria-label={`Edit ${setting.label}: ${setting.value}`}
              className="h-16 border-b border-zinc-500 cursor-pointer hover:bg-zinc-900"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenModal(setting.id)}
              onKeyDown={(e) => handleKeyDown(e, setting.id)}
            >
              <td className="font-poppins text-sm text-zinc-400 uppercase px-4">
                {setting.label}
              </td>
              <td>
                <div className="flex gap-4 items-center justify-end px-4">
                  {setting.value}
                  <IconPen className="text-zinc-400" size={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mountedModal === 'username' && (
        <EditUsernameModal
          open={openModal === 'username'}
          user={user}
          onOpenChange={(open) => handleCloseModal(open, 'username')}
        />
      )}

      {mountedModal === 'email' && (
        <EditEmailModal
          open={openModal === 'email'}
          user={user}
          onOpenChange={(open) => handleCloseModal(open, 'email')}
        />
      )}

      {mountedModal === 'password' && (
        <Modal
          open={openModal === 'password'}
          onOpenChange={(open) => handleCloseModal(open, 'password')}
        >
          <Modal.Portal open={openModal === 'password'}>
            <Modal.Header>
              Edit
              <br />
              Password
            </Modal.Header>
            <Modal.Content>
              <p>This is the content of the modal</p>
            </Modal.Content>
            <Modal.Footer>
              <Modal.Close>
                <Button>Cancel</Button>
              </Modal.Close>
              <Button className="w-full">Save</Button>
            </Modal.Footer>
          </Modal.Portal>
        </Modal>
      )}
    </>
  );
}
