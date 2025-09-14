const Tag = (props) => {
  return (
    <span className="px-2.5 py-[0.2rem] border-[1px] border-red rounded-[10rem] uppercase text-xs">
      {props.text ? props.text : "just tag"}
    </span>
  );
};

export default Tag;
