import CircularSpinner from '@/components/common/CircularSpinner/CircularSpinner';

const Loading = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularSpinner />
    </div>
  );
};

export default Loading;
