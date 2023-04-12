import { Box } from "@/components/atoms/Box";
import { TableHead } from "./TableHead";
import { GridTable } from "./GridTable";
import { GridItem } from "./GridItem";
import { Spinner } from "@/components/atoms/Spinner";

type AcceptedData<T extends string> = Record<T, string | number>;
type Props<T extends AcceptedData<B>, B extends string> = {
  title: string;
  data: T[];
  // eslint-disable-next-line no-unused-vars
  render?: (key: keyof T, value: string | number) => React.ReactNode;
};

export const Table = <T extends AcceptedData<B>, B extends string>({
  data,
  title,
  render,
}: Props<T, B>) => {
  const categories = data[0] ? Object.keys(data[0]) : ["loading"];
  const loading = categories[0] === "loading";

  return (
    <div className={`${loading ? "animate-pulse" : ""}`}>
      <TableHead title={title} />
      <GridTable
        size={categories.length}
        className="bg-primary pl-4 pr-1 pt-6 "
      >
        {categories.map((category, index) => (
          <GridItem
            className="text-xs pb-2 border-b border-b-text pr-6"
            size={categories.length}
            index={index}
            row={1}
            col={index + 1}
            key={`category-${index}`}
          >
            {category}
          </GridItem>
        ))}
      </GridTable>
      <Box className="pl-4 pr-1 pt-2 min-h-[150px]">
        {!loading ? (
          <GridTable
            className="max-h-96 overflow-y-auto"
            size={categories.length}
          >
            {data.map((item, index) =>
              Object.entries(item).map(([key, value], index2) => (
                <GridItem
                  index={index2}
                  row={index + 2}
                  col={index2 + 1}
                  size={categories.length}
                  key={`value-${index}-${index2}`}
                  className="pr-2"
                >
                  {render
                    ? render(key as keyof T, value as string | number)
                    : (value as string | number)}
                </GridItem>
              ))
            )}
          </GridTable>
        ) : (
          <div className="flex justify-center items-center h-[150px]">
            <Spinner />
          </div>
        )}
      </Box>
    </div>
  );
};
