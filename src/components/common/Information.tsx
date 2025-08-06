type Props = {
  title: string;
  parentPath?: string;
};

export default function Information({ title, parentPath }: Props) {
  return (
    <div id="information">
      <div className="flex between">
        <h1 className="main">{title}</h1>
        <div className="breadcrumb">
          <div className="sub">🍞 Home</div>
          <div className="arrow"></div>
          {parentPath && (
            <>
              <div className="sub">{parentPath}</div>{" "}
              <div className="arrow"></div>
            </>
          )}
          <div className="sub">{title}</div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
