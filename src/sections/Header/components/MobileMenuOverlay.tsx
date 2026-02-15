type MobileMenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenuOverlay = ({ isOpen, onClose }: MobileMenuOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed bg-black/20 h-dvh w-full z-[-1] left-0 top-14 md:hidden"
    />
  );
};
