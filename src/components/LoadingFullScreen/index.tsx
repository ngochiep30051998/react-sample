export default function LoadingFullScreen() {
  return (
    <div className="fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center">
      <div
        className="w-12 h-12 rounded-full animate-spin"
        style={{
          border: '4px solid rgba(255,255,255,0.3)',
          borderTopColor: '#fff',
        }}
      />
    </div>
  );
}
