'use client';

import { useState } from 'react';

import { Button, Field, Modal } from '@/components/ui';
import type { ExtendedUser } from '@/types/ExtendedUser';

interface EditEmailModalProps {
  user: ExtendedUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EditEmailModal({
  user,
  open,
  onOpenChange,
}: EditEmailModalProps) {
  // État local pour le formulaire
  const [email, setEmail] = useState(user.email || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fonction pour sauvegarder
  const handleSave = async () => {
    // Validation simple
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    // Vérifier si l'email a changé
    if (email === user.email) {
      setError('Please enter a different email address');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const { updateEmail } = await import('@/lib/profiles');
      const result = await updateEmail(email);

      if (!result.success) {
        setError(result.error || 'Failed to update email');
        return;
      }

      setSuccess(result.message || 'Email update initiated');

      // Fermer la modal après 2 secondes pour laisser le temps de lire
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      setError('Failed to update email');
    } finally {
      setIsLoading(false);
    }
  };

  // Reset quand on ferme la modal
  const handleClose = () => {
    setEmail(user.email || '');
    setError('');
    setSuccess('');
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Portal open={open}>
        <Modal.Header>
          Edit
          <br />
          Email
        </Modal.Header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <Modal.Content>
            <Field
              required
              className="border border-zinc-500"
              error={error}
              name="email"
              showLabel={false}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {success && (
              <div className="mt-2 text-sm text-green-600">{success}</div>
            )}
          </Modal.Content>

          <Modal.Footer>
            <Modal.Close>
              <Button disabled={isLoading} onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Close>
            <Button
              className="w-full"
              disabled={isLoading || !!success}
              type="submit"
            >
              {isLoading
                ? 'Sending...'
                : success
                  ? 'Check your email'
                  : 'Update Email'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Portal>
    </Modal>
  );
}
