import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreateWorkspace from "@/hooks/queries/workspace/use-create-workspace";
import * as Dialog from "@radix-ui/react-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";

interface CreateWorkspaceModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateWorkspaceModal({
  open,
  onClose,
}: CreateWorkspaceModalProps) {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync } = useCreateWorkspace({ name });

  const workspaceInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const createdWorkspace = await mutateAsync();
    resetAndCloseModal();

    navigate({
      to: "/dashboard/workspace/$workspaceId",
      params: {
        workspaceId: createdWorkspace.id,
      },
    });
  };

  const resetWorkspaceState = async () => {
    await queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    setName("");
  };

  const resetAndCloseModal = () => {
    resetWorkspaceState();
    onClose();
  };

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        workspaceInputRef.current?.focus();
      });
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={resetAndCloseModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <Dialog.Title className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                New Workspace
              </Dialog.Title>
              <Dialog.Close className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300">
                <X size={20} />
              </Dialog.Close>
            </div>

            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="workspaceName"
                  aria-label="Workspace name"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-1"
                >
                  Workspace Name
                </label>
                <Input
                  ref={workspaceInputRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="My Workspace"
                  className="bg-white dark:bg-zinc-800/50"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <Dialog.Close asChild>
                  <Button
                    type="button"
                    className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  type="submit"
                  className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                >
                  Create Workspace
                </Button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
