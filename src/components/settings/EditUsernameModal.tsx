'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Field, Modal } from '@/components/ui';
import type { ExtendedUser } from '@/types/ExtendedUser';
import { generateUsername } from '@/utils/generateUsername';

interface EditUsernameModalProps {
  user: ExtendedUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EditUsernameModal({
  user,
  open,
  onOpenChange,
}: EditUsernameModalProps) {
  const router = useRouter();
  // État local pour le formulaire
  const [username, setUsername] = useState(user.username || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fonction pour sauvegarder
  const handleSave = async () => {
    // Validation simple
    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    if (username.length < 2) {
      setError('Username must be at least 2 characters');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const { updateUsername } = await import('@/lib/profiles');
      const result = await updateUsername(user.id, username);

      if (!result.success) {
        setError(result.error || 'Failed to update username');
        return;
      }

      onOpenChange(false);

      if (result.newUsername) {
        router.push(`/${result.newUsername}/settings`);
        router.refresh();
      }
    } catch (err) {
      setError('Failed to update username');
    } finally {
      setIsLoading(false);
    }

    // TODO: Linter alert for err
    // TODO: Should we use validation like in (auth)?
  };

  // Fonction pour générer un username aléatoire
  const handleGenerate = () => {
    const newUsername = generateUsername();
    setUsername(newUsername);
    setError(''); // Clear any existing errors
  };

  // Reset quand on ferme la modal
  const handleClose = () => {
    setUsername(user.username || '');
    setError('');
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Portal open={open}>
        <Modal.Header>
          Edit
          <br />
          Username
        </Modal.Header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <Modal.Content>
            <div className="flex border border-zinc-500 divide-x divide-zinc-500">
              <Field
                required
                className="flex-1"
                error={error}
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                disabled={isLoading}
                size="auto"
                type="button"
                onClick={handleGenerate}
              >
                Generate
              </Button>
            </div>
          </Modal.Content>

          <Modal.Footer>
            <Modal.Close>
              <Button disabled={isLoading} onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Close>
            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading ? 'Saving...' : 'Save'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Portal>
    </Modal>
  );
}
