type Props = {
  width?: string;
  height?: string;
};

const Loading = ({ width = '20', height = '20' }: Props) => (
  <div
    className={`loader w-${width} h-${height} ] rounded-full border-4 border-t-[#3498db]`}
  ></div>
);

export default Loading;
