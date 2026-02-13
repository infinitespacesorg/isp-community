type MobileMenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenuOverlay = ({ isOpen, onClose }: MobileMenuOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed bg-black/20 box-border caret-transparent h-dvh w-full z-[-1] left-0 top-[60px] md:hidden"
    />
  );
};
