/**
 * 自定義按鈕組件
 * @param {string} props.containerStyles - 按钮容器样式 (width & height)
 * @param {string} props.text - 按钮文本内容
 * @returns {JSX.Element} 返回自定義按鈕組件的 JSX 元素
 */

const CustomButton = ({
  containerStyles,
  text,
}: {
  containerStyles: string;
  text: string;
}) => {
  return (
    <button
      className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase`}
    >
      <span className=" ease absolute top-1/2  h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
      <span className=" ease relative text-white transition duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
