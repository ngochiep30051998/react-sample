import { Fragment } from 'react';

const dotStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 18,
  height: 18,
  margin: '0 5px',
  borderRadius: '50%',
  backgroundColor: '#667eea',
  animation: 'bounceDelay 1.4s infinite ease-in-out both',
};

export default function Spinner() {
  return (
    <Fragment>
      <style>{`
        @keyframes bounceDelay {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
      <div className="fixed z-[10051] top-[40%] left-1/2 -translate-x-1/2 text-center">
        <div style={{ ...dotStyle, animationDelay: '-0.32s' }} />
        <div style={{ ...dotStyle, animationDelay: '-0.16s' }} />
        <div style={dotStyle} />
      </div>
    </Fragment>
  );
}
