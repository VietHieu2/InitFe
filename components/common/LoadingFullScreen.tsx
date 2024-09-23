import Loader from './Loader';

const LoadingFullScreen = () => {
  return (
    <div className="flex h-[100dvh] items-center justify-center lg:h-screen">
      <Loader />
    </div>
  );
};

export default LoadingFullScreen;
