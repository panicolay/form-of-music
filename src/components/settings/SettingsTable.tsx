'use client';

import { useState } from 'react';

import IconPen from '@/components/svg/IconPen';
import { Button, Modal } from '@/components/ui';
import type { ExtendedUser } from '@/types/ExtendedUser';

interface SettingsTableProps {
  user: ExtendedUser;
}

export default function SettingsTable({ user }: SettingsTableProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

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
    <table
      className="
        w-full
        border-t border-zinc-500
      "
    >
      <tbody>
        {settings.map((setting) => (
          <Modal
            key={setting.id}
            open={openModal === setting.id}
            onOpenChange={(open) => setOpenModal(open ? setting.id : null)}
          >
            <Modal.Trigger>
              <tr className="h-16 border-b border-zinc-500 cursor-pointer hover:bg-zinc-950">
                <td className="px-4 font-poppins text-sm text-zinc-400 uppercase">
                  {setting.label}
                </td>
                <td className="text-right">
                  <div className="flex gap-4 px-4 items-center justify-end text-zinc-200">
                    {setting.value}
                    <IconPen className="text-zinc-400" size={16} />
                  </div>
                </td>
              </tr>
            </Modal.Trigger>
            <Modal.Portal open={openModal === setting.id}>
              <Modal.Header>
                Edit
                <br />
                {setting.label}
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
        ))}
      </tbody>
    </table>
  );
}
