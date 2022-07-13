import React from "react";
import { getDeepValue } from "../utils";

type TableProps<TItem> = {
  item: TItem;
  renderItem: (item: TItem) => React.ReactNode;
};

const Table = <TItem,>({ item, renderItem }: TableProps<TItem>) => {
  return null;
};

const obj = {
  a: {
    b: "2",
    c: 3,
  },
  d: {
    e: 4,
    f: "5",
  },
};

const GenericTableComponent = () => {
  const value = getDeepValue(obj, "a", "c");
  // type data value adalah number
  console.log(value);

  const value2 = getDeepValue(obj, "a", "b");
  // type data value2 adalah string
  console.log(value2);

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
        item={{ a: "2", b: 3 }}
        renderItem={(item) => {
          // type data item adalah {a: string, b: number}
          return <div />;
        }}
      />
    </div>
  );
};

export default GenericTableComponent;
