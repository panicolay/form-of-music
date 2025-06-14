'use client';

import { useState } from 'react';

import { Button, Field, Modal } from '@/components/ui';
import type { ExtendedUser } from '@/types/ExtendedUser';

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
      // TODO: Appel API pour sauvegarder
      console.log('Saving username:', username);

      // Simuler un délai d'API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fermer la modal après succès
      onOpenChange(false);
    } catch (err) {
      setError('Failed to update username');
    } finally {
      setIsLoading(false);
    }
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

        <Modal.Content>
          <Field
            required
            error={error}
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Modal.Content>

        <Modal.Footer>
          <Modal.Close>
            <Button disabled={isLoading} onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Close>
          <Button className="w-full" disabled={isLoading} onClick={handleSave}>
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal.Portal>
    </Modal>
  );
}
