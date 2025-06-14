'use client';

import { useState } from 'react';

import { EditUsernameModal } from '@/components/settings';
import IconPen from '@/components/svg/IconPen';
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
              className="h-16 border-b border-zinc-500 cursor-pointer hover:bg-zinc-950"
              onClick={() => handleOpenModal(setting.id)}
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

      {/* TODO: make rows accessible (focusable, etc.) */}

      {mountedModal === 'username' && (
        <EditUsernameModal
          open={openModal === 'username'}
          user={user}
          onOpenChange={(open) => handleCloseModal(open, 'username')}
        />
      )}

      {mountedModal === 'email' && (
        <Modal
          open={openModal === 'email'}
          onOpenChange={(open) => handleCloseModal(open, 'email')}
        >
          <Modal.Portal open={openModal === 'email'}>
            <Modal.Header>
              Edit
              <br />
              Email
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
