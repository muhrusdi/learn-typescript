import React from "react";

type TableProps<TItem> = {
  item: TItem;
  renderItem: (item: TItem) => React.ReactNode;
};

const Table = <TItem, unknow>({ item, renderItem }: TableProps<TItem>) => {
  return null;
};

const GenericTableComponent = () => {
  return (
    <div>
      <Table
        item={{ foo: "2", bar: "3" }}
        renderItem={(item) => {
          // type data item adalah {foo: string, baar: string}
          return <div />;
        }}
      />
      <Table
        item={{ a: "2", b: "3" }}
        renderItem={(item) => {
          // type data item adalah {a: string, b: string}
          return <div />;
        }}
      />
    </div>
  );
};

export default GenericTableComponent;
